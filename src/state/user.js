import {
  createAction,
  createAsyncThunk,
  createReducer,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setUser = createAction("SET_USER");

const initialState = {
  email: null,
  fullname: null,
  id: null,
  isAdmin: null
} 

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

 export const meRequest=createAsyncThunk("ME",()=> {
  return axios
  .get("/api/auth/me")
  .then((res)=>res.data)
  .catch((err)=>  {console.log( {err})})
  })


const userReducer = createReducer({}, {
  [sendLogoutRequest.fulfilled]: (state, action) => action.payload,
  [meRequest.fulfilled]: (state, action) => action.payload,
  [setUser]: (state, action) => action.payload,
})

export default userReducer;
