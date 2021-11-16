import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react-dom/test-utils";

export const setUser = createAction("SET_USER");

const initialState = {
  email: null,
  fullname: null,
  id: null,
  isAdmin: null,
};


export const meRequest=createAsyncThunk("ME",()=> {
return axios
.get("/api/auth/me")
.then((res)=>res.data)
.catch((err)=>  {console.log( {err})})


})



export const sendLogoutRequest = createAsyncThunk("LOGOUT", () => {
  return axios
    .post(`/api/auth/logout`)
    .then((res) => {
      return initialState;
    })
    .catch((err) => {
      console.log({ err });
    });
});


export const addCoursesToUser = createAsyncThunk("ADD_COURSES_TO_USER", (courses , thunkAPI) => {
  const {user} = thunkAPI.getState()
  return axios
    .post(`/api/users/addcourse/${user.id}`, courses)
    .then((res) => res.data)
    .catch((err) => {
      console.log({ err });
    });
});



const userReducer = createReducer(
  {},
  {
    [sendLogoutRequest.fulfilled]: (state, action) => action.payload,
    [setUser]: (state, action) => action.payload,
    [meRequest.fulfilled]: (state, action) => action.payload,
    [addCoursesToUser.fulfilled]: (state, action) => action.payload
  }
);

export default userReducer;
