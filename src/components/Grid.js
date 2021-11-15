import { Container, Col, Row } from "react-bootstrap";
import Card from "../commons/Card";
import { useSelector} from "react-redux";

const Grid = () => {
  
  const courses = useSelector(state => state.courses) //M. accedo a los cursos guardados en el estado global
  
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {courses.map(course => { 
        return (
          <Container key={course.id}>
            <Row>
              <Col sm={4}>
                <Card course={course} /> {/* M. envio el curso como prop a cada card */}
              </Col>
            </Row>
          </Container>
        )})}
    </div>
  )
};

export default Grid;
