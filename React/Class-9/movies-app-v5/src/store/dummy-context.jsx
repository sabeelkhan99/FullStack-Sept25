import React, { createContext } from 'react'

const DummyContext = createContext({
    name: null,
    age: 0,
    hobbies: [],
    changeToUpperCase: ()=>{}
});

export const DummyContextProvider = (props) => {
    
    const changeToUpperCase = () => {
        console.log('Calling this function')
    }

    const contextObj = {
        name: 'max',
        age: 25,
        hobbies: ['swimming', 'tennis', 'trekking'],
        changeToUpperCase
    }

    return (
        <DummyContext.Provider value={contextObj}>
            {props.children}
        </DummyContext.Provider>
    )
}

export default DummyContext;
