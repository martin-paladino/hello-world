import React      from "react";
import { Link }   from "react-router-dom";
import Admin from "./Admin"
import { Button, Container, Row, Col} from "react-bootstrap";
import "../assets/styles/admin.css";


const AdminCourses = () => {

    return (
        <div>
            <Admin />
            <Container className="marginContent">
                <div className="subtitulo">
                    <Row>
                        <Col><h1> ADMINISTRAR CURSOS: </h1></Col>
                    </Row>
                </div>
                <Row>
                    <Col>
                        <Link to="/admin/courses/add">
                            <Button variant="warning" className="button" className="buttonSubsecciones"> Agregar un Curso </Button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/admin/courses/edit">
                            <Button variant="warning" className="button" className="buttonSubsecciones"> Editar un Curso </Button>
                        </Link>
                    </Col>

                </Row>
            </Container>
        </div>
    )
};


export default AdminCourses;