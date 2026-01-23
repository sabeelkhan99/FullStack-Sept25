import React, { useMemo } from 'react'

const createLargeArray = () => {
    console.log('calling create largest array')
    const arr = [];
    for (let i = 1; i < 1000000; i++){
        arr.push(i);
    }
    return arr;
}

const sum = (arr) => {
    console.log('calling sum ...')
    return arr.reduce((acc, curr) => acc + curr, 0);
}

const Demo = () => {
    console.log('Demo rendered');
    const largeArray = useMemo(() => createLargeArray(), []); 
    const totalSum = useMemo(()=> sum(largeArray), [largeArray]); 

    return (
        <div>
            <h2>This is a demo component</h2>
            <h4>Sum: { totalSum }</h4>
        </div>
    )
}

export default Demo
