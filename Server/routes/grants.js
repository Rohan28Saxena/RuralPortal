const express = require('express');
const router = express.Router();
const Grant = require('../models/Grant');

// Get all active grants
router.get('/', async (req, res) => {
  try {
    const grants = await Grant.find();
    res.json(grants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;