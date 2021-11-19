import { useEffect } from "react";
import { useParams } from "react-router";
import { getCourse } from "../state/course";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/general.css";
import "../assets/styles/singleCourse.css";
import { Container, Col, Row } from "react-bootstrap";

const SingleCourse = () => {
  const { courseId } = useParams()
  const dispatch = useDispatch()
  const course = useSelector((state) => state.course);
  const user = useSelector((state) => state.user)
  
  useEffect(() => {
    dispatch(getCourse(courseId))

  }, [])

  return (
    <div id="contMargin">
      <Container>
        <Row>
          <Col>
            <h1 id="title"> {course.title} </h1>
            <p> ¿Qué vas a aprender? Mirá este video! </p>
          
            <div>
              <iframe
                src={course.purchased ? course.accessLink : course.videoPreview}
                width="540"
                height="310"
              />
            </div>
          </Col>
        </Row>
        
      </Container>
      <Container>
        <Row>
          <Col>
            <h2> Requisitos </h2>
            <p> Acceso a una computadora con conexión a internet. </p>
          </Col>
        </Row>
      </Container>

{/*       <h2>{course.professor}</h2>
      <p>{course.description}</p>
      <p>{course.review}</p> */}
    
    </div>
  )
};

export default SingleCourse;
