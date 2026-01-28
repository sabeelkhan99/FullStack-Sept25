import React, { useRef, useState } from 'react'

const Form = () => {

    // State variables survives re-render

    const usernameInpRef = useRef(null);
    const passwordInpRef = useRef(null);

    const btnRef = useRef(null);

    const [count, setCount] = useState(0);

    // Normal variable do not survive re-renders.
    // let username = "";
    // let password = "";

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log('form submitted');
        console.log(usernameInpRef.current.value);
        console.log(passwordInpRef.current.value);
    }

    console.log('re-rendered');

    const btnClickHandler = () => {
        // console.log(btnRef.current)
        btnRef.current.disabled = true;
    }

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={btnClickHandler} ref={btnRef}>Click Me</button>
            <form onSubmit={formSubmitHandler}>
                <input type="text" placeholder='username' ref={usernameInpRef} />
                <input type="password" placeholder='password' ref={ passwordInpRef } />
                <button>Submit</button>
            </form>
        </div>

    )
}

export default Form
