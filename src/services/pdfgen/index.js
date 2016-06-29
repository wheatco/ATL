'use strict';

var fs = require('fs');
var wkhtmltopdf = require('wkhtmltopdf');

module.exports = function() {
  const app = this;
  app.set('view engine', 'pug');

  var service = {
    get: function(id, params) {
      if (params.query.format == 'pdf') {
        console.log("nice!")
      }
      return Promise.resolve({
        id: id
      });
    }
  }

  var renderTemplate = function(req, res, next) {
    res.data = '<html><body><h1>Form Number '+res.data.id+'</h1></body></html>';
    console.log(res.data);
    next();

    // had trouble getting pug to work on my machine,
    // but it may work for you:
    // app.render('./test-form.pug', res.data, function(err, html) {
    //   res.data = html;
    //   next();
    // });
  }

  var renderPDF = function (req, res, next) {
    wkhtmltopdf(res.data, { pageSize: 'letter' })
      .pipe(res);
  };

  app.use('/forms', service, renderTemplate, renderPDF)
}