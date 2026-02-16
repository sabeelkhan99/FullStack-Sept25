const express = require('express');
const moviesRoutes = require('./routes/movies');
const app = express();

app.use(express.json());

// We are mounting all the movies routes in express app.
app.use(moviesRoutes);

app.listen(8080, () => {
    console.log('server started at 8080');
});