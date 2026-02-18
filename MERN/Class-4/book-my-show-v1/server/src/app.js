const express = require('express');
const healthcheckRoutes = require('./routes/health');

const app = express();

app.use(healthcheckRoutes);


// Global Exception handler
app.use((err, req, res, next) => {
    const { status = 500, message = 'Internal server error' } = err;
    res.status(status).json({
        success: false,
        message: message
    })
})

module.exports = app;