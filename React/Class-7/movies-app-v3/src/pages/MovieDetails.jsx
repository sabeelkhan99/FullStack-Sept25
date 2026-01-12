import React, { Fragment, useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import WatchListContext from '../store/watchlist-context';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const MovieDetails = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const { addToWatchList } = useContext(WatchListContext);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`
            }
        })
            .then((response) => {
                setMovie(() => response.data);
            })
    }, []);

    const addToWatchListHandler = () => {
        addToWatchList(movie);
    }

    return (
        <Fragment>
            {!movie && <p>Loading movie details</p>}
            {movie &&<div>
                <section className='flex p-5 justify-center items-center h-[60vh] bg-no-repeat bg-center bg-cover bg-blend-lighten' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})` }}>
                    
                    <img className='h-[90%]' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                    <section className='p-5 text-white max-w-lg'>
                        <h2 className='text-5xl mb-3 text-white font-bold'>{movie.original_title}</h2>
                        {movie.genres.map((genre) => {
                            return <span key={genre.id}>{ genre.name },</span>
                        })}
                        <span>{movie.runtime} mins</span>
                        <h3 className='text-xl font-bold mb-3'>Overview</h3>
                        <p>{movie.overview}</p>
                        <button className='my-10 border-2 text-white py-0.5 p-3 rounded-lg hover:cursor-pointer' onClick={addToWatchListHandler}>Add to Watch List</button>
                    </section>
                </section>
            </div>}
        </Fragment>
    )
}

export default MovieDetails
