import { createSlice } from "@reduxjs/toolkit";
import { fetchRecommendedBooks } from "./operations.js";

const bookInitialState = {
  items: [],
  loading: false,
  error: false,
};

const slice = createSlice({
  name: "books",
  initialState: bookInitialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchRecommendedBooks.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchRecommendedBooks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchRecommendedBooks.rejected, (state) => {
        state.error = true;
        state.loading = false;
      }),
});
export default slice.reducer;
