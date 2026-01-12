import React from 'react'

const WatchListItem = (props) => {
  return (
    <figure className='border rounded-lg mb-3'>
          {props.title}
          ,{props.runtime}
    </figure>
  )
}

export default WatchListItem
