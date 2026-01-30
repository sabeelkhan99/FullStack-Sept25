import React, { useRef, useState } from 'react'

function formatTime(seconds) {
    return new Date(seconds * 1000).toISOString().slice(11, 19);
}

const StopWatch = () => {

    // Timer will start with zero seconds.
    const [timer, setTimer] = useState(0);
    
    // Create a ref so that it can be utilised to save id of timer.
    const timerIdRef = useRef();
    
    const startTimerHandler = () => {
        timerIdRef.current = setInterval(() => {
            setTimer((prevState) => prevState + 1);
        }, 1000)
    }

    const stopTimerHandler = () => {
        clearInterval(timerIdRef.current);
        console.log('cleared the interval with id', timerIdRef.current);
    }

    const resetTimerHandler = () => {
        clearInterval(timerIdRef.current);
        setTimer(0);
    }

    return (
        <div>
            <h2>Time: {formatTime(timer)}</h2>
            <button onClick={startTimerHandler}>Start</button>
            <button onClick={stopTimerHandler}>Stop</button>
            <button onClick={resetTimerHandler}>Reset</button>
        </div>
    )
}

export default StopWatch
