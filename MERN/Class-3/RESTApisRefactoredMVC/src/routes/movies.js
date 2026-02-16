const express = require('express');
const { getAllMovies, createMovie, getAMovie, updateAMovie, deleteMovie } = require('../controllers/movies');

const router = express.Router();

// GET All movies
router.get('/movies', getAllMovies);

// Create a movie
router.post('/movies', createMovie);

// GET a single movie
router.get('/movies/:id', getAMovie);

// Update a movie
router.patch('/movies/:id', updateAMovie);

// Delete a movie
router.delete('/movies/:id', deleteMovie)

module.exports = router;

// Middleware
// Exception Handling
// Logging and Debugging