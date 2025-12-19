import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <ul>
            {
                props.todos.map((todo) => {
                    return <Todo key={todo.id} todo={ todo } />
                })
            }
        </ul>
    )
}

export default TodoList
