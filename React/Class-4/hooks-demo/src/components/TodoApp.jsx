import React, { useState } from 'react'
import Form from './Form'
import TodoList from './TodoList';
import { v4 as uuid } from 'uuid';
import { Fragment } from 'react';
import { useEffect } from 'react';

const TodoApp = () => {

    const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');

    const [todos, setTodos] = useState(initialTodos);
    
    const addTodo = (newTask) => {
        setTodos((prevState) => [...prevState, { id: uuid(), task: newTask, completed: false }]);
    }

    // Whenever the component re-renders this will be executed.
    useEffect(() => {
        console.log('Use Effect without dependency array');   
    });

    // Is getting called just after the first render
    useEffect(() => {
        console.log('Use effect with empty dependency array');
    }, []);

    // This is executed after the first render and whenever the `todos` changes
    useEffect(() => {
        console.log('Use effect with todos in the dependency array');

        // This is the side-effect 
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <div className='todos'>
            <Form addTodo={ addTodo } />
            <TodoList todos={ todos } />
        </div>
    )
}

export default TodoApp
