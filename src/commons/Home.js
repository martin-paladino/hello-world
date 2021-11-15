import React, {useEffect} from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import Cards from "../commons/Card";
import {Link} from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import {getAllCourses} from "../state/courses"

function Home({ data }) {
  const courses = useSelector((state) => state.course)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCourses())
  },
  [])
  console.log("los cursoooos", courses)
  return (
    <div>
      <Carousel>
        {courses.map((course) => {
          return (

            <Carousel.Item>
              <Container >
                <Row>
                  <Col sm={4}>
              <Link to="/cards">
                    <Cards course={course} />
            </Link>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
            
          );
        })}
      </Carousel>
    </div>
  );
}

export default Home;



