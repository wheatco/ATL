'use strict';

const previewQuote = require('./previewQuote');

const addQuote = require('./addQuote');

const handler = require('feathers-errors/handler');
const notFound = require('./not-found-handler');
const logger = require('./logger');

module.exports = function() {
  // Add your custom middleware here. Remember, that
  // just like Express the order matters, so error
  // handling middleware should go last.
  const app = this;

  app.get('/preview/:quoteId', previewQuote(app));
  app.post('/addQuote', addQuote(app));

  app.use(notFound());
  app.use(logger(app));
  app.use(handler());
};
