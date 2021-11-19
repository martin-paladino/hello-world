import { useDispatch, useSelector } from "react-redux";
import { getCoursesFromCategory, getCoursesFromTitle } from "../state/courses";
import Navbar from "../commons/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function NavbarContainer() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const navigate = useNavigate();
  const [targetValue, setTargetValue] = useState("")
  const [inputSearch, setInputSearch] = useState("");

  const onChangeHandler = (e) => {
    setInputSearch(e.target.value)
    setTargetValue(e.target.value)
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(getCoursesFromCategory(targetValue.trim()))
    if (inputSearch.trim()) {
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
