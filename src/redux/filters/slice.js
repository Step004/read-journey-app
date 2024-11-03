import { createSlice } from "@reduxjs/toolkit";

const bookInitialState = {
  filters: {
    title: "",
    author: "",
  },
};

const slice = createSlice({
  name: "filters",
  initialState: bookInitialState,
  reducers: {
    changeTitleFilter: (state, action) => {
      state.filters.title = action.payload;
    },
    changeAuthorFilter: (state, action) => {
      state.filters.author = action.payload;
    },
  },
});

export const {changeTitleFilter, changeAuthorFilter} =slice.actions;
export default slice.reducer;