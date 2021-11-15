
import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./commons/Card";

import NavbarContainer from "./components/NavbarContainer"
import Grid from "./components/Grid";
import courses from "./utils/courses.json"


import Register from "./components/Register"
import Login from "./components/Login"
import Home from "./commons/Home"
import Cart from "./components/Cart"
import SingleCourse from "./components/SingleCourse";
import Footer from "./commons/Footer"
import Admin from "./components/Admin"
import AdminCourses from "./components/AdminCourses";
import AdminCoursesAdd from "./components/AdminCoursesAdd";
import AdminCoursesEdit from "./components/AdminCoursesEdit";


function App() {

const {course}=courses


  return (

    <div>
      <NavbarContainer/>
      <Routes>
      <Route exact path="/" element={<Home data={course}/>}/>
      <Route exact path="/course/:courseId" element={<SingleCourse />} />
      <Route exact path="/card" element={<Cards/>} />
      <Route exact path="/search" element={<Grid data={course}/>} />
      <Route exact path="/cart" element={<Cart/>}/>
      <Route exact path="/favourites" element={<Grid data={course}/>} />
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>} />
      <Route exact path="/admin" element={<Admin />} />
      <Route exact path="/admin/courses" element={<AdminCourses />} />
      <Route exact path="/admin/courses/add" element={<AdminCoursesAdd />} />
      <Route exact path="/admin/courses/edit" element={<AdminCoursesEdit />} />
      </Routes>
      <Footer/>
    </div>

  );


  }
export default App;
