import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setCart = createAction("SET_CART");

export const getCoursesFromUserCart = createAsyncThunk("GET_COURSES_FUSER_CART", (_, thunkAPI) => {
  const { user } = thunkAPI.getState()
  return axios
    .get(`/api/cart/${user.id}/courses`)
    .then((res) => res.data)
    .catch((err) => {
      console.log({ err });
    });
});

export const addCourseToCart = createAsyncThunk(
  "ADD_COURSE_TO_CART",
  (courseId, thunkAPI) => {
    const { user } = thunkAPI.getState()
    return axios
      .post(`/api/cart/addtocart/${user.id}/${courseId}`)
      .then((res) => res.data) //aca esta el prob, transforma arr en obj
      .catch((err) => {
        console.log({ err });
      });
  }
);

export const addCoursesToCart = createAsyncThunk("ADD_COURSES_TO_CART", (courses, thunkAPI) => {
  const { user } = thunkAPI.getState()
  courses = courses.map(course => {
    delete course.purchased
    return course
  })
  return axios
  .post(`/api/cart/addcourses/${user.id}`, courses)
  .then(res => res.data) 
  .catch((err) => {
    console.log({ err });
  });
})

export const deleteCourseFromCart = createAsyncThunk(
  "DELETE_COURSE_FROM_CART",
  (courseId, thunkAPI) => {
    const { user } = thunkAPI.getState()
    return axios
      .delete(`/api/cart/${user.id}/${courseId}`)
      .then(() => axios.get(`/api/cart/${user.id}/courses`))
      .then(res => res.data)
      .catch((err) => {
        console.log({ err });
      })
  }
);

export const deleteCoursesFromCart = createAsyncThunk(
  "DELETE_COURSES_FROM_CART",
  ( courses,thunkAPI) => {
    const { user } = thunkAPI.getState()
    console.log("UUUUUUUUUUSER!", user)
    return axios
      .delete(`/api/cart/${user.id}`, courses)
      .then(() => axios.get(`/api/cart/${user.id}/courses`))
      .then((res) => res.data)

      .catch((err) => {
        console.log({ err });
      });
  }
);

const cartReducer = createReducer([], {
  [getCoursesFromUserCart.fulfilled]: (state, action) => action.payload,
  [deleteCourseFromCart.fulfilled]: (state, action) => action.payload,
  [addCourseToCart.fulfilled]: (state, action) => action.payload,
  [setCart]: (state, action) => action.payload,
  [addCoursesToCart.fulfilled]: (state, action) => action.payload,
  [deleteCoursesFromCart.fulfilled]: (state, action) => action.payload,
});

export default cartReducer;
