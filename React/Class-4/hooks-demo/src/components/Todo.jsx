import React, {useState} from 'react';

const Todo = (props) => {

    return (
        <li className='todo'>
        {props.todo.task}
        </li>
    )
}

export default Todo

