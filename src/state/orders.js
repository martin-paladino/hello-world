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

/*  export const purchasedCourse=createAsyncThunk("PURCHASED_COURSE", (  {courseId,userId  })=>  {
 return axios
  .get(`/api/courses/purchasedcourse/${courseId}/${userId}`)
  .then(res => res.data)
  .catch(err => console.log({ err }))


}) */
 
const ordersReducer = createReducer([], {
  [setOrders]: (state, action) => action.payload,
  [getUserOrders.fulfilled]: (state, action) => action.payload,
/*   [purchasedCourse.fulfilled]: (state, action) => action.payload
 */ 
});

export default ordersReducer;
