'use strict';

// quote-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
  name: String,
  addressStreet: String,
  addressCity: String,
  addressState: String,
  addressZip: String,
  phone: String,
  email: String,
  shape: String,
  corner: String,
  selectedTools: String,
  quantity1: Number,
  quantity2: Number,
  quantity3: Number,
  quantity4: Number,
  quantity5: Number,
  substrate: Number,
  substrateMSI: Number,
  finish: String,
  finishMSI: Number,
  numDesigns: Number,
  costPerDesign: Number,
  margin: Number,
  prepressCharges: Number,
  copyCharges: Number,
  overallCost1: Number,
  overallCost2: Number,
  overallCost3: Number,
  overallCost4: Number,
  overallCost5: Number,
  createdAt: {
    type: Date,
    'default': Date.now
  },
  updatedAt: {
    type: Date,
    'default': Date.now
  }
});

const quoteModel = mongoose.model('quote', quoteSchema);

module.exports = quoteModel;
