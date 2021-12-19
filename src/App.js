import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Card from "./commons/Card";
import NavbarContainer from "./components/NavbarContainer";
import Grid from "./components/Grid";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./commons/Home";
import Cart from "./components/Cart";
import SingleCourse from "./components/SingleCourse";
import Me from "./components/Me";
import Orders from "./commons/Orders";
import Footer from "./commons/Footer";
import { meRequest } from "./state/user";
import Checkout from "./commons/Checkout";
import Admin from "./components/Admin"
import AdminCourses from "./components/AdminCourses";
import AdminCoursesAdd from "./components/AdminCoursesAdd";
import AdminCoursesEdit from "./components/AdminCoursesEdit";
import AdminUsers from "./components/AdminUsers";
import AdminCategories    from "./components/AdminCategories";
import AdminCategoriesAdd from "./components/AdminCategoriesAdd";
import AdminCategoriesEdit from "./components/AdminCategoriesEdit";
import NotFound from "./commons/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/app.css"

function App() {
const dispatch=useDispatch()  
useEffect(()=>  {
dispatch(meRequest())
}, [])

  return (
    <div >
      <div className="margin_bottom">
      <NavbarContainer />
      <Routes>
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/course/:courseId" element={<SingleCourse />} />
        <Route exact path="/card" element={<Card />} />
        <Route exact path="/search" element={<Grid />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/favourites" element={<Grid />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/me" element={<Me />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/courses/:category" element={<Grid/>}/>
        <Route exact path="/admin/courses" element={<AdminCourses />} />
        <Route exact path="/admin/courses/add" element={<AdminCoursesAdd />} />
        <Route exact path="/admin/courses/edit" element={<AdminCoursesEdit />} />
        <Route exact path="/admin/users" element={<AdminUsers />} />
        <Route exact path="/admin/categories" element={<AdminCategories />} />
        <Route exact path="/admin/categories/add" element={<AdminCategoriesAdd />} />
        <Route exact path="/admin/categories/edit" element={<AdminCategoriesEdit />} />
        <Route exact path="/orders" element={<Orders/>}/>
        <Route exact path="*" element={<NotFound/>}/>
      </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;
