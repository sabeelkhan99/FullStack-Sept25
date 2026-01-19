import React,{act, useEffect, useReducer} from 'react'

async function fetchProductById() {
    const response = await fetch('https://fakestoreapi.com/products/1');
    const data = await response.json();
    return data;
}

const httpReducer = (state, action) => {
    if (action.type === 'PENDING') {
        return {
            data: null,
            isLoading: true,
            error: null
        }
    }
    if (action.type === 'COMPLETED') {
        return {
            data: action.payload,
            isLoading: false,
            error: null
        }
    }
    if (action.type === 'ERROR') {
        return {
            data: null,
            isLoading: false,
            error: action.errMsg
        }
    }
    throw new Error('Invalid Action');
}

const OptimisedAPICallDemo = () => {

    const [httpState, dispatch] = useReducer(httpReducer, {
        data: null,
        isLoading: false,
        error: null
    });

    useEffect(() => {
        async function makeApiCall(params) {
            try {
                dispatch({ type: 'PENDING' });
                const product = await fetchProductById();
                dispatch({ type: 'COMPLETED', payload: product });
            }
            catch (err) {
                dispatch({ type: 'ERROR', errMsg: err.message || 'Something went wrong' });
            }
        }
        makeApiCall();
    }, []);

    return (
        <div>
            <h1>Optimised Call</h1>
            {httpState.isLoading && <p>Loading....</p>}
            {httpState.error && <p>{httpState.error}</p>}
            {httpState.data && <h2>{ httpState.data.title }</h2>}
        </div>
    )
}

export default OptimisedAPICallDemo
