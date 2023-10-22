import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import resultsSlice from "./resultsSlice";

const store = configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        chat: chatSlice,
        results:resultsSlice

    },
});

export default store;