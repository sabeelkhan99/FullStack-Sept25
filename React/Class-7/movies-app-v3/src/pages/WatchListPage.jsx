import React, {  useContext } from 'react'
import WatchListItem from '../components/WatchListItem'
import WatchListContext from '../store/watchlist-context';


const WatchListPage = () => {

    const { watchList } = useContext(WatchListContext);

    return (
        <div>
            <h1 className='text-3xl'>Watch List</h1>
            <section className='w-[60%] mx-auto'>
                {
                    watchList.map((item, idx) => {
                        return <WatchListItem
                            key={idx}
                            title={item.title}
                            runtime={item.runtime}
                        />
                    })
                }
            </section>
        </div>
    )
}

export default WatchListPage
