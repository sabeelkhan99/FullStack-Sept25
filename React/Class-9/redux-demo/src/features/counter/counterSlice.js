import { createSlice } from "@reduxjs/toolkit";

// This is the initial state of a slice which will live in a global store
const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,

    // These are the functions which defined what has to be done with the state.
    reducers: {
        increment: (state, action) => {
            state.value = state.value + 1;
        },
        decrement: (state, action) => {
            state.value = state.value - 1;
        },
        incrementByAmount: (state, action) => {
            state.value = state.value + action.payload
        }
    }
});

// createSlice method automatically create actions object which has actions in the form of 
/*
    actions: {
        increment: ()=> ({type: 'counter/increment', payload: undefined}),
        decrement: ()=> ({type: 'counter/decrement', payload: undefined}),
        incrementByAmount: ()=> ({type: 'counter/incrementByAmount', payload: value}),
    }

*/
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// createSlice also combine all the logic of reducers into a singe reducer function available as `counterSlice.reducer`
export default counterSlice.reducer;



