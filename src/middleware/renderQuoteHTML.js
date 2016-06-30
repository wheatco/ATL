'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    //this is relative to the ATL/views/ directory
    app.render('pdfs/test-form.pug', res.data, function(err, html) {
      res.data = html;
      if (!req.query.view || req.query.view == 'html') {
        res.send(res.data);
      } else next();
    });
  };
};