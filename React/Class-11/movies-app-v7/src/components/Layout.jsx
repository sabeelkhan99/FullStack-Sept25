import React, { Fragment } from 'react'
import { Link } from 'react-router'

const Layout = (props) => {
    return (
        <Fragment>
            {/* Header */}
            <header className='sticky top-0 z-50 shadow-md'>
                <nav className='bg-gradient-to-r from-blue-600 to-blue-700'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <div className='flex items-center justify-between h-16'>
                            <Link to="/" className='flex items-center'>
                                <span className='text-2xl font-bold text-white hover:text-blue-200 transition-colors duration-200'>
                                    TMDB
                                </span>
                            </Link>
                            
                            <ul className='flex items-center gap-6 md:gap-8'>
                                <li>
                                    <Link 
                                        to="/" 
                                        className='text-white font-medium hover:text-blue-200 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-800/50'
                                    >
                                        Movies
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/watchlist" 
                                        className='text-white font-medium hover:text-blue-200 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-800/50'
                                    >
                                        WatchList
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        to="/login" 
                                        className='text-white font-medium hover:text-blue-200 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-800/50'
                                    >
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            

            {/* Main */}
            <main className='min-h-[calc(100vh-200px)]'>
                {props.children}
            </main>
            

            {/* Footer */}
            <footer className='bg-gradient-to-r from-gray-800 to-gray-900 text-white mt-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div>
                            <h3 className='text-xl font-bold mb-4'>TMDB</h3>
                            <p className='text-gray-400 text-sm'>
                                Your ultimate destination for discovering movies and TV shows.
                            </p>
                        </div>
                        
                        <div>
                            <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
                            <ul className='space-y-2'>
                                <li>
                                    <Link to="/" className='text-gray-400 hover:text-white transition-colors duration-200 text-sm'>
                                        Popular Movies
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className='text-gray-400 hover:text-white transition-colors duration-200 text-sm'>
                                        Top Rated
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/login" className='text-gray-400 hover:text-white transition-colors duration-200 text-sm'>
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className='text-lg font-semibold mb-4'>About</h4>
                            <p className='text-gray-400 text-sm'>
                                Powered by The Movie Database (TMDB) API. Explore thousands of movies and TV shows.
                            </p>
                        </div>
                    </div>
                    
                    <div className='border-t border-gray-700 mt-8 pt-6'>
                        <p className='text-center text-gray-400 text-sm'>
                            &copy; {new Date().getFullYear()} TMDB. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Layout
