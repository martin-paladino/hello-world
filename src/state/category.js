import {createAction, createReducer} from "@reduxjs/toolkit";

export const setCategory = createAction("SET_CATEGORY")

const categoryReducer = createReducer([], {
[setCategory]: (state, action) => action.payload,
})

export default categoryReducer