import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductById } from '../features/productSlice';

const ReduxAPICallDemo = () => {

    const { data, error, isLoading } = useSelector((state) => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductById());
    },[]);

    return (
        <div>
            <h1>Redux : AsyncThunkDemo</h1>
            {isLoading && <p>Loading in redux....</p>}
            {error && <p>{error}</p>}
            {data && <p>{data.title}</p>}
        </div>
    )
}

export default ReduxAPICallDemo
