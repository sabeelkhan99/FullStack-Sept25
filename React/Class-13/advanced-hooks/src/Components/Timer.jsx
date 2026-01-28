import React, { useRef, useState } from 'react'

const Timer = () => {

    const [timer, setTimer] = useState(0);
    const timerRef = useRef();

    const startTimerHandler = () => {
        timerRef.current = setInterval(() => {
            setTimer((prevState) => prevState + 1);
        }, 1000);
    }

    const stopTimerHandler = () => {
        clearInterval(timerRef.current)
    }

    return (
        <div>
            <h2>Time: {timer}</h2>
            <button onClick={startTimerHandler}>Start</button>
            <button onClick={stopTimerHandler}>Stop</button>
        </div>
    )
}

export default Timer
