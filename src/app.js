'use strict';
//IMPORTANT
//phantomjs has hidden dependency:
// sudo apt-get install libfontconfig

const path = require('path');
const serveStatic = require('feathers').static;
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');
const socketio = require('feathers-socketio');
const middleware = require('./middleware');
const services = require('./services');

const childProcess = require('child_process');
const phantomjs = require('phantomjs-prebuilt');
const pjsBinPath = phantomjs.path;

var pjsChildArgs = [
  path.join(__dirname, 'phantomjs-script.js'),
  'some other argument'
]

childProcess.execFile(pjsBinPath, pjsChildArgs, function(err, stdout, sterr) {
  console.log(err);
  console.log(stdout);
  console.log(sterr)
});

const app = feathers();

app.configure(configuration(path.join(__dirname, '..')));

app.use(compress())
  .options('*', cors())
  .use(cors())
  .use(favicon( path.join(app.get('public'), 'favicon.ico') ))
  .use('/', serveStatic( app.get('public') ))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .configure(hooks())
  .configure(rest())
  .configure(socketio())
  .configure(services)
  .configure(middleware)
  .use('/forms', {
    //check it with localhost:3030/forms/123?format=pdf

    get: function(id, params) {
      if (params.query.format == 'pdf') {
        console.log("nice!")
      }
      return Promise.resolve({
        wow: id
      });
    }
  })

module.exports = app;