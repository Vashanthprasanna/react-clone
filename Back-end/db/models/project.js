const mongoose = require('mongoose');
const schema = mongoose.Schema;

const projectSchema = new schema({
  title: { type: String,},
  name: { type: String, },
  description: { type: String },
  img: { type: String } 
})

const Project = mongoose.model('project',projectSchema);

module.exports = Project;