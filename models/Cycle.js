// models/Cycle.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cycleSchema = new Schema({
  region: { type: String, required: true },
  currentCycle: { type: Number, default: 1 },
  cycleDuration: { type: Number, default: 7 }, // Days, configurable
  nextCycleStart: { type: Date, required: true }, // Next cycle start time
});

module.exports = mongoose.model('Cycle', cycleSchema);
