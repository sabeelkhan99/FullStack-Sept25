import React, { Fragment } from 'react'

const Layout = (props) => {
    return (
        <Fragment>
            <header>
                <nav>
                    <ul className='flex w-full justify-between bg-blue-300 p-4'>
                        <li><a href="/">TMDB</a></li>
                        <li><a href="/">Movies</a></li>
                        <li><a href="/">TV Shows</a></li>
                        <li><a href="/">More</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                {props.children}
            </main>
            <footer className='bg-blue-300'>
                <p>All rights reserved &copy;</p>
            </footer>
        </Fragment>
    )
}

export default Layout
