import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productSlice';

export const store = configureStore({
    // Here we will map global states in store with their reducer
    reducer: {
        product: productReducer
    }
})