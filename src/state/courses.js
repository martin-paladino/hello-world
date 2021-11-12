import {
    createAction,
    createReducer,
    createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setCourses = createAction("SET_COURSES");

export const getCoursesFromTitle = createAsyncThunk("COURSE", (courseTitle) => {
    return axios
      .get(`api/courses/${courseTitle}`)
      .then((res) => res.data) //reemplaza el estado
      .catch((err) => {
        console.log({ err });
      });  
  });

  export const getAllCourses = createAsyncThunk("COURSE", () => {
    return axios
      .get(`api/courses/getall`)
      .then((res) => res.data) //reemplaza el estado
      .catch((err) => {
        console.log({ err });
      });  
  });

const coursesReducer = createReducer([], {
    [setCourses]: (state, action) => action.payload,
    [getCoursesFromTitle.fullfilled]: (state, action) => action.payload,
    [getAllCourses.fullfilled]: (state, action) => action.payload
});
  
export default coursesReducer;