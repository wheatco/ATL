// Mithril component for tool management and maybe other things

var AdminPage = {};

//for simplicity, we use this component to namespace the model classes

AdminPage.vm = {};

AdminPage.vm.init = function() {
    var vm = AdminPage.vm;
    vm.tools = m.prop([]);
}

var initialized = false;

AdminPage.vm.config = function(attrs) {
  if (!initialized) {
    initialized = true;
    var vm = AdminPage.vm;
    var app = attrs.app;
    console.log(app);
    // vm.tools = app.service('tools').find();
  }
}

AdminPage.controller = function() {
    AdminPage.vm.init();
}

//here's the view
AdminPage.view = function(ctrl, attrs) {
    var vm = AdminPage.vm;
    vm.config(attrs);

    console.log(vm.tools());

    return m("div", [
        m('h1.title', 'Admin Page'),
        m('p', 'Nothing here yet...')
    ]);
}

window.AdminPage = AdminPage;