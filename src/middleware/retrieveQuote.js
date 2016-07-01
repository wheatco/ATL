'use strict';

module.exports = function(app) {
  return function(req, res, next) {

    var quoteNo = req.query.q;
    if (!quoteNo) {
      //need to throw a better error
      res.status(400).end();
      return;
    }

    console.log(req.query);
    app.service('/quotes')
      .find({
        query: {
          _id: req.query.q
        }
      })
      .then(function(result) {
        console.log(result);
        res.data = result.data[0];
        console.log(res.data.id);
        // console.log(res.data);
        next();
      });
  };
};
