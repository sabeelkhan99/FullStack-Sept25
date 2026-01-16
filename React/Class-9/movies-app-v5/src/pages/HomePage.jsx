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
        <section className='min-h-screen'>
            <Banner/>
            
            {/* Loading State */}
            {isLoading && (
                <div className='flex justify-center items-center py-20'>
                    <div className='text-center'>
                        <div className='inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4'></div>
                        <p className='text-gray-600 text-lg'>Loading movies...</p>
                    </div>
                </div>
            )}
            
            {/* Movies Grid */}
            {!isLoading && (
                <>
                    <section className='flex flex-wrap justify-center mx-auto gap-6 px-4 py-8 max-w-7xl'>
                        {
                            movies.map((movie) => {
                                return <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    posterPath={movie.poster_path}
                                    title={movie.title}
                                    releaseDate={movie.release_date}
                                    voteAverage={movie.vote_average}
                                />
                            })
                        }
                    </section>
                    
                    {/* Pagination */}
                    <div className='flex justify-center items-center gap-4 py-8 mb-8'>
                        <button 
                            className={`border-2 rounded-lg py-2 px-6 font-semibold transition-all duration-200 ${
                                pageNo <= 1 
                                    ? 'border-gray-300 text-gray-400 cursor-not-allowed' 
                                    : 'border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white cursor-pointer'
                            }`}
                            onClick={prevPageClickHandler}
                            disabled={pageNo <= 1}
                        >
                            Previous
                        </button>
                        <span className='text-gray-600 font-medium px-4'>
                            Page {pageNo}
                        </span>
                        <button 
                            className='border-2 border-blue-500 text-blue-600 rounded-lg py-2 px-6 font-semibold hover:bg-blue-500 hover:text-white cursor-pointer transition-all duration-200'
                            onClick={nextPageClickHandler}
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </section>
    )
}

export default HomePage
