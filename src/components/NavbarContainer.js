import { useDispatch, useSelector } from "react-redux";
import { getCoursesFromCategory } from "../state/courses"
import Navbar from "../commons/Navbar";
import {useNavigate} from "react-router-dom"


function NavbarContainer() {
  const dispatch = useDispatch();
  const category = useSelector(state => state.category)
  const navigate = useNavigate()


  const onChangeHandler = (e) => {
    dispatch(getCoursesFromCategory(e.target.value));
  }
  // funcion para mostrar cursos de una categoria
  const onSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(getCoursesFromCategory())
    navigate("/search")
  };

  return (
    <Navbar onSubmitHandler={onSubmitHandler} 
    onChangeHandler={onChangeHandler}
    />
  );
}

export default NavbarContainer;
