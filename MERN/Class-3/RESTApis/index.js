const express = require('express');

const app = express();

app.use(express.json());

const movies = [
    {
        id: 1,
        title: 'Spiderman',
        year: 2010,
        isWatched: true
    },
    {
        id: 2,
        title: 'Ironman',
        year: 2015,
        isWatched: true
    },
    {
        id: 3,
        title: 'Antman',
        year: 2012,
        isWatched: false
    }
];

// GET All movies
app.get('/movies', (req, res) => {
    res.status(200).json({
        success: true,
        data: movies,
        message: 'All movies'
    });
});

// Create a movie
app.post('/movies', (req, res) => {
    const { title, year } = req.body;
    const newMovie = {
        id: movies.length + 1,
        title,
        year,
        isWatched: false
    }
    movies.push(newMovie);
    
    res.status(201).json({
        success: true,
        data: null,
        message: `Movie created success fully ${newMovie.id}`
    })
});

// GET a single movie
app.get('/movies/:id', (req, res) => {
    const { id } = req.params;

    const movie = movies.find((m) => m.id === parseInt(id));

    res.status(200).json({
        success: true,
        data: movie,
        message: `Single movie`
    })
});

// Update a movie
app.patch('/movies/:id', (req, res) => {
    const { id } = req.params;
    const { title, year } = req.body;

    const movie = movies.find((m) => m.id === parseInt(id));

    movie.title = title;
    movie.year = year;

    res.status(200).json({
        success: true,
        data: movie,
        message: `Update successfully`
    })
});

// Delete a movie
app.delete('/movies/:id', (req, res) => {
    res.send('Delete movie endpoint')
})


app.listen(8080, () => {
    console.log('server started at 8080');
});