import { useEffect } from "react";
import { Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom"
import { getCourse } from "../state/course";

import "../assets/styles/general.css";
import "../assets/styles/singleCourse.css";
import { Container, Col, Row, Accordion } from "react-bootstrap";


const SingleCourse = () => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course);
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getCourse(courseId))
  }, [])

  return (
    <div id="contMargin">
      <div className="container1">
        <Container>
          <Row>
            <Col>
              <h1 id="title"> {course.title} </h1>
              <p> ¿Qué vas a aprender? ¡Mirá este video! </p>

              <div>
                <iframe
                  src={course.purchased ? course.accessLink : course.videoPreview}
                  width="540"
                  height="310"
                />
              </div>
            </Col>
            <Col className="container2">
              <div className="card2">
                <label> Requisitos </label>
                <p> Acceso a una computadora con conexión a internet. </p>
                <label> Instructor </label>
                <p> {course.professor} </p>
                <label> Duración </label>
                <p> {course.duration} horas </p>
                <label> Precio </label>
                <p> US$ {course.price} </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row className="card3">
            <label> Comentarios </label>
              <p id="comentario"className="card4"> "{course.review}" </p>
              <p id="comentario"className="card4"> "El hecho de que tomar cursos en mi propio ritmo ha sido una experiencia espectacular. Puedo aprender cuando quiero y puedo." </p>
              <p id="comentario"className="card4"> "¡Haber descubierto Hello World me salvó la vida! Los profes son muy buenos explicando y puedo mirar y pausar las clases cuantas veces quiera. ¡Curso super recomendable!" </p>
          </Row>
            
          <Row>
          <label id="FAQ"> Preguntas Frecuentes </label>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header> ¿Puedo inscribirme en un solo curso? </Accordion.Header>
                <Accordion.Body>
                ¡Sí! Para comenzar, haga clic en la tarjeta del curso que le interese e inscríbase. Puede inscribirse y completar el curso para obtener un certificado para compartir, o puede auditarlo para ver los materiales del curso de forma gratuita. Cuando se suscribe a un curso que forma parte de una especialización, se suscribe automáticamente a la especialización completa. Visite su panel de aprendizaje para realizar un seguimiento de su progreso.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header> ¿Hay ayuda financiera disponible? </Accordion.Header>
                <Accordion.Body>
                Sí, Hello-World brinda ayuda financiera a los estudiantes que no pueden pagar la tarifa. Solicítelo haciendo clic en el enlace Ayuda financiera debajo del botón "Inscribirse" a la izquierda. Se le pedirá que complete una solicitud y se le notificará si es aprobado. Deberá completar este paso para cada curso de la especialización.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header> ¿Este curso es realmente 100% online? ¿Necesito asistir a clases en persona? </Accordion.Header>
                <Accordion.Body>
                Este curso es completamente en línea, por lo que no es necesario presentarse a un aula en persona. Puede acceder a sus conferencias, lecturas y asignaciones en cualquier momento y en cualquier lugar a través de la web o su dispositivo móvil.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header> ¿Puedo realizar el curso gratis?  </Accordion.Header>
                <Accordion.Body>
                Cuando se inscribe en el curso, obtiene acceso a todos los cursos de la especialización y obtiene un certificado cuando completa el trabajo. Si solo desea leer y ver el contenido del curso, puede auditar el curso de forma gratuita. Si no puede pagar la tarifa, puede solicitar ayuda financiera.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </Container>

        <Container id="ultContainer">
          <Button onClick={() => navigate(-2)}> Volver</Button>
        </Container>
      </div>
      {/*       <h2>{course.professor}</h2>
      <p>{course.description}</p>
      <h2>{course.rating}</h2>
      <h3>US${course.price}</h3>
      <Button onClick={() =>navigate(-2)}> Volver</Button>
      <p>{course.review}</p> */}
    </div>
  );
};

export default SingleCourse;
