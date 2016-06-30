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
      return m('label.checklist-label.middle.row', {

      }, [
        args.delete ? m('button.deleteButton', {
          onclick: function(e) {
            return args.onclick(item);
          }
        }, 'x') : null,
        m('div.checkbox-label', [
          m('strong', item.name || '')
        ]),
        args.button ? m('button.viewButton', {
          onclick: function(e) {
            return args.onclick(item);
          },
          style: 'position: absolute;right: 15px;top: 2px;'
        }, 'View Quote') : null
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
          // placeholder: 'Add a tool...',
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
  vm.newTool = m.prop('');
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
      vm.newTool('');
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

//here's the view
AdminPage.view = function(ctrl, args) {
  var vm = AdminPage.vm;

  return m('div', [
    m('h1.title', 'Administration'),
    m('.calc.row.center.gap-5.admin-page', [
      m('div.fill', [
        m('h1', 'Manage Tools'),
        m.component(Checklist, {
          items: vm.tools,
          delete: true,
          button: false,
          onclick: function(item) {
            deleteTool(item);
          }
        }),
        m.component(ToolEntry, {
          onclick: function(tool) {
            addTool(tool);
          }
        })
      ])


    ]),
    m('.calc.row.center.gap-5.admin-page',
      m('div.fill', [
        m('h1', 'View Quotes'),
        m.component(Checklist, {
          items: vm.quotes,
          delete: false,
          button: true,
          onclick: function(item) {
            window.location = '/viewQuote?q=' + item._id;
            console.log('clicked', item);
          }
        })
      ]))
  ]);
};

window.AdminPage = AdminPage;
