
import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./commons/Card";

import NavbarContainer from "./components/NavbarContainer"
import Grid from "./components/Grid";
import courses from "./utils/courses.json"


import Register from "./components/Register"
import Login from "./components/Login"


function App() {

const {course}=courses


  return (

    <div>
      <NavbarContainer/>

      <Routes>
      <Route exact path="/card" element={<Cards/>} />
      <Route exact path="/search" element={<Grid data={course}/>} />
      <Route exact path="/" element={<Grid data={course}/>} />
      <Route exact path="/favourites" element={<Grid data={course}/>} />
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>} />
      
        
      </Routes>
    </div>

  );


  }
export default App;
