import Card from "../commons/Card";
import { useDispatch, useSelector } from "react-redux";
import { Button , Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



// estilos
import "../assets/styles/general.css"
import "../assets/styles/grid.css"

const Grid = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const courses = useSelector(state => state.courses)
  const orders = useSelector(state => state.orders)
  const navigate = useNavigate()
  return (
    <div>

    <div id="contGrid">
      {courses == false ? <h1>No se encontraron resultados!</h1> : courses.map(course =>  
         (
           <div id="espacio">
                <div key={course.id}>
                <Card key={course.id} course={course} />
                </div>
                </div>
              
              ))}
    </div>
              <Button className="boton" onClick={() =>navigate(-1)}> Volver</Button>
              </div>
  )
};

export default Grid;
