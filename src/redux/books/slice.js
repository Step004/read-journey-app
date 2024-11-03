import { createSlice } from "@reduxjs/toolkit";

const bookInitialState = {
  items: [],
  loading: false,
  error: false,
};

const slice = createSlice({
    name: "books",
    initialState: bookInitialState,
    // extraReducers: (builder) =>
    //     builder .addCase()
})
export default slice.reducer;