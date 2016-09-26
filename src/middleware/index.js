'use strict';

const sendQuoteEmail = require('./sendQuoteEmail');

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


  app.get('/viewQuote',
    //set default view
    function(req, res, next) {
      req.query.view = req.query.view || 'html';
      next();
    },
    retrieveQuote(app),
    renderQuoteHTML(app),
    renderPDF(app));

  app.post('/addQuote', addQuote(app));

  app.post('/sendQuoteEmail', 
    retrieveQuote(app),
    sendQuoteEmail(app));

  app.use(notFound());
  app.use(logger(app));
  app.use(handler());
};
