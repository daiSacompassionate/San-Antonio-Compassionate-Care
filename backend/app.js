// backend/app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const inquiryRoutes = require('./routes/inquiryRoutes');
const authRoutes = require('./routes/auth');
const tourRoutes = require("./routes/tourRoutes");
const repliedRoutes = require('./routes/repliedRoutes');

const app = express();

// Middlewares
app.use(cors()); // allow from frontend
app.use(express.json()); // parse JSON bodies
app.use(morgan('dev'));

// API routes
app.use('/api/admin', authRoutes);           // login, register
app.use('/api/inquiries', inquiryRoutes);
app.use("/api/tours", tourRoutes);
app.use('/api/replied', repliedRoutes);

app.get('/', (req, res) => res.send('Admin backend running'));

// Health check
app.get('/', (req, res) => {
    res.send({ status: 'ok', message: 'Backend running' });
});

// Error handler (basic)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong' });
});

module.exports = app;
