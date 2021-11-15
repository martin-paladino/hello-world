import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setUser = createAction("SET_USER");

export const sendLogoutRequest = createAsyncThunk("LOGOUT", () => {
  return axios
    .post("/api/auth/logout")
    .then(res => res.data)
    .catch(err => console.log({ err }))
});

const userReducer = createReducer({}, {
  [sendLogoutRequest.fulfilled]: (state, action) => action.payload,
  [setUser]: (state, action) => action.payload,
})

export default userReducer;
