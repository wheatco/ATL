'use strict';

// quote-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);

const quoteSchema = new Schema({
  name: String,
  addressStreet: String,
  addressCity: String,
  addressState: String,
  addressZip: String,
  phone: String,
  email: String,
  description: String,

  selectedToolID: String,
  selectedToolName: String,
  shape: String,
  corner: String,
  toolAround: Number,
  toolAcross: Number,
  toolOverhead: Number,

  quantity1: Number,
  quantity2: Number,
  quantity3: Number,
  quantity4: Number,
  quantity5: Number,

  numColors: Number,
  substrate: String,
  substrateMSI: Number,
  finish: String,
  finishMSI: Number,

  numDesigns: Number,
  costPerDesign: Number,
  margin: Number,
  prepressCharges: Number,

  overallCost1: {
    total: Number,
    perLabel: Number
  },
  overallCost2: {
    total: Number,
    perLabel: Number
  },
  overallCost3: {
    total: Number,
    perLabel: Number
  },
  overallCost4: {
    total: Number,
    perLabel: Number
  },
  overallCost5: {
    total: Number,
    perLabel: Number
  },
  createdAt: {
    type: Date,
    'default': Date.now
  },
  updatedAt: {
    type: Date,
    'default': Date.now
  }
});

quoteSchema.plugin(autoIncrement.plugin, { model: 'quote', field: 'quote_id' });

const quoteModel = mongoose.model('quote', quoteSchema);

module.exports = quoteModel;
