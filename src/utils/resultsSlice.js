import { createSlice } from "@reduxjs/toolkit";

const resultsSlice=createSlice({
    name:'results',
    initialState:{
        allResults:[]
    },
    reducers:{
        searchResultsSlice:(state,action)=>{
            state.allResults=(action.payload)
        }

    }
})

export default resultsSlice.reducer;

export const {searchResultsSlice} =resultsSlice.actions;