import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState:{
        isMenuOpen: true,
        value:0
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=! state.isMenuOpen
        },
        incSalary:(state,action)=>{
            state.value=`${action.payload}`
        }

    }

})

export const {toggleMenu,incSalary} =appSlice.actions;
export default appSlice.reducer;