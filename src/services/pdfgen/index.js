'use strict';

var fs = require('fs');
var wkhtmltopdf = require('wkhtmltopdf');

module.exports = function() {
  const app = this;
  app.set('view engine', 'pug');

  var service = {
    get: function(id, params) {
      if (params.query.format == 'pdf') {
        console.log("go find a pdf")
      }
      return Promise.resolve({
        id: id
      });
    }
  }

  var renderTemplate = function(req, res, next) {
    //this is relative to the ATL/views/ directory
    app.render('pdfs/test-form.pug', res.data, function(err, html) {
      res.data = html;
      next();
    });
  }

  var renderPDF = function (req, res, next) {
    wkhtmltopdf(res.data, { pageSize: 'letter' })
      .pipe(res);
  };

  app.use('/forms', service, renderTemplate, renderPDF)
}