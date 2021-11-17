import {
    createAction,
    createReducer,
    createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const setOrders = createAction("SET_ORDERS")

const ordersReducer = createReducer([], {
    [setOrders]: (state, action) => action.payload
})

export default ordersReducer

