import { useDispatch, useSelector } from "react-redux";
import { getCoursesFromCategory } from "../state/courses"
import Navbar from "../commons/Navbar";
import {useNavigate} from "react-router-dom"

function NavbarContainer() {
  const dispatch = useDispatch();
  const category = useSelector(state => state.category)
  const navigate = useNavigate()

  // funcion para mostrar cursos de una categoria
  const onSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(getCoursesFromCategory(category))
    navigate("/search")
  };

  return (
    <Navbar onSubmitHandler={onSubmitHandler} />
  );
}

export default NavbarContainer;
