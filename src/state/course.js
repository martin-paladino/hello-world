import {
    createAction,
    createReducer,
} from "@reduxjs/toolkit";

export const setCourse = createAction("SET_COURSE")

const courseReducer = createReducer({}, {
    [setCourse]: (state, action) => action.payload
})

export default courseReducer