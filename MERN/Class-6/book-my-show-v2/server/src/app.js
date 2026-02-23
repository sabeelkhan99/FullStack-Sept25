const express = require('express');
const healthcheckRoutes = require('./routes/health');
const moviesRoutes = require('./routes/movies');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST','PATCH', 'DELETE']
}));

app.use(healthcheckRoutes);
app.use("/api/v1/movies", moviesRoutes);

// Global Exception handler
app.use((err, req, res, next) => {
    const { status = 500, message = 'Internal server error' } = err;
    res.status(status).json({
        success: false,
        message: message
    })
})

module.exports = app;