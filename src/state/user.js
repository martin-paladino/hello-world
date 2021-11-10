import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";


export const setUser=createAction("SET_USER")


export const sendLoginRequest=createAsyncThunk("LOGIN", ()=>    {
return axios.get("/api/login")
.then((res)=>res.data)

})


const userReducer=createReducer([], {

[sendLoginRequest.fulfilled]:(state,action)=>action.payload,
[setUser]:(state,action)=>action.payload

})

export default userReducer