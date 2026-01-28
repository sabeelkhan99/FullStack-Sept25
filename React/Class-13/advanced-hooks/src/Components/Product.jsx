import React, { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'

const Product = () => {

    const { data, isLoading, error, sendRequest } = useFetch('https://fakestoreapi.com/products/1');

    useEffect(() => {
      sendRequest()
    },[])

    return (
        <figure style={{border:'2px solid black'}}>
            <h3>Product Details</h3>
            {isLoading && <p>Loading...</p>}
            {error && <p>{ error }</p>}
            {data && <h4>{ data.title }</h4>}
        </figure>
    )
}

export default Product
