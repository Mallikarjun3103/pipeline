const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json()); // To parse JSON bodies
app.use('/api/users', userRoutes);

module.exports = app;
