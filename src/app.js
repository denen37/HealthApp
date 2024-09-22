const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// Set the view engine (optional)
app.set('view engine', 'pug');

// Import route modules
const userRoutes = require('./routes/userRoutes');

// Use routes
app.use('/users', userRoutes);

// Error handling for undefined routes
app.use((req, res, next) => {
    res.status(404).send('Route not found');
});

module.exports = app;
