import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constant";

const chatSlice =createSlice({
    name:"chat",
    initialState:{
        message:[]
    },
    reducers:{
        addmessage:(state, action)=>{
            state.message.splice(OFFSET_LIVE_CHAT,1)
            state.message.unshift(action.payload)

        }
    }
})

export const {addmessage}=chatSlice.actions;
export default chatSlice.reducer