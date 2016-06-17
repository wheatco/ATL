var React = require('react');
var ReactDOM = require('react-dom');

// Move static files to the right place
require('file?name=[name].[ext]!./index.html');
// require('file?name=[name].[ext]!./signup.html');
// require('file?name=[name].[ext]!./login.html');
require('!style!css!sass!./styles/main.scss');

var io = require('socket.io-client');
var feathers = require('feathers-client');

const socket = io();
// Initialize our Feathers client application through Socket.io
// with hooks and authentication.
window.app = feathers()
    .configure(feathers.socketio(socket))
    .configure(feathers.hooks())
    // Use localStorage to store our login token
    .configure(feathers.authentication({
      storage: window.localStorage
    }));

var App = require('./components/App.jsx');
const container = document.getElementById('container');
ReactDOM.render(<App />, container);
// app.authenticate().then(function() {


// }).catch(function(err) {
//     if (err) console.log(err);
//     if (window.location.hostname == "boltiq.com") window.location = window.location.href + "login.html";
// });


module.exports = app;
