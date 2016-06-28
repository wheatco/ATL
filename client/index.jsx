require('./js/calc.js');
require('./js/select2.js');
require('./quote-form.js');

// Move static files to the right place
require('file?name=[name].[ext]!./index.html');
require('file?name=[name].[ext]!./signup.html');
require('file?name=[name].[ext]!./login.html');
require('file?name=[name].[ext]!./normalize.css');
require('file?name=[name].[ext]!./flexblocks.css');
require('file?name=[name].[ext]!./site.css');
// require('!style!css!sass!./styles/main.scss');

var m = require('mithril');
var io = require('socket.io-client');
var feathers = require('feathers-client');
var fm = require('./js/feathers-mithril.js');
var _ = require('lodash');

const socket = io();
// Initialize our Feathers client application through Socket.io
// with hooks and authentication.
window.app = feathers()
    .configure(feathers.socketio(socket))
    .configure(feathers.hooks())
    .configure(fm())
    // Use localStorage to store our login token
    .configure(feathers.authentication({
      storage: window.localStorage
    }));

var main = {
    view: function(ctrl) {
        return m("html", [
            m("head", [
                m("link", {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro|Source+Code+Pro:700'
                }),
                m("link", {
                    rel: 'stylesheet',
                    href: 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css'
                }),
                m("link", {
                    rel: 'stylesheet',
                    href: 'normalize.css'
                }),
                m("link", {
                    rel: 'stylesheet',
                    href: 'flexblocks.css'
                }),
                m("link", {
                    rel: 'stylesheet',
                    href: 'site.css'
                }),
                m("meta", {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1'
                })
            ]),
            m("body", {
                config: function(el) {
                    window.setInterval(function() {
                        parent.postMessage((el.offsetHeight || el.clientHeight), '*');
                    }, 500);
                }
            }, [
                m.component(QuoteForm, {
                    test: "test"
                })
            ])
        ]);
    }
}

//initialize the application
m.mount(document, main);

module.exports = app;
