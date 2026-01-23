import React, { memo } from 'react'

const Person = memo((props) => {
    console.log('Person rendered');
    return (
        <div>
            <h2>Person component</h2>
            <h3>Name: {props.name}</h3>
        </div>
    )
})

export default Person
