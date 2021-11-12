import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setCart = createAction("SET_CART");

//devuelve todos los cursos del carrito de un user (pendiente)//
export const getCourses = createAsyncThunk("COURSE", (userId) => {
  return axios
    .get(`/api/cart/:${userId}/courses`) //de donde sacariamos el id??
    .then((res) => res.data)
    .catch((err) => {
      console.log({ err });
    });
});

//const data = {userId, courseId}

export const AddCourseToCart = createAsyncThunk("COURSE", (data ) => {
  return axios
    //.get(`/api/cart/addtocart/:${userId}/${courseId}`) //de donde sacariamos el id??
    .then((res) => res.data)
    .catch((err) => {
      console.log({ err });
    });
});

export const deleteCourseFromCart = createAsyncThunk("COURSE", (data ) => {
  return axios
    //.get(`/api/cart/:${userId}/${courseId}`) //de donde sacariamos el id??
    .then((res) => res.data)
    .catch((err) => {
      console.log({ err });
    });
});


const cartReducer = createReducer([], {
  [getCourses.fulfilled]: (state, action) => action.payload, 
  [deleteCourseFromCart]: (state, action) => action.payload,
  [AddCourseToCart]: (state, action) => action.payload,
});

export default cartReducer;
