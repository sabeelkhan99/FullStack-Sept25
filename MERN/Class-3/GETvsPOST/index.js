const express = require('express');
const path = require('node:path');

const app = express();

// console.log(path.join(__dirname));
// console.log(path.join(__dirname, 'index.html'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    res.sendFile(filePath);
});

app.get('/user', (req, res) => {
    console.log(req.query);
    res.send('GET User route');
});

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('POST User Route');
})

app.listen(8080, () => {
    console.log('server started at port 8080');
});