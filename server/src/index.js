// import express
const express = require('express');
const app = express();

// import PORT from constants: index.js is referred (by default)
const { PORT } = require('./constants');

// import routes
const authRoutes = require('./routes/auth');
// initialize routes (name it *api* since it is backend)
app.use('/api', authRoutes);

// app start
const appStart = () => {
    try {
        app.listen(PORT, () => {
            console.log(`The app is running at http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};

appStart();
