import {
  createAsyncThunk,
  createReducer,
  createAction,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setCategories = createAction("SET_CATEGORIES");

export const getAllCategories = createAsyncThunk("GET_ALL_CATEGORIES", () => {
  return axios
    .get("/api/categories")
    .then((res) => res.data)
    .catch((err) => console.log({ err }));
});

const categoriesReducer = createReducer([], {
  [setCategories]: (state, action) => action.payload,
  [getAllCategories.fulfilled]: (state, action) => action.payload,
});

export default categoriesReducer;
