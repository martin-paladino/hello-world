import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";


export const setUser=createAction("SET_USER")


export const sendLoginRequest=createAsyncThunk("LOGIN", ()=>    {
return axios.get("/api/login")
.then((res)=>res.data)

})


export const sendLogoutRequest=createAsyncThunk("LOGOUT",()=> {
return axios.get("/api/logout")
.then((res)=>res.data)
})


export const userReducer=createReducer([], {

[sendLoginRequest.fulfilled]:(state,action)=>action.payload,
[sendLogoutRequest.fulfilled]:(state,action)=>action.payload,
[setUser]:(state,action)=>action.payload

})