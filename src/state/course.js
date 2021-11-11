import {
    createAction,
    createReducer,
    createAsyncThunk,
  } from "@reduxjs/toolkit";
  import axios from "axios";
  
  export const setCourse = createAction("SET_COURSE");
  
  // al dar click en boton busca el curso // seria mi onSubmit  {searchCourse(course)} //
  export const searchCourse = createAsyncThunk("COURSE", (course) => {
    return axios
      .get(`api/course/${course}`)
      .then((res) => res.data)
      .catch((err) => {
        console.log({ err });
      });
      
  });


//agrego al carrito y envio el curso seleccionado a la db, la db me devuelve todos los cursos de ese ID
  export const addToCart = createAsyncThunk("COURSE", (course, id) =>{
    return axios
    .post(`api/:${id}`, (course)) //de donde sacariamos el id??
    .then((res) => res.data)
    .catch((err) => {
      console.log({ err });
    });
  })
  
  const courseReducer = createReducer([], {
    [searchCourse.fulfilled]: (state, action) => action.payload,
   
    [addToCart.fulfilled]: (state, action) => action.payload,
  });
  
  export default courseReducer;
  