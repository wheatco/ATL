'use strict';

const service = require('feathers-mongoose');
const quotes = require('./quotes-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: quotes,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/quotes', service(options));

  // Get our initialize service to that we can bind hooks
  const quotesService = app.service('/quotes');

  // Set up our before hooks
  quotesService.before(hooks.before);

  // Set up our after hooks
  quotesService.after(hooks.after);
};
