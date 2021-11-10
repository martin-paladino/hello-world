import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer  from "./user";
import courseReducer from "./course"

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,   
    course: courseReducer
    
  },
});

export default store;
