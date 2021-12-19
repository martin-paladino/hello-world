import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const setCourse = createAction("SET_COURSE")

export const getCourse = createAsyncThunk("GET_COURSE", id => {
    return axios
        .get(`/api/courses/${id}`)
        .then(res => res.data)
        .then(course => {
            const isPurchasedPromise = axios.get(`/api/courses/checkifpurchased/${course.id}`)
                .then(res => res.data)
            return { course, isPurchasedPromise }
        })
        .then(({ course, isPurchasedPromise }) =>
            isPurchasedPromise
                .then(isPurchased => {
                    course.purchased = isPurchased
                    return course
                })
                .catch(err => console.log({ err })))
})

const courseReducer = createReducer({}, {
    [setCourse]: (state, action) => action.payload,
    [getCourse.fulfilled]: (state, action) => action.payload
})

export default courseReducer