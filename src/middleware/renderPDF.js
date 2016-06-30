'use strict';

const wkhtmltopdf = require('wkhtmltopdf');

module.exports = function(app) {
  return function(req, res, next) {
    if (req.query.view == 'pdf') {
      wkhtmltopdf(res.data, { pageSize: 'letter' })
        .pipe(res);
    } else next();
  };
};