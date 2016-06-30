'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    // Perform actions
    app.service('quotes').create(req.body).then(quote => {
      res.send(quote);
    }).catch(err => res.send(500));
  };
};
