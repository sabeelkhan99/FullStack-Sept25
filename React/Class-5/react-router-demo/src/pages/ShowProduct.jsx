import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ShowProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                // console.log(data);
                setProduct(()=> data);
            })
    }, [id]);

    return (
        <div>
            <h2>Show Product Page  - {id}</h2>
            {product && <div>
                <img src={ product.image } />
                <h2>{product.title}</h2>
            </div>}
        </div>
    )
}

export default ShowProduct
