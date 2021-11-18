import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer  from "./user";
import usersReducer  from "./users";
import cartReducer from "./cart"
import coursesReducer from "./courses";
import courseReducer from "./course";
import categoryReducer from "./category";
import categoriesReducer from "./categories";
import ordersReducer from "./orders";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    users: usersReducer,
    course: courseReducer,   
    courses: coursesReducer,
    cart: cartReducer,
    category: categoryReducer,
    categories: categoriesReducer,
    orders: ordersReducer
  },
});

export default store;
