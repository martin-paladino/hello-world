import { useEffect } from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import Card from "../commons/Card";
import { useSelector, useDispatch } from "react-redux";
import { getAllCourses } from "../state/courses";

function Home() {
  const courses = useSelector(state => state.courses);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllCourses()), []);
 
  return (
    <div>
      {/* Se podria agregar algun mensaje de bienvienida con alguna imagen antes.... o carrousel izq, registrarse der */}
      
      <Carousel>
        {courses.map(course => {
          return (
            <Carousel.Item key={course.id}>
              <Container>
                <Row>
                  <Col sm={4}>
                      <Card course={course} />
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  );
}

export default Home;
