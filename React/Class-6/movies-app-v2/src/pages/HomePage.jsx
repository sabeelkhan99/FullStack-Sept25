import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import Banner from '../components/Banner';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3";

const HomePage = () => {

    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [pageNo, setPageNo] = useState(1);

    useEffect(() => {
        async function fetchPopularMovies() {
            const res = await axios.get(`${BASE_URL}/movie/popular?language=en-US&page=${pageNo}`,
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${API_KEY}`
                    }
                });
            setMovies(() => res.data.results);
            setIsLoading(false);
        }
        fetchPopularMovies();
    }, [pageNo]);

    const prevPageClickHandler = () => {
        if (pageNo <= 1) {
            return;
        }
        setPageNo(() => pageNo - 1);
    }

    const nextPageClickHandler = () => {
        setPageNo(() => pageNo + 1);
    }

    return (
        <section>
            <Banner/>
            {isLoading && <p>Loading...</p>}
            <section className='flex flex-wrap mx-auto gap-4 w-[70vw]'>
                {
                    movies.map((movie) => {
                        return <Movie
                            id={movie.id}
                            posterPath={movie.poster_path}
                            title={movie.title}
                            releaseDate={movie.release_date}
                            voteAverage={movie.vote_average}
                        />
                    })
                }

            </section>
            <div className='w-3xs mx-auto flex gap-4'>
                <button className='border border-gray-200 py-1 px-3 hover:cursor-pointer' onClick={prevPageClickHandler}>Prev</button>
                <button className='border border-gray-200 py-1 px-3 hover:cursor-pointer' onClick={nextPageClickHandler}>Next</button>
            </div>
          
        </section>
    )
}

export default HomePage
