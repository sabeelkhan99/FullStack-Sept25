import React, { useState } from 'react'

const useFetch = (requestUrl, headers={}) => {

    if (!requestUrl) {
        throw new Error('Request url is empty');
    }

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null);

    const sendRequest = async () => {
        try {
            setIsLoading(true);
            const res = await fetch(requestUrl, {
                headers: {
                    ...headers
                }
            });
            const parsedData = await res.json();
            setData(() => parsedData);
            setIsLoading(false);
        }
        catch (err) {
            setError(err.message || 'Something went wrong while fetching');
            setIsLoading(false);
        }
    }

    return { data, error, isLoading, sendRequest };
}

export default useFetch
