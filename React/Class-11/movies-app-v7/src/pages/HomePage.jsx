import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import Banner from '../components/Banner';
import { useSelector, useDispatch } from 'react-redux';
import { changeToNextPage, changeToPrevPage, fetchPopularMovies } from '../features/moviesSlice';


const HomePage = () => {

    const { data, isLoading, error, pageNo } = useSelector((state) => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopularMovies(pageNo));
    }, [pageNo]);


    const prevPageClickHandler = () => {
        dispatch(changeToPrevPage());
    }

    const nextPageClickHandler = () => {
        dispatch(changeToNextPage());
    }

    return (
        <section className='min-h-screen'>
            <Banner />
            {error && <p className='text-center text-red-500'>{error}</p>}
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
                        {data && data.results &&
                            data.results.map((movie) => {
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
                            className={`border-2 rounded-lg py-2 px-6 font-semibold transition-all duration-200 ${pageNo <= 1
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
