import React from 'react'
import StopWatch from './components/StopWatch'
import Carousel from './components/Carousel'
import "./App.css";
import Modal from './components/Modal';
import useVisibility from './hooks/useVisibility';

const App = () => {

    const { visibility, show, hide } = useVisibility(false);

    return (
        <div>
            <h1>Machine Coding Problems</h1>
            {/* <StopWatch/> */}
            {/* <Carousel/> */}
            <Modal visibility={visibility} hide={  hide } />
            <button onClick={show}>Open</button>
        </div>
    )
}

export default App
