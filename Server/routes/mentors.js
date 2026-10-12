const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Profile = require('../models/Profile');
const MentorshipRequest = require('../models/MentorshipRequest');

// Get all mentors
router.get('/', async (req, res) => {
  try {
    const mentors = await Profile.find({ expertiseArea: { $exists: true, $not: { $size: 0 } } })
      .populate('user', 'name email');
    res.json(mentors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Request mentorship
router.post('/request', auth, async (req, res) => {
  try {
    const { mentorId, message } = req.body;
    const request = new MentorshipRequest({
      entrepreneur: req.user.id,
      mentor: mentorId,
      message
    });
    await request.save();
    res.status(201).json({ message: 'Mentorship request submitted successfully', request });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;