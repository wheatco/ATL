'use strict';

const service = require('feathers-mongoose');
const tools = require('./tools-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: tools,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/tools', service(options));

  // Get our initialize service to that we can bind hooks
  const toolsService = app.service('/tools');

  // Set up our before hooks
  toolsService.before(hooks.before);

  // Set up our after hooks
  toolsService.after(hooks.after);
};
