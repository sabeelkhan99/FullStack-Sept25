import React, { useState } from 'react'
import Form from './Components/Form'
import Timer from './Components/Timer'
import Person from './Components/Person'
import useToggle from './hooks/useToggle'
import Product from './Components/Product'
import Movies from './Components/Movies'

const App = () => {

    const [isDarkTheme, toggleTheme] = useToggle(true)

    return (
        <div>
            <button onClick={()=> toggleTheme()}>Toggle Theme </button>
            <h2>{ isDarkTheme ? 'dark' : 'light' }</h2>
            <h1>Advanced Hooks Demo</h1>
            {/* <Form/> */}
            {/* <Timer/> */}
            {/* <Person/> */}
            <Product />
            <Movies/>
        </div>
    )
}

export default App
