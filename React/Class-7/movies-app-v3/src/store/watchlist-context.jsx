import React, { createContext, useEffect, useState } from 'react'

// This creates initial context and we put placeholder values, it helps in suggestions while consuming the context using `useContext` hook
const WatchListContext = createContext({
    watchList: [],
    addToWatchList: () => { }
});

// This is the context provider it fecilitates the context in the App component
export const WatchlistContextProvider = (props) => {

    // initial values of watch list loaded from local storage
    const initialWatchList = JSON.parse(window.localStorage.getItem('watchList') || '[]')

    // watch list state to track items in watch list
    const [watchList, setWatchList] = useState(initialWatchList);

    // function to add new movie to watchList
    const addToWatchList = (newMovie) => {
        setWatchList((prevState)=> [...prevState, newMovie])
    }

    // context object to be used to passed down the context value using provider
    const context = {
        watchList: watchList,
        addToWatchList: addToWatchList
    }

    // use effect taking care of syncing the watchList to local storage whenever watchList changes
    useEffect(() => {
        window.localStorage.setItem('watchList', JSON.stringify(watchList));
    }, [watchList])

    return (
        // provider
        <WatchListContext.Provider value={context}>
            {props.children}
        </WatchListContext.Provider>
    )
}

export default WatchListContext;
