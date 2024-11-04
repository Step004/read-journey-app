export const selectRecommendedBooks = (state) => state.book.items.results;
export const selectIsLoadingBooks = (state) => state.book.loading;
export const selectIsErrorBooks = (state) => state.book.error;