import {
    createAction,
    createAsyncThunk,
    createReducer,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setCourse = createAction("SET_COURSE")

export const getCourse = createAsyncThunk("GET_COURSE", id => {
    return axios
    .get(`/api/courses/${id}`)
    .then(res => res.data)
    .catch(err => console.log({err}))
})

const courseReducer = createReducer({}, {
    [setCourse]: (state, action) => action.payload,
    [getCourse.fulfilled]: (state, action) => action.payload
})

export default courseReducer