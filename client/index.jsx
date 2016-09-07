// Move static files to the right place
require('file?name=[name].[ext]!./index.html');
require('file?name=[name].[ext]!./styles/normalize.css');
require('file?name=[name].[ext]!./styles/flexblocks.css');
require('file?name=[name].[ext]!./styles/site.css');
require('file?name=[name].[ext]!./favicon.ico');

var m = require('mithril');
var socket = require('socket.io-client')();
var feathers = require('feathers-client');
var fm = require('feathers-mithril');

require('./lib/calc.js');
require('./lib/select2.js');
require('./pages/quote.js');
require('./pages/admin.js');
require('./pages/tools.js');

// Initialize our Feathers client application through Socket.io
// with hooks and authentication.
window.app = feathers()
    .configure(feathers.socketio(socket))
    .configure(feathers.hooks())
    .configure(fm(m))
    .configure(feathers.authentication({
      storage: window.localStorage
    }));

const pageEnum = {
    QUOTE: 0,
    ADMIN: 1,
    TOOLS: 2,
};

var Main = {};

Main.vm = {};

Main.controller = function() {
    var vm = Main.vm;
    vm.page = m.prop(pageEnum.QUOTE);
};

Main.view = function(ctrl) {
    var vm = Main.vm;
    return m('html', [
        m('head', [
            m('link', {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro|Source+Code+Pro:700'
            }),
            m('link', {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css'
            }),
            m('link', {
                rel: 'stylesheet',
                href: 'normalize.css'
            }),
            m('link', {
                rel: 'stylesheet',
                href: 'flexblocks.css'
            }),
            m('link', {
                rel: 'stylesheet',
                href: 'site.css'
            }),
            m('meta', {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            })
        ]),
        m('body', {
            config: function(el) {
                window.setInterval(function() {
                    parent.postMessage((el.offsetHeight || el.clientHeight), '*');
                }, 500);
            }
        }, [
            m('.nav', [
              m('button', {
                  class: vm.page() == pageEnum.QUOTE ? "active": '',
                  onclick: function (e) {
                      vm.page(pageEnum.QUOTE);
                  }
              }, 'New Quote'),
              m('button', {
                  class: vm.page() == pageEnum.ADMIN ? "active" : '',
                  onclick: function (e) {
                      vm.page(pageEnum.ADMIN);
                  }
              }, 'Quote History'),
              m('button', {
                  class: vm.page() == pageEnum.TOOLS ? "active": '',
                  onclick: function (e) {
                      vm.page(pageEnum.TOOLS);
                  }
              }, 'Tool Library')
            ]),
            renderPage(vm.page())
        ])
    ]);
};

function renderPage (page) {
    switch (page) {
        case pageEnum.QUOTE:
            return m.component(QuoteForm);
        case pageEnum.ADMIN:
            return m.component(AdminPage);
        case pageEnum.TOOLS:
            return m.component(ToolsPage);
        default:
            return null;
    }
}

//initialize the application
m.mount(document, Main);

module.exports = app;
