import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./commons/Card";

import NavbarContainer from "./components/NavbarContainer"

function App() {
  return (
    <div>
      <NavbarContainer/>

      <Routes>
        <Route exact path="/card" element={<Cards/>} />
          
        
      </Routes>
    </div>
  );
}

export default App;
