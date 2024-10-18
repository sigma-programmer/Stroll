// app.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const questionRoutes = require('./routes/questionRoutes');

dotenv.config();
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api', questionRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
