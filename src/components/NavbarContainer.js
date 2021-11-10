import React from "react";
import Navbar from "../commons/Navbar";
import { useState } from "react";
import { searchCourse } from "../state/course";
import { useDispatch, useSelector } from "react-redux";

function NavbarContainer() {
  const dispatch = useDispatch();

  // capturo lo que escribe el user en search
  const onChangeHandler = (e) => {
    dispatch(searchCourse(e.target.value));
  };
  // hago el pedido a axios para traer cosas de la api
  const onSubmitHandler = (e) => {
    e.preventDefault();
      searchCourse();
  };
  return (
    <Navbar
      onChangeHandler={onChangeHandler}
      onSubmitHandler={onSubmitHandler}
    />
  );
}

export default NavbarContainer;
