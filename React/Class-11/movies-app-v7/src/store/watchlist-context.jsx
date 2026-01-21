import React, { createContext, useEffect, useState } from 'react'

// This creates initial context and we put placeholder values, it helps in suggestions while consuming the context using `useContext` hook
const WatchListContext = createContext({
    watchList: [],
    addToWatchList: () => { },
    sortAscendingByRating: () => { },
    sortDescendingByRating: () => { },
    genreList: [],
});

// This is the context provider it fecilitates the context in the App component
export const WatchlistContextProvider = (props) => {

    // initial values of watch list loaded from local storage
    const initialWatchList = JSON.parse(window.localStorage.getItem('watchList') || '[]');


    // watch list state to track items in watch list
    const [watchList, setWatchList] = useState(initialWatchList);

    const [genreList, setGenereList] = useState(JSON.parse(window.localStorage.getItem('genreList') || JSON.stringify(['All Genre'])));

    // function to add new movie to watchList
    const addToWatchList = (newMovie) => {
        setWatchList((prevState) => [...prevState, newMovie]);

        const newIncomingGenre = newMovie.genres[0].name;

        setGenereList((prevState)=> [...new Set([...prevState, newIncomingGenre])])
    }

    const sortAscendingByRating = () => {
        setWatchList((prevState) => prevState.toSorted((movie1, movie2) => movie1.vote_average - movie2.vote_average));
    }

    const sortDescendingByRating = () => {
        setWatchList((prevState) => prevState.toSorted((movie1, movie2) => movie2.vote_average - movie1.vote_average));
    }
    // context object to be used to passed down the context value using provider
    const context = {
        watchList: watchList,
        addToWatchList: addToWatchList,
        sortAscendingByRating,
        sortDescendingByRating,
        genreList: genreList
    }

    // use effect taking care of syncing the watchList to local storage whenever watchList changes
    useEffect(() => {
        window.localStorage.setItem('watchList', JSON.stringify(watchList));
    }, [watchList]);

    useEffect(() => {
        window.localStorage.setItem('genreList', JSON.stringify(genreList));
    }, [genreList])

    return (
        // provider
        <WatchListContext.Provider value={context}>
            {props.children}
        </WatchListContext.Provider>
    )
}

export default WatchListContext;
