'use strict';

const wkhtmltopdf = require('wkhtmltopdf');

module.exports = function(app) {
  return function(req, res, next) {
    if (req.query.view == 'pdf') {
      wkhtmltopdf(res.data, { pageSize: 'letter' , 	marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 0})
        .pipe(res);
    } else next();
  };
};
