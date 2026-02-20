const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    isWatched: Boolean,
    rating: Number
});

const Movie = mongoose.model('Movie', movieSchema); //movies

module.exports = Movie;