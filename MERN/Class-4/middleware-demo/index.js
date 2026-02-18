const express = require('express');

const app = express();

const verify = (req, res, next) => {
    const { key } = req.query;
    if (key !== 'apple') {
        return res.send('Invalid API Key');
    }
    return next();
}

app.use((req, res, next) => {
    console.log('Inside my first middleware');
    return next();
    console.log('Inside my first middleware after calling next');
});

app.use((req, res, next) => {
    console.log('Inside my second middleware');
    next();
    console.log('Inside my second middleware after calling next')
});

app.get('/hello', (req, res) => {
    console.log('inside hello route');
    res.send('Hello from server');
});

app.get('/secret', verify, (req, res) => {
    res.send('I wear headphones in public so that i dont have to talk to anyone!');
});

app.listen(3000, () => {
    console.log('server started at 3000');
});