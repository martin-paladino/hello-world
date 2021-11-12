import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer  from "./user";
import courseReducer from "./course"
import cartReducer from "./cart"
import coursesReducer from "./courses";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,   
    course: courseReducer,
    courses: coursesReducer,
    cart: cartReducer
  },
});

export default store;
