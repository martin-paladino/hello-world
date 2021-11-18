import {
    createAction,
    createAsyncThunk,
    createReducer,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setCategory = createAction("SET_CATEGORY")




const categoryReducer = createReducer([], {
    [setCategory]: (state, action) => action.payload,
    
})

export default categoryReducer