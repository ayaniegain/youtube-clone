import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState:{
        isMenuOpen: true,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen=! state.isMenuOpen
        },
        closeSidebar:(state,action)=>{
            state.isMenuOpen=false
        }

    }

})

export const {toggleMenu,closeSidebar} =appSlice.actions;
export default appSlice.reducer;