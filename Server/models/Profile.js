const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  phone: { type: String },
  location: { type: String, required: true },
  // Entrepreneur-specific attributes
  businessType: { type: String }, // Agriculture, Handicrafts, Retail, etc.
  businessStage: { 
    type: String, 
    enum: ['Idea', 'Startup', 'Growth', 'Not Applicable'], 
    default: 'Idea' 
  },
  // Mentor-specific attributes
  expertiseArea: [{ type: String }],
  experienceYears: { type: Number, default: 0 },
  availability: { type: String, default: '5 hours/week' },
  bio: { type: String }
});

module.exports = mongoose.model('Profile', ProfileSchema);