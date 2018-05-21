'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  questionDate: {
    type: Date,
    index: true
  },
  questionText: Schema.Types.Mixed,
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Question', QuestionSchema);
