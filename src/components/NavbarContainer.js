import { useDispatch, useSelector } from "react-redux";
import { getCoursesFromCategory, getCoursesFromTitle } from "../state/courses";
import Navbar from "../commons/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function NavbarContainer() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const navigate = useNavigate();

  const [inputSearch, setInputSearch] = useState("");

  const onChangeHandler = (e) => {
    setInputSearch(e.target.value)
    dispatch(getCoursesFromCategory(e.target.value));
    //dispatch(getCoursesFromTitle(e.target.value));
  };
  // funcion para mostrar cursos de una categoria
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(inputSearch.trim()){
      setInputSearch("");
      navigate("/search")

    } 
  };

  return (
    <Navbar
    inputSearch={inputSearch}
      onSubmitHandler={(e) => onSubmitHandler(e)}
      onChangeHandler={onChangeHandler}
    />
  );
}

export default NavbarContainer;
