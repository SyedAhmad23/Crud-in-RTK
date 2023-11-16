import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllData = createAsyncThunk("gitUser", async (arge, { rejectWithValue }) => {
    const response = await fetch("https://api.github.com/users");
    try {
        const result = response.json();
        return result;
    } catch (error) {
        return rejectWithValue("Oops something went wrong")
    }

});

const gitUserSlice = createSlice({
    name: "gitUser",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllData.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllData.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getAllData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default gitUserSlice.reducer;
