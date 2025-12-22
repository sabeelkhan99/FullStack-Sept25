import React, { Fragment, useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    const incrementCountHandler = () => {
        setCount(count + 1);
    }

    const decrementCountHandler = () => {
        setCount(count - 1);
    }

    return (
        <Fragment>
            <h1>
                Count : {count}
            </h1>
            <button onClick={incrementCountHandler}>incr++</button>
            <button onClick={decrementCountHandler}>decr--</button>
        </Fragment>
    )
}

export default Counter
