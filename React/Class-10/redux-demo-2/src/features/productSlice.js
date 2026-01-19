import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductById = createAsyncThunk('product/fetchProductById',
    async () => {
        const response = await fetch('https://fakestoreapi.com/products/1');
        const data = await response.json();
        return data;
    },
)

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: null,
        isLoading: false,
        error: null
    },
    // We can only place synchrounous pure functions inside as reducers
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductById.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.error = action.error.message;
                state.isLoading = false;
            })
    }
});

export default productSlice.reducer;

