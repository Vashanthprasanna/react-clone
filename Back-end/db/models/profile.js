const mongoose = require('mongoose');
const schema = mongoose.Schema;

const profileSchema = new schema({
  name: { type: String },
  role: { type: String },
  description: { type: String },
  fullName: { type: String },
  mobile: { type: String },
  email: { type: String },
  location: { type: String },
  conversations: [
    {
      id:          { type: Number,},
      name:        { type: String, },
      description: { type: String },
      img:         { type: String }
    }
  ]
})

const Profile = mongoose.model('profile',profileSchema);

module.exports = Profile;