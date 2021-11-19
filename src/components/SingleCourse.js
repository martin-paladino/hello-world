import { useEffect } from "react";
import { Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCourse } from "../state/course";
import "../assets/styles/general.css";
import "../assets/styles/singleCourse.css";
import { Container, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SingleCourse = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCourse(courseId));
  }, []);

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
      <Button onClick={() => navigate(-2)}> Volver</Button>

      {/*       <h2>{course.professor}</h2>
      <p>{course.description}</p>
      <p>{course.review}</p> */}
    </div>
  );
};

export default SingleCourse;
