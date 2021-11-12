import React from "react";
import Navbar from "../commons/Navbar";
import { useState } from "react";
import { searchCourse } from "../state/course";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesFromId } from "../state/courses";

function NavbarContainer() {
  const dispatch = useDispatch();

  // capturo lo que escribe el user en search
  const onChangeHandler = (e) => {
    dispatch(getCoursesFromId(e.target.value));
  };
  // hago el pedido a axios para traer cosas de la api
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Navbar
      onChangeHandler={onChangeHandler}
      onSubmitHandler={onSubmitHandler}
    />
  );
}

export default NavbarContainer;
