import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setOrders = createAction("SET_ORDERS");

export const getUserOrders = createAsyncThunk(
  "GET_USER_ORDERS", userId => {
    return axios
      .get(`/api/users/getuserorders/${userId}`)
      .then(res => res.data)
      .catch((err) => console.log({ err }));
  }
);


export const addCoursesToUserOrders = createAsyncThunk("ADD_COURSES_TO_USER_ORDER", (body) => {
  return axios
  .post("/api/users/adduserorders", body)
  .then(res => res.data )
  .catch((err) => {
    console.log({ err });
  });
})

//funcion para traer los cursos comprados (purchased=true)
export const getMyCourses = createAsyncThunk("GET_MY_COURSES", userId => {
  return axios
    .get(`/api/users/getmycourses/${userId}`)
    .then(res => res.data)
    .catch((err) => console.log({ err }));
})

const ordersReducer = createReducer([], {
  [setOrders]: (state, action) => action.payload,
  [getUserOrders.fulfilled]: (state, action) => action.payload,
  [getMyCourses.fulfilled]: (state, action) => action.payload,
  [addCoursesToUserOrders.fulfilled]: (state, action) => action.payload
});

export default ordersReducer;
