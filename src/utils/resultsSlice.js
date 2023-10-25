import { createSlice } from "@reduxjs/toolkit";

const resultsSlice = createSlice({
  name: "results",
  initialState: {
    allResults: [],
  },
  reducers: {
    searchResultsSlice: (state, action) => {
      state.allResults.push(action.payload);
    },

    removeSubs: (state, action) => {
      let removeItem = state.allResults.filter(
        (item) => item[0].id !== action.payload
      );

      console.log(removeItem);
      state.allResults = removeItem;
    },
  },
});

export const { searchResultsSlice, removeSubs } = resultsSlice.actions;
export default resultsSlice.reducer;
