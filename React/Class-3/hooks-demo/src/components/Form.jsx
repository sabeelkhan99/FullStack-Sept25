import React, { useState } from 'react'

const Form = () => {

    const [taskInp, setTaskInp] = useState("");

    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(taskInp);
    }

    const taskInpHandler = (event) => {
        setTaskInp(event.target.value);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <h2>Add Task</h2>
            <input type="text" onChange={taskInpHandler}  />
            <button>Add+</button>
        </form>
    )
}

export default Form
