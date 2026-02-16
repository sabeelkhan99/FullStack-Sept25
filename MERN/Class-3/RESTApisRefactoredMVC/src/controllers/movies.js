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

const getAllMovies = (req, res) => {
    res.status(200).json({
        success: true,
        data: movies,
        message: 'All movies'
    });
}

const createMovie = (req, res) => {
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
}

const getAMovie = (req, res) => {
    const { id } = req.params;

    const movie = movies.find((m) => m.id === parseInt(id));

    res.status(200).json({
        success: true,
        data: movie,
        message: `Single movie`
    })
}

const updateAMovie = (req, res) => {
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
}

const deleteMovie = (req, res) => {
    res.send('Delete movie endpoint')
}

module.exports = {
    getAllMovies,
    createMovie,
    getAMovie,
    updateAMovie,
    deleteMovie
}