import React, { createContext, useEffect, useState } from 'react'

const WatchListContext = createContext({
    watchList: [],
    addToWatchList: () => { }
});

export const WatchlistContextProvider = (props) => {

    const initialWatchList = JSON.parse(window.localStorage.getItem('watchList') || '[]')

    const [watchList, setWatchList] = useState(initialWatchList);

    const addToWatchList = (newMovie) => {
        setWatchList((prevState)=> [...prevState, newMovie])
    }

    const context = {
        watchList: watchList,
        addToWatchList: addToWatchList
    }

    useEffect(() => {
        window.localStorage.setItem('watchList', JSON.stringify(watchList));
    }, [watchList])

    return (
        <WatchListContext.Provider value={context}>
            {props.children}
        </WatchListContext.Provider>
    )
}

export default WatchListContext;
