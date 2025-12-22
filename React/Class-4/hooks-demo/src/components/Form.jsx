import React, { Fragment, useState } from 'react'

const Form = (props) => {

    const [taskInp, setTaskInp] = useState("");
    const [count, setCount] = useState(0);
    // let taskInp = "";

    const formSubmitHandler = (event) => {
        event.preventDefault();
        props.addTodo(taskInp);
    }

    const taskInpHandler = (event) => {
        setTaskInp(event.target.value);
        // taskInp = event.target.value;
        // console.log(taskInp);
    }

    return (
        <Fragment>
            <form onSubmit={formSubmitHandler}>
                <h2>Add Task : {count}</h2>
                <input type="text" onChange={taskInpHandler} />
                <button>Add+</button>
            </form>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </Fragment>
    )
}

export default Form
