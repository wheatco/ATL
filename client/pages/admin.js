// Mithril component for tool management and maybe other things

var Checklist = {
  vm: {},
  controller: function (args) {
    var vm = Checklist.vm;
    vm.items = args.items;
  },
  view: function (ctrl, args) {
    var vm = Checklist.vm;
    return m('.calc-item', vm.items().map(function(item) {
        return m('label.checkbox', {

        }, [
            m('button', {
                onclick: function (e) {
                    return args.onclick(item);
                }
            }, 'x'),
            m('div.checkbox-label', [
                m('strong', item.name || '')
            ])
        ]);
    }));
  }
}

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
}

function deleteTool(tool) {
    var vm = AdminPage.vm;
    app.service('tools').remove({_id: tool._id}).then(removed => {
        app.service('tools').find().then(tools => {
            vm.tools(tools.data);
        });
    });
}

//here's the view
AdminPage.view = function(ctrl, args) {
    var vm = AdminPage.vm;

    return m("div", [
        m('h1.title', 'Admin Page'),
        m('.calc.row.center.gap-5', [
            m('div.fill', [
                m.component(Checklist, {
                    items: vm.tools,
                    onclick: function (item) {
                        deleteTool(item);
                    }
                })
            ])
        ])
    ]);
}

window.AdminPage = AdminPage;