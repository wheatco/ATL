// Mithril component for tool management and maybe other things

var Checklist = {
  vm: {},
  controller: function (args) {
    var vm = Checklist.vm;
    if (args.items) vm.items = args.items().data;
  },
  view: function (ctrl, args) {
    var vm = Checklist.vm;
    return m('.calc-item', vm.items.map(function(item) {
        return m('label.checkbox', {
            // class: valProp() == item.val ? 'active' : ''
        }, [
            m('button', {
                // type: 'radio',
                // checked: valProp() == item.val,
                // value: item.val,
                // onclick: runCallbacks(customOnClick)
            }, 'x'),
            m('div.checkbox-label', [
                m('strong', item.name || ''),
                // m('span.hint', item.hint || ''),
            ])
        ]);
    }));
    // return m("p", vm.data[0]);
  }
}

var AdminPage = {};

//for simplicity, we use this component to namespace the model classes
AdminPage.vm = {};

AdminPage.controller = function(args) {
    var vm = AdminPage.vm;
    const app = window.app;

    vm.tools = app.service('tools').find();
}

//here's the view
AdminPage.view = function(ctrl, args) {
    var vm = AdminPage.vm;

    return m("div", [
        m('h1.title', 'Admin Page'),
        m('.calc.row.center.gap-5', [
          m('div.fill', [
            m.component(Checklist, {items: vm.tools})
            ])
        ])
    ]);
}

window.AdminPage = AdminPage;