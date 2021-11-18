import Card from "../commons/Card";
import { useDispatch, useSelector } from "react-redux";


// estilos
import "../assets/styles/general.css"
import "../assets/styles/grid.css"

const Grid = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const courses = useSelector(state => state.courses)
  const orders = useSelector(state => state.orders)
  
  return (
    <div id="contGrid">
      {courses.map(course => { 
        return (
                <div id="espacio">
                <div key={course.id}>
                <Card key={course.id} course={course} />
                </div>
                </div>
              
        )})}
    </div>
  )
};

export default Grid;
