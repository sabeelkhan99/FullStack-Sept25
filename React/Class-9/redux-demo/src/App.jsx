import React, { useState } from 'react'
import Counter from './components/Counter'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './features/todos/todoSlice';

const App = () => {
    const todos = useSelector((state) => state.todoList.todos);
    const dispatch = useDispatch();
    
    const [todoInp, setTodoInp] = useState('');

    return (
        <div>
            <h1>Redux Toolkit Demo</h1>
            <Counter />
            <input type="text" placeholder='Add Todos' onChange={(event)=> setTodoInp(event.target.value)} />
            <button onClick={()=> dispatch(addTodo(todoInp))}>Add+</button>
            <ul>
                {
                    todos.map((todo, idx) => {
                        return <li key={idx}>{ todo }</li>
                    })
                }
            </ul>
        </div>
    )
}

export default App
