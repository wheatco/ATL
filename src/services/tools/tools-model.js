'use strict';

// tools-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toolsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  acrossWeb: {
    type: Number,
    required: true
  },
  aroundWeb: {
    type: Number,
    required: true
  },
  shape: {
    type: String,
  },
  cornerSize: {
    type: String,
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

const toolsModel = mongoose.model('tools', toolsSchema);

module.exports = toolsModel;
