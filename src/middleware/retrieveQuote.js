'use strict';

module.exports = function(app) {
  return function(req, res, next) {

    var quoteID = req.query.q || req.body.q;
    if (!quoteID) {
      //need to throw a better error
      res.status(400).send("Must include 'q' quote ID query.");
      return;
    }

    app.service('/quotes')
      .find({
        query: {
          _id: quoteID
        }
      })
      .then(function(result) {
        if (result.total == 0) {
          res.status(404).send("Quote not found by those conditions.");
        } else {
          res.data = result.data[0];
          next();
        }
      });
  };
};
