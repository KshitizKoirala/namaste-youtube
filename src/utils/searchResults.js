import { createSlice } from "@reduxjs/toolkit";

const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState: {
    searchVideos: false,
    searchKeyword: "",
  },
  reducers: {
    displaySearchResults: (state, action) => {
      state.searchKeyword = action.payload;
    },
  },
});

export const { displaySearchResults } = searchResultsSlice.actions;
export default searchResultsSlice.reducer;
