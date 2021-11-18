import  {createAsyncThunk, createReducer}from "@reduxjs/toolkit"
import axios from "axios"

export const getCategories=createAsyncThunk("GET_CATEGORIES",()=>   {
    return axios
    .get("/api/categories")
    .then((res)=>res.data)
    .catch((err)=>console.log(err))
    
    })

    const categoriesReducer=(createReducer([],  {

        [getCategories.fulfilled]:(state,action) => action.payload



    }))
    
    export default categoriesReducer
    