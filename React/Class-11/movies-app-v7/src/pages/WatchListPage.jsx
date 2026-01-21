import { useContext, useState } from 'react'
import WatchListItem from '../components/WatchListItem'
import WatchListContext from '../store/watchlist-context';


const WatchListPage = () => {

    const { watchList, sortAscendingByRating, sortDescendingByRating, genreList } = useContext(WatchListContext);

    const [searchKeyword, setSeachKeyword] = useState("");

    const [currentGenre, setCurrentGenre] = useState('All Genre');

    // HomeWork: Implement deboucing for search feature
    const searchInpHandler = (event) => {
        setSeachKeyword(() => event.target.value);
    }

    const getCurrentGenre = (genre) => {
        setCurrentGenre(() => genre);
    }

    return (
        <div className='w-[60%] mx-auto'>
            <h1 className='text-3xl my-3 '>Watch List</h1>
            <section>
                {genreList.map((genre, idx) => {
                    return <button onClick={() => getCurrentGenre(genre)} key={idx} className={`border border-gray-200 rounded-lg me-3 py-0.5 px-1 hover:cursor-pointer ${currentGenre===genre ? 'border-2 border-purple-600': ''}`}>{ genre }</button>
                })}
            </section>
            <section>
                <div className='my-3'>
                    <h3>Sort: Rating</h3>
                    <button className='hover:cursor-pointer me-4' onClick={() => sortAscendingByRating()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
                        </svg>
                    </button>
                    <button className='hover:cursor-pointer' onClick={() => sortDescendingByRating()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                        </svg>
                    </button>
                </div>
                <div>
                    <input onChange={searchInpHandler} type="text" placeholder='search movies' className='w-full mb-3 p-4 rounded-4xl bg-gray-100 outline-none' />
                </div>
            </section>
            <section className='mx-auto'>
                {
                    watchList.length > 0 && watchList
                        .filter((movie) => {
                            if (currentGenre === 'All Genre') {
                                return true;
                            }
                            return movie.genres[0].name === currentGenre;
                        })
                        .filter((movie) => movie.title.toLowerCase().includes(searchKeyword.toLowerCase()))
                        .map((item, idx) => {
                            return <WatchListItem
                                key={idx}
                                title={item.title}
                                runtime={item.runtime}
                                posterPath={item.poster_path}
                                rating={item.vote_average}
                            />
                        })
                }
            </section>
        </div>
    )
}

export default WatchListPage
