'use strict';

const quote = require('./quote');

const tools = require('./tools');

const authentication = require('./authentication');
const user = require('./user');
const pdfgen = require('./pdfgen');
const mongoose = require('mongoose');
module.exports = function() {
  const app = this;

  mongoose.connect(app.get('mongodb'));
  mongoose.Promise = global.Promise;

  app.configure(authentication);
  app.configure(user);
  app.configure(pdfgen);
  app.configure(tools);
  app.configure(quote);
};
