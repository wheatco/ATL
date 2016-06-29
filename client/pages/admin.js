// Mithril component for tool management and maybe other things

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
        m('p', 'Nothing here yet...')
    ]);
}

window.AdminPage = AdminPage;