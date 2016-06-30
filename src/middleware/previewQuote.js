'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    // Make quote page and send it out.
    res.send("This will be a preview of quote with id: " + req.params.quoteId);
    // next();
  };
};
