import { Container, Col, Row } from "react-bootstrap";
import Card from "../commons/Card";
import { useSelector} from "react-redux";

// estilos

import "../assets/styles/general.css"
import "../assets/styles/grid.css"

const Grid = () => {
  
  const courses = useSelector(state => state.courses) //M. accedo a los cursos guardados en el estado global
  

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
