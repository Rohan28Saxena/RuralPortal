const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Initialize Express App
const app = express();

// Middleware
app.use(cors()); // Allows cross-origin requests from the React frontend
app.use(express.json()); // Parses incoming JSON payloads

// Mount Routes
// Ensure these route files exist in your server/routes/ directory
app.use('/api/auth', require('./routes/auth'));
app.use('/api/mentors', require('./routes/mentors'));
app.use('/api/grants', require('./routes/grants'));

// Environment Variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Database Connection & Server Start
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB successfully connected');
    
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1); // Exit process with failure
  });