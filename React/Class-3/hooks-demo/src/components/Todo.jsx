import React, {useState} from 'react';

const Todo = (props) => {

    const [task, setTask] = useState(props.todo.task);

    const todoClickHandler = () => {
        setTask('SOME RANDOM TEXT!!');
    }

    return (
        <li onClick={todoClickHandler} className='todo'>
        {task}
        </li>
    )
}

export default Todo

