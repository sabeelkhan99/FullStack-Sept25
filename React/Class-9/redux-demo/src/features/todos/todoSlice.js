import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: ['Buy Groceries', 'Go to Gym']
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    // reducers should be - synchrounous, pure functions
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        }
    }
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
