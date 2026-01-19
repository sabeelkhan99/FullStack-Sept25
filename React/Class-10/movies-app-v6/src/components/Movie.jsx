import React from 'react';
import { useNavigate } from 'react-router';

const Movie = (props) => {

    const navigate = useNavigate();

    const movieClickHandler = () => {
        navigate(`movies/${props.id}`);
    }

    return (
        <figure className='rounded-lg hover:cursor-pointer' onClick={movieClickHandler}>    
            <img className='w-3xs rounded-lg' src={`https://image.tmdb.org/t/p/w400/${props.posterPath}`} alt="" />
            <figcaption>
                <h2 className='font-bold'>{props.title}</h2>
                <h3>{props.releaseDate}</h3>
                <h3>{ props.voteAverage }</h3>
            </figcaption>
        </figure>
    )
}

export default Movie
