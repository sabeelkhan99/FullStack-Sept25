const Movie = require('../models/Movie');
const ApiResponse = require('../core/ApiResponse');

const getAllMovies = async (req, res) => {
    // This will fetch all the movies from the db
    const movies = await Movie.find({});
    res.json(ApiResponse.build(true, movies, 'All Movies'));
}

module.exports = {
    getAllMovies
}