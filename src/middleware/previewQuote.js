'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    // Make quote page and send it out.
    app.render('pdfs/preview-quote.pug', {
      q_id: req.query.q
    }, function(err, html) {
      res.data = html;
      if (!req.query.view || req.query.view == 'html') {
        res.send(res.data);
      } else next();
    });
    // next();
  };
};
