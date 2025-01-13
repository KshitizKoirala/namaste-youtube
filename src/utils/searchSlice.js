import { createSlice } from "@reduxjs/toolkit";

/**
 * Cache
 * if we store our search results in array, i.e time complexity of search in array = O(n)
 * time complexity to find a key in Object = O(1)
 *
 */
const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      // {"ip": ["iphone", iphone1]}
      //   state = { ...action.payload, ...current(state) };
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;

// implement LRU cache, such that only [100] recent searches are present
