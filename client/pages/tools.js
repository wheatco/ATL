// Mithril component for tool mgmt

var m = require('mithril');

/********
CHECKLIST
********/

var ToolTable = {
  vm: {},
  controller: function(args) {
    var vm = ToolTable.vm;
    vm.items = args.items;
  },
  view: function(ctrl, args) {
    var vm = ToolTable.vm;
    if (vm.items().length == 0) return  m('p', 'No items yet.');
    var header = m('tr', [
        m('th', 'Shape'),
        m('th', 'Size'),
        m('th', 'Across'),
        m('th', 'Space Across'),
        m('th', 'Around'),
        m('th', 'Space Around'),
        m('th', 'Corner Radius'),
        m('th', 'Slot #'),
        m('th', 'Description'),
        m('th.delete', 'Delete')
      ])
    var rows = vm.items().map(function(item) { 
      return m('tr', [
        m('td', item.shape),
        m('td', item.size),
        m('td', item.acrossWeb),
        m('td', item.spaceAcross),
        m('td', item.aroundWeb),
        m('td', item.spaceAround),
        m('td', item.cornerSize),
        m('td', item.slot),
        m('td', item.description),
        m('td', [
          m('button.previewButton', {
            onclick: function(e) {
              if (confirm('Delete this tool?')) args.onDelete(item)
            }
          }, 'delete')
        ]),
      ])
    })
    return m('table.calc-item', [header, rows])
  }
};

/**********
TOOL ENTRY
**********/

var ToolEntry = {
  vm: {},
  init: function() {
    var vm = ToolEntry.vm;
    vm.size = m.prop('');
    vm.shape = m.prop('Rectangle');
    vm.acrossWeb = m.prop(0);
    vm.spaceAcross = m.prop(0);
    vm.aroundWeb = m.prop(0);
    vm.spaceAround = m.prop(0);
    vm.cornerSize = m.prop('1/3');
    vm.slot = m.prop(0);
    vm.description = m.prop('');
  },
  controller: function(args) {
    var vm = ToolEntry.vm;
    vm.cornerSizes = m.prop([
      '1/3',
      '1/4',
      '1/8',
      '1/16',
      '1/25',
      '1/32',
      '1/64',
      'None'
    ]);
    ToolEntry.init();
  },
  view: function(ctrl, args) {
    var vm = ToolEntry.vm;
    return m('.calc-item.tool-entry.col.justify', [
      m('.row.gap-4.justify', [
        // Size and measurements
        m('.calc-item.col.gap-1.justify.fill-1', [
          m('label', 'size'),
          m('input.input-text.good border', {
            type: 'text',
            placeholder: 'New tool',
            onchange: m.withAttr('value', vm.size),
            value: vm.size()
          }),
          m('label', 'across the web (in)'),
          m('input.input-text.good border', {
            type: 'number',
            min: 0,
            onchange: m.withAttr('value', vm.acrossWeb),
            value: vm.acrossWeb()
          }),
          m('label', 'space across (in)'),
          m('input.input-text.good border', {
            type: 'number',
            min: 0,
            onchange: m.withAttr('value', vm.spaceAcross),
            value: vm.spaceAcross()
          }),
          m('label', 'around the web (in)'),
          m('input.input-text.good border', {
            type: 'number',
            min: 0,
            onchange: m.withAttr('value', vm.aroundWeb),
            value: vm.aroundWeb()
          }),
          m('label', 'space around (in)'),
          m('input.input-text.good border', {
            type: 'number',
            min: 0,
            onchange: m.withAttr('value', vm.spaceAround),
            value: vm.spaceAround()
          }),
        ]),
        // Corner shape and size
        m('.calc-item.col.gap-3.justify.fill-1', [
          m('.label-header', 'Shape'),
          calc.radios(vm.shape, [{
            val: 'Rectangle',
            label: 'Rectangle',
          }, {
            val: 'Circle',
            label: 'Circle',
          }, {
            val: 'Special',
            label: 'Special',
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
          m('.label-header', 'Slot #'),
          m('input.input-text.good border', {
            type: 'number',
            min: 0,
            onchange: m.withAttr('value', vm.slot),
            value: vm.slot()
          }),
          m('.label-header', 'Description'),
          m('textarea.input-text.good border', {
            onchange: m.withAttr('value', vm.description),
            value: vm.description()
          }),
        ]),

      ]),
      // Add button
      m('button.addButton', {
        onclick: function() {
          var tool = {
            size: vm.size(),
            shape: vm.shape(),
            acrossWeb: vm.acrossWeb(),
            spaceAcross: vm.spaceAcross(),
            aroundWeb: vm.aroundWeb(),
            spaceAround: vm.spaceAround(),
            cornerSize: vm.cornerSize(),
            slot: vm.slot(),
            description: vm.description()
          };

          tool.size = tool.size.length ? tool.size : "No size"

          if (args.onclick) {
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
    var vm = ToolsPage.vm;
    const app = window.app;

    vm.tools = m.prop([]);
    app.service('tools').find().then(tools => {
      vm.tools(tools.data);
      m.redraw();
    });

    // Helpers
    this.addTool = function(tool) {
      var vm = ToolsPage.vm;
      app.service('tools').create(tool).then(tool => {
        // TODO: make this update automatic
        app.service('tools').find().then(tools => {
          vm.tools(tools.data);
        });
      });
    }
    this.deleteTool = function(tool) {
      var vm = ToolsPage.vm;
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
    var vm = ToolsPage.vm;
    return m('div', [
      m('h1.title', 'Manage Tools'),
      m('.calc.column.admin-page', [
        m('h2', 'Tools'),
        m('div', [
          m.component(ToolTable, {
            items: vm.tools,
            onDelete: function(item) {
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