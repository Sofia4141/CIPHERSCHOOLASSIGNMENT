// app.js or server.js
const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

// Import the cron job
require('./cronJobs');

const app = express();

// Database connection
connectDB();

// Your other middleware and routes go here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
