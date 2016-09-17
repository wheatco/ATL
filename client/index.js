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

// Initialize our Feathers client application through Socket.io
// with hooks and authentication.
window.app = feathers()
    .configure(feathers.socketio(socket))
    .configure(feathers.hooks())
    .configure(fm(m))
    .configure(feathers.authentication({
      storage: window.localStorage
    }));

var Nav = { view: function() {
    return m(".nav", [
        mBtn("New Quote", "/quote"),
        mBtn("Quote History", "/admin"),
        mBtn("Tools", "/tools")
    ]);
    function mBtn(name, route){
        var isCurrent = (m.route() === route);
        var handleClick = function(){ m.route (route) };
        return m("button"+(isCurrent ? ".active": ""), {onclick: handleClick}, name);
    }

}};

var Page = function (content){
    //laminate each page with nav
    this.view = function(){
        return [ Nav.view(), m(".app-page", content) ];
    }
}

var QuotePage = new Page(require('./pages/quote.js'));
var AdminPage = new Page(require('./pages/admin.js'));
var ToolsPage = new Page(require('./pages/tools.js'));
var QuoteReviewPage = new Page(require('./pages/quote-review.js'))

//setup routes to start w/ the `#` symbol
m.route.mode = "hash";

//define a route
m.route(document.body, "/quote", {
  "/quote": QuotePage,
  "/quote/:quoteID": QuotePage,
  "/review/:quoteID": QuoteReviewPage,
  "/admin": AdminPage,
  "/tools": ToolsPage
});

module.exports = app;
