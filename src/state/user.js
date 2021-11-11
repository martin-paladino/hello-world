import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";


export const setUser=createAction("SET_USER")

/* 
export const sendLoginRequest=createAsyncThunk("LOGIN", ()=>    {
return axios.get("/api/login")
.then((res)=>res.data)

})
 */

const initialState = {
   email: null,
   fullname: null,
   id: null,
   isAdmin: null
} 

export const sendLogoutRequest = createAsyncThunk("LOGOUT", (data) => {
    return axios
      .post(`/api/auth/logout`, data)
      .then((res) => {

        return initialState;
      })
      .catch((err) => {
        console.log({ err });
      });
  });



// chequear si seteamos con un [] o {}
const userReducer=createReducer(initialState, {
//[sendLoginRequest.fulfilled]:(state,action)=>action.payload,
[sendLogoutRequest.fulfilled]:(state,action)=>action.payload,
[setUser]:(state,action)=>action.payload

})

export default userReducer