import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setCart = createAction("SET_CART");

//devuelve todos los cursos del carrito de un user (pendiente)//
export const getCourses = createAsyncThunk("COURSE", (id) => {
  return axios
    .get(`api/:${id}`) //de donde sacariamos el id??
    .then((res) => res.data)
    .catch((err) => {
      console.log({ err });
    });
});

const cartReducer = createReducer([], {
  [getCourses.fulfilled]: (state, action) => action.payload, //pending????

});

export default cartReducer;
