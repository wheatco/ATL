// Mithril component for tool management and maybe other things

var m = require('mithril');

/********
CHECKLIST
********/

var Checklist = {
  vm: {},
  controller: function(args) {
    var vm = Checklist.vm;
    vm.items = args.items;
  },
  view: function(ctrl, args) {
    var vm = Checklist.vm;
    return m('.calc-item', vm.items().map(function(item) {
      return m('div.checklist-label.middle.row', [
        m('button.deleteButton', {
          onclick: function(e) {
            return args.onclick(item);
          }
        }, 'x'),
        m('div.checkbox-label', [
          m('strong', item.name || '')
        ])
      ]);
    }));
  }
};

/**********
TOOL ENTRY
**********/

var ToolEntry = {
  vm: {},
  init: function () {
    var vm = ToolEntry.vm;
    vm.name = m.prop('');
    vm.acrossWeb = m.prop(0);
    vm.aroundWeb = m.prop(0);
    vm.corner = m.prop('Square');
    vm.cornerSize = m.prop('1/3');
  },
  controller: function(args) {
    var vm = ToolEntry.vm;
    vm.cornerSizes = [
      '1/3',
      '1/4',
      '1/8',
      '1/16',
      '1/32',
      '1/64'
    ];
    ToolEntry.init();
  },
  view: function(ctrl, args) {
    var vm = ToolEntry.vm;
    return m('.calc-item.tool-entry.col.justify', [
      m('.row.gap-4.justify', [
        // Name and measurements
        m('.calc-item.col.gap-1.justify.fill-1', [
          m('label', 'name'),
          m('input.input-text.good border', {
            type: 'text',
            placeholder: 'New tool',
            onchange: m.withAttr('value', vm.name),
            value: vm.name()
          }),
          m('label', 'across the web (in)'),
          m('input.input-text.good border', {
            type: 'number',
            min: 0,
            onchange: m.withAttr('value', vm.acrossWeb),
            value: vm.acrossWeb()
          }),
          m('label', 'around the web (in)'),
          m('input.input-text.good border', {
            type: 'number',
            min: 0,
            onchange: m.withAttr('value', vm.aroundWeb),
            value: vm.aroundWeb()
          }),
        ]),
        // Corner shape and size
        m('.calc-item.col.gap-3.justify.fill-1', [
          m('.label-header', 'Corner Shape' ),
          calc.radios(vm.corner, [{
              val: 'Square',
              label: 'Square',
          }, {
              val: 'Rounded',
              label: 'Rounded',
          }]),
          m('.label-header', 'Corner Size'),
          m.component(Select2, {
              data: {
                  data: vm.cornerSizes
              },
              value: vm.cornerSize,
              onchange: function(val) {
              },
              width: '100%',
          }),
        ]),

      ]),
      // Add button
      m('button.addButton', {
        onclick: function() {
          var tool = {
            name: vm.name(),
            acrossWeb: vm.acrossWeb(),
            aroundWeb: vm.aroundWeb(),
            corner: vm.corner(),
            cornerSize: vm.cornerSize()
          };

          if (tool.name.length && args.onclick) {
            args.onclick(tool);
            // Reset
            ToolEntry.init();
          }
        }
      }, 'Add')
    ]);
  }
};

/**********
QUOTE TABLE
**********/

function tableWithQuotes(quotes, callback) {
  var header = [
    m('tr', [
      m('th', 'ID'),
      m('th', 'Name'),
      m('th', '')
    ])
  ];
  var rows = []
  if (quotes) {
    rows = quotes.map(function(quote) {
      return m('tr', [
        m('td', quote._id),
        m('td', quote.name),
        m('button.previewButton', {
          onclick: function(e) {
            callback(quote);
          }
        }, 'preview')
      ]);
    });
  }

  header.push.apply(header, rows);
  return header;
}

/********
MAIN PAGE
********/

window.AdminPage = {
  vm: {},
  controller: function(args) {
    var vm = AdminPage.vm;
    const app = window.app;

    vm.tools = m.prop([]);
    app.service('tools').find().then(tools => {
      vm.tools(tools.data);
    });

    vm.quotes = m.prop([]);
    app.service('quotes').find().then(quotes => {
      vm.quotes(quotes.data);
    });

    // Helpers
    this.addTool = function(tool) {
      var vm = AdminPage.vm;
      app.service('tools').create(tool).then(tool => {
        // TODO: make this update automatic
        app.service('tools').find().then(tools => {
          vm.tools(tools.data);
        });
      });
    }
    this.deleteTool = function(tool) {
      var vm = AdminPage.vm;
      app.service('tools').remove({
        _id: tool._id
      }).then(removed => {
        app.service('tools').find().then(tools => {
          vm.tools(tools.data);
        });
      });
    }

  },
  view: function(ctrl, args) {
    var vm = AdminPage.vm;
    return m('div', [
      m('h1.title', 'Administration'),
      m('.calc.column.admin-page', [
        m('h2', 'Tools'),
        m('div', [
          m.component(Checklist, {
            items: vm.tools,
            onclick: function(item) {
              ctrl.deleteTool(item);
            }
          }),
          m('h2', 'New Tool'),
          m.component(ToolEntry, {
            onclick: function(tool) {
              ctrl.addTool(tool);
            }
          })
        ]),
        m('h2', 'Quotes'),
        m('table', tableWithQuotes(vm.quotes(), quote => {
          window.open('/previewQuote?q=' + quote._id);
        }))
      ])
    ]);
  }
}
