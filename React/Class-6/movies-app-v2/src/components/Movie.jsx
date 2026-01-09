import React from 'react'

const Movie = (props) => {
  return (
      <figure className='rounded-lg'>    
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
