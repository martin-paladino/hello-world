import React, {useEffect} from "react";
import { Container, Col, Row } from "react-bootstrap";
import Cards from "../commons/Card";
import { useSelector} from "react-redux";



const Grid = () => {
  console.log("a ver a ver a ver")
  //M. accedo a los cursos guardados en el estado global
  const courses = useSelector(state => state.course)
  
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {courses.map((course) => { //M. mappeo los cursos (ya no la data)
        return (
          <Container>
            <Row>
              <Col sm={4}>
                <Cards course={course} /> {/* M. envio el curso como prop a cada card */}
              </Col>
            </Row>
          </Container>
        );
      })}
      )
    </div>
  );
};

export default Grid;
