// Mithril component for tool mgmt

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
    if (vm.items().length == 0) return  m('p', 'No items yet.');
    return m('.calc-item', vm.items().map(function(item) {
      return m('div.checklist-label.middle.row', [
        m('button.deleteButton', {
          onclick: function(e) {
            return args.onclick(item);
          }
        }, 'x'),
        m('div.fill-2', `${item.name.toUpperCase()}`),
        m('div', `Across: ${item.acrossWeb} Around: ${item.aroundWeb} Shape: ${item.shape} Corner: ${item.cornerSize}`)
      ]);
    }));
  }
};

/**********
TOOL ENTRY
**********/

var ToolEntry = {
  vm: {},
  init: function() {
    var vm = ToolEntry.vm;
    vm.name = m.prop('');
    vm.acrossWeb = m.prop(0);
    vm.aroundWeb = m.prop(0);
    vm.shape = m.prop('Square');
    vm.cornerSize = m.prop('1/3');
  },
  controller: function(args) {
    var vm = ToolEntry.vm;
    vm.cornerSizes = m.prop([
      '1/3',
      '1/4',
      '1/8',
      '1/16',
      '1/32',
      '1/64'
    ]);
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
          m('.label-header', 'Shape'),
          calc.radios(vm.shape, [{
            val: 'Square',
            label: 'Square',
          }, {
            val: 'Round',
            label: 'Round',
          }]),
          m('.label-header', 'Corner Size'),
          m.component(Select2, {
            data: vm.cornerSizes,
            value: vm.cornerSize,
            onchange: function(val) {},
            options: {
              width: '100%'
            }
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
            shape: vm.shape(),
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

/********
MAIN PAGE
********/

var ToolsPage = {
  vm: {},
  controller: function(args) {
    var vm = AdminPage.vm;
    const app = window.app;

    vm.tools = m.prop([]);
    app.service('tools').find().then(tools => {
      vm.tools(tools.data);
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
      m('h1.title', 'Manage Tools'),
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
      ])
    ]);
  }
}


module.exports = ToolsPage;