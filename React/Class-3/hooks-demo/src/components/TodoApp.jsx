import React from 'react'
import Form from './Form'
import TodoList from './TodoList';
import { v4 as uuid } from 'uuid';
import { Fragment } from 'react';

const TodoApp = () => {

    const todos = [
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
    ]


    return (
        <Fragment>
            <Form />
            <TodoList todos={ todos } />
        </Fragment>
    )
}

export default TodoApp
