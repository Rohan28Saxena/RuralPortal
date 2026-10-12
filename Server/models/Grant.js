const mongoose = require('mongoose');

const GrantSchema = new mongoose.Schema({
  schemeName: { type: String, required: true },
  description: { type: String, required: true },
  eligibilityCriteria: [{ type: String }],
  fundingAmount: { type: String, required: true },
  applicationDeadline: { type: Date, required: true },
  sector: { type: String }, // e.g., 'Agriculture', 'Women-Led', 'All'
  applyUrl: { type: String }
});

module.exports = mongoose.model('Grant', GrantSchema);