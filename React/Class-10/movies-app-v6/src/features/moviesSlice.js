import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchPopularMovies = createAsyncThunk('movies/fetchPopularMovies',
    async (pageNo) => {
        const res = await axios.get(`${BASE_URL}/movie/popular?language=en-US&page=${pageNo}`,
            {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${API_KEY}`
                }
            });
        return res.data;
    }
)

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
        pageNo: 1
    },
    reducers: {
        changeToNextPage: (state, action) => {
            state.pageNo = state.pageNo + 1;
        },
        changeToPrevPage: (state, action) => {
            if (state.pageNo <= 1) {
                return;
            }
            state.pageNo = state.pageNo - 1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopularMovies.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchPopularMovies.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchPopularMovies.rejected, (state, action) => {
                state.error = action.error.message;
                state.isLoading = false;
            })
    }
});

export const { changeToNextPage, changeToPrevPage } = moviesSlice.actions;
export default moviesSlice.reducer;