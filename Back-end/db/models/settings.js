const mongoose = require('mongoose');
const schema = mongoose.Schema;

const settingsSchema = new schema({
  sideBarSections: { type: [String] },
  name: { type: String },
  role: { type: String },
  gender: { type: [String] },
  months: { type: [String] },
  days: { type: [Number] },
  years: { type: [Number] },
  languages: { type: [String] }
});

const Settings = mongoose.model('setting', settingsSchema);

module.exports = Settings;