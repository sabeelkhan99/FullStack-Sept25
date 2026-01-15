import React from 'react'

const WatchListItem = (props) => {

    const hours = Math.floor(props.runtime / 60);          
    const minutes = props.runtime % 60;


    return (
        <figure className='flex border rounded-lg mb-3'>
            <img className='w-[150px]' src={`https://image.tmdb.org/t/p/w400/${props.posterPath}`} alt="" />
            <figcaption className='p-5'>
                <h3 className='text-2xl font-bold'>{props.title}</h3>
                <h4>Runtime: {hours} hrs { minutes } min</h4>
                <h4>Rating: { props.rating}</h4>
            </figcaption>
        </figure>
    )
}

export default WatchListItem
