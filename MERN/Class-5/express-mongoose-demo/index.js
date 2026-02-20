const mongoose = require('mongoose');
const Movie = require('./models/Movie');
const express = require('express');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/movies-db')
    .then(() => console.log('connection open'))
    .catch((err) => console.log(err));


const spiderman = new Movie({ title: 'Spiderman', year: 2010, isWatched: false, rating: 8.2 });
const ironman = new Movie({ title: 'Ironman', year: 2015, isWatched: true, rating: 9 });

// spiderman.save()
// .then((m)=> console.log(m))

// ironman.save()
//     .then((m) => console.log(m))

app.get('/movies', async(req, res) => {
    const movies = await Movie.find({});
    res.json(movies);
});

app.post('/movies', async(req, res) => {
    const { title, year, rating } = req.body;
    const newMovie = new Movie({ title, year, rating, isWatched: false });
    await newMovie.save();
    res.json({ message: "Movie created successfully" });
})

app.listen(8080, () => {
    console.log('Server started at port 8080');
})




