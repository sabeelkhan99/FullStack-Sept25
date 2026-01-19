import React, { useEffect, useState } from 'react';

async function fetchProductById() {
    const response = await fetch('https://fakestoreapi.com/products/1');
    const data = await response.json();
    return data;
}

const APICallDemo = () => {

    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function makeApiCall() {
            try {
                const product = await fetchProductById();
                setProduct(product);
                setIsLoading(false);
            }
            catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        }
        makeApiCall();
    }, []);

    return (
        <div>
            
            <h1>Redux Demo 2</h1>
            {isLoading && <p>Loading the product.......</p>}
            {error && <p>{ error }</p>}
            {product && <h2>{product.title}</h2>}
        </div>
    )
}

export default APICallDemo
