'use strict';

const service = require('feathers-mongoose');
const quote = require('./quote-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: quote,
    paginate: {
      default: 1000,
      max: 1000
    },
    sort: { name: 1, createdAt: 1}
  };

  // Initialize our service with any options it requires
  app.use('/quotes', service(options));

  // Get our initialize service to that we can bind hooks
  const quoteService = app.service('/quotes');

  // Set up our before hooks
  quoteService.before(hooks.before);

  // Set up our after hooks
  quoteService.after(hooks.after);
};
