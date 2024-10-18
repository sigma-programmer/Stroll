// models/Question.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  region: { type: String, required: true },
  questionSet: [{ type: String, required: true }],
});

module.exports = mongoose.model('Question', questionSchema);
