import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer  from "./user";
import cartReducer from "./cart"
import coursesReducer from "./courses";
import courseReducer from "./course";
import categoryReducer from "./category";
import ordersReducer from "./orders";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    course: courseReducer,   
    courses: coursesReducer,
    cart: cartReducer,
    category: categoryReducer,
    orders: ordersReducer
  },
});

export default store;
