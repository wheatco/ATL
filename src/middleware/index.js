'use strict';

const previewQuote = require('./previewQuote');

const addQuote = require('./addQuote');


const handler = require('feathers-errors/handler');
const notFound = require('./not-found-handler');
const logger = require('./logger');

const renderPDF = require('./renderPDF');
const renderQuoteHTML = require('./renderQuoteHTML');
const retrieveQuote = require('./retrieveQuote');

module.exports = function() {
  // Add your custom middleware here. Remember, that
  // just like Express the order matters, so error
  // handling middleware should go last.
  const app = this;

  app.get('/preview/:quoteId', previewQuote(app));

  app.get('/viewQuote',
    //set default view
    function(req, res, next) { req.query.view = req.query.view || 'html'; next() },
    retrieveQuote(app),
    renderQuoteHTML(app),
    renderPDF(app));

  // is addQuote supposed to be a layer over /quotes? It doesn't work rn.
  // --joe
  app.post('/addQuote', addQuote(app));

  app.use(notFound());
  app.use(logger(app));
  app.use(handler());
};
