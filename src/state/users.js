import { createAction, createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setUsers = createAction("SET_USERS");

export const getAllUsers = createAsyncThunk("GET_ALL_USERS", () => {
    return axios
        .get("/api/admin")
        .then(res => res.data)
        .catch(err => console.log({ err }))
});

const usersReducer = createReducer({},
    {
        [setUsers]: (state, action) => action.payload,
        [getAllUsers.fulfilled]: (state, action) => action.payload,
    }
);

export default usersReducer;