const express = require('express');
const { SuccessResponse } = require('./utils/ApiResponse');

const app = express();

const movies = [
    {
        id: 1,
        name: 'Ironman',
        year: 2010
    },
    {
        id: 2,
        name: 'Ironman',
        year: 2010
    },
    {
        id: 3,
        name: 'Ironman',
        year: 2010
    }
]

// console.log(app);

// app.use get executed for any request that u make.
// app.use((req, res) => {
//     // console.log('You made a request');
//     // console.log(req);
//     // res.send("Hello from the server");
//     res.send('<h1>Hello from Express</h1>');
// })

// Route => GET /cat 
app.get('/cat', (req, res) => {
    res.send('Meeoooowww');
});

// Route => GET /dog
app.get('/dog', (req, res) => {
    res.send('Woof Woof');
});

// Route => GET /products
app.get('/products', (req, res) => {
    res.send('GET Products');
});

// Route => POST /products
app.post('/products', (req, res) => {
    res.send('POST Products');
});

// app.get('/r/dog', (req, res) => {
//     res.send('DOG Subredit');
// });

// app.get('/r/cats', (req, res) => {
//     res.send('CATS Subredit');
// });

// app.get('/r/apples', (req, res) => {
//     res.send('APPLES Subredit');
// });

app.get('/r/:subredit', (req, res) => {
    // console.log(req.params);
    const { subredit } = req.params;
    res.send(`${subredit} Subrediit`);
});

app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`You are searching for ${q}`);
});

app.get('/movies', (req, res) => {
    res.json(SuccessResponse.build(true, 'All movies', movies));
});

app.get('/movies/:id', (req, res) => {
    const { id } = req.params;
    const movie = movies.find((m) => m.id === parseInt(id));
    res.json(SuccessResponse.build(true, 'Single Movies', movie));
})

app.listen(3000, () => {
    console.log('Server started at port 3000');
});