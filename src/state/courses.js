import {
  createAction,
  createReducer,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setCourses = createAction("SET_COURSES");

export const getAllCourses = createAsyncThunk("GET_ALL_COURSES", () => {
  return axios
    .get("/api/courses/getall")
    .then(res => res.data)
    .then(courses => {
      const promisesArr = []
      for (let course of courses) {
        promisesArr.push(axios.get(`/api/courses/checkifpurchased/${course.id}`).then(res => res.data))
      }
      return { courses, booleanArrPromise: Promise.all(promisesArr) }
    })
    .then(({ courses, booleanArrPromise }) =>
      booleanArrPromise
        .then(booleanArr => {
          console.log("BOOLEANARR", booleanArr, "COURSES", courses)
          const finalCourses = courses.map((course, i) => {
            course.purchased = booleanArr[i]
            return course
          })
          console.log(finalCourses)
          return finalCourses
        })
    )
    .catch(err => console.log({ err }))
});

export const getCoursesFromCategory = createAsyncThunk("GET_COURSES_FROM_CATEGORY", (category) => {
  return axios
    .get(`/api/courses/category/${category}`)
    .then(res => res.data || [])
    .then(courses => {
      const promisesArr = []
      for (let course of courses) {
        promisesArr.push(axios.get(`/api/courses/checkifpurchased/${course.id}`).then(res => res.data))
      }
      return { courses, booleanArrPromise: Promise.all(promisesArr) }
    })
    .then(({ courses, booleanArrPromise }) =>
      booleanArrPromise
        .then(booleanArr => {
          console.log("BOOLEANARR", booleanArr, "COURSES", courses)
          const finalCourses = courses.map((course, i) => {
            course.purchased = booleanArr[i]
            return course
          })
          console.log(finalCourses)
          return finalCourses
        })
    )
    .catch(err => console.log({ err }))
  })

export const getCoursesFromOrders = createAsyncThunk("COURSES_FROM_ORDERS", (userId) => {
  return axios
  .get(`/api/users/getcoursesfromorders/${userId}`)
  .then(res => res.data)
  .catch(err => console.log({ err }))
})




  export const getCoursesFromTitle = createAsyncThunk("GET_COURSES_FROM_TITLE", (title) => {
    return axios
      .get(`/api/courses/${title}`)
      .then(res => res.data || [])
      .catch(err => console.log({ err }))
  })

  



  const coursesReducer = createReducer([], {
    [setCourses]: (state, action) => action.payload,
    [getAllCourses.fulfilled]: (state, action) => action.payload,
    [getCoursesFromCategory.fulfilled]: (state, action) => action.payload,
    [getCoursesFromOrders.fulfilled]: (state, action) => action.payload,
    [getCoursesFromTitle.fulfilled]: (state, action) => action.payload
  });




  export default coursesReducer;








/* /agrego al carrito y envio el curso seleccionado a la db, la db me devuelve todos los cursos de ese ID
  export const addToCart = createAsyncThunk("COURSE", (course, id) =>{
    return axios
    .post(`api/:${id}`, (course)) //de donde sacariamos el id??
    .then((res) => res.data)
    .catch((err) => {
      console.log({ err });
    });
  }) */
