'use strict';

const path = require('path');
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

module.exports = function() {
  const app = this;

  var service = {
    get: function(id, params) {
      if (params.query.format == 'pdf') {
          console.log("nice!")
      }
      return Promise.resolve({
          wow: id
      });
    }
  }

  app.use('/forms', service);
}