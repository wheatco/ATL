'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    // Perform actions
    console.log(req.body);
    res.send({
      _id: 123
    });

    // next();
  };
};
