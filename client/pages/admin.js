// Mithril component for tool management and maybe other things

var m = require('mithril');

var Checklist = {
  vm: {},
  controller: function(args) {
    var vm = Checklist.vm;
    vm.items = args.items;
  },
  view: function(ctrl, args) {
    var vm = Checklist.vm;
    return m('.calc-item', vm.items().map(function(item) {
      return m('div.checklist-label.middle.row', {

      }, [
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

var ToolEntry = {
  vm: {},
  controller: function(args) {
    var vm = Checklist.vm;
    vm.name = m.prop('');
    vm.acrossWeb = m.prop(0);
    vm.aroundWeb = m.prop(0);
  },
  view: function(ctrl, args) {
    var vm = Checklist.vm;
    return m('.calc-item.tool-entry.row.gap-2.bottom', [
      m('div.column', [
        m('label', 'name'),
        m('input.input-text.good border', {
          type: 'text',
          placeholder: 'New tool',
          onchange: m.withAttr('value', vm.name),
          value: vm.name()
        })
      ]),
      m('div.column', [
        m('label', 'across the web (in)'),
        m('input.input-text.good border', {
          type: 'number',
          min: 0,
          onchange: m.withAttr('value', vm.acrossWeb),
          value: vm.acrossWeb()
        })
      ]),
      m('div.column', [
        m('label', 'around the web (in)'),
        m('input.input-text.good border', {
          type: 'number',
          min: 0,
          onchange: m.withAttr('value', vm.aroundWeb),
          value: vm.aroundWeb()
        }),
      ]),
      m('button.addButton', {
        onclick: function() {
          var tool = {
            name: vm.name(),
            acrossWeb: vm.acrossWeb(),
            aroundWeb: vm.aroundWeb()
          };

          if (tool.name.length && args.onclick) {
            args.onclick(tool);
          }
        }
      }, '+')
    ]);
  }
};

var AdminPage = {};

//for simplicity, we use this component to namespace the model classes
AdminPage.vm = {};

AdminPage.controller = function(args) {
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
};

function addTool(tool) {
  var vm = AdminPage.vm;
  app.service('tools').create(tool).then(tool => {
    // TODO: make this update automatic
    app.service('tools').find().then(tools => {
      vm.tools(tools.data);
    });
  });
}

function deleteTool(tool) {
  var vm = AdminPage.vm;
  app.service('tools').remove({
    _id: tool._id
  }).then(removed => {
    app.service('tools').find().then(tools => {
      vm.tools(tools.data);
    });
  });
}

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
        m('button', {
          onclick: function (e) {
            callback(quote);
          }
        }, 'preview')
      ]);
    });
  }

  header.push.apply(header, rows);
  return header;
}

//here's the view
AdminPage.view = function(ctrl, args) {
  var vm = AdminPage.vm;

  return m('div', [
    m('h1.title', 'Administration'),
    m('.calc.column.admin-page', [
      m('h2', 'Tools'),
      m('div', [
        m.component(Checklist, {
          items: vm.tools,
          onclick: function(item) {
            deleteTool(item);
          }
        }),
        m.component(ToolEntry, {
          onclick: function(tool) {
            addTool(tool);
          }
        })
      ]),
      m('h2', 'Quotes'),
      m('table', tableWithQuotes(vm.quotes(), quote => {
        window.open('/preview/'+quote._id);
      }))
    ])
  ]);
};

window.AdminPage = AdminPage;
