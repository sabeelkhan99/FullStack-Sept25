import React, { useState } from 'react'
import useToggle from '../hooks/useToggle';

const Person = () => {

    const [isHappy, toggleHappy] = useToggle(false);

    return (
        <div>
            <h2 onClick={()=> toggleHappy()}>{ isHappy ? '😀' : '😡' }</h2>
        </div>
    )
}

export default Person
