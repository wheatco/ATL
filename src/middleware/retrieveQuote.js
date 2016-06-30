'use strict';

module.exports = function(app) {
  return function(req, res, next) {

    var quoteNo = req.query.q;
    if (!quoteNo) {
      //need to throw a better error
      res.status(400).end();
      return
    }

    var viewType = req.query.view || 'html';

    app.service('/quotes')
      // will eventually change to a real query using
      // quoteNo but it doesn't exist on the server
      // yet.
      .find({})
      .then(function(result){
        res.data = result.data[0];
        next();
        })
  };
};