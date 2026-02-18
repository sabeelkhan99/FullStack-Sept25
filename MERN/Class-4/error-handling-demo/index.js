const express = require('express');

const app = express();

app.get('/greet', (req, res) => {
    if (true) {
        throw new Error('some deletebrate error');
    }
    res.send('Hello world');
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send('This is a response from error handler');
});

app.listen(3000, () => {
    console.log('server started at port 3000');
});