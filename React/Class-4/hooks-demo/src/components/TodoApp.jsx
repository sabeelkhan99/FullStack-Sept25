import React, { useState } from 'react'
import Form from './Form'
import TodoList from './TodoList';
import { v4 as uuid } from 'uuid';
import { Fragment } from 'react';

const TodoApp = () => {

    const initialTodos = [
        {
            id: uuid(),
            task: "Go to Gym",
            completed: false
        },
        {
            id: uuid(),
            task: "Read Book",
            completed: true
        },
        {
            id: uuid(),
            task: "Go to Swimming",
            completed: true
        }
    ];

    const [todos, setTodos] = useState(initialTodos);
    
    const addTodo = (newTask) => {
        setTodos((prevState) => [...prevState, { id: uuid(), task: newTask, completed: false }]);
    }

    return (
        <div className='todos'>
            <Form addTodo={ addTodo } />
            <TodoList todos={ todos } />
        </div>
    )
}

export default TodoApp
