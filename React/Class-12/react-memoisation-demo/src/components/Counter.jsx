import React, { useCallback, useState } from 'react'
import Person from './Person';
import CounterDisplay from './CounterDisplay';
import Demo from './Demo';

const Counter = () => {
    const [count, setCount] = useState(0);
    console.log('Counter rendered');
    const [name, setName] = useState('Max');

    const incrementCountBy10 = useCallback(() => {
        setCount(count + 10);
    }, [count]);

    return (
        <div>
            <h2>Count : {count}</h2>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <Person name={name} />
            <button onClick={()=> setName('Anonymous')}>Change name to Anonymous</button>
            <CounterDisplay count={count} incrementCountBy10={ incrementCountBy10 } />
            <Demo/>
        </div>
    )
}

export default Counter
