import React      from "react";
import { Link }   from "react-router-dom";
import { Button, Container, Row, Col} from "react-bootstrap";
import "../assets/styles/admin.css";


const AdminCourses = () => {

    return (
        <div>
            <Container className="marginContent">
                <div className="centrarTitulo">
                    <Row>
                        <Col><h4> ADMINISTRAR CURSOS </h4></Col>
                    </Row>
                </div>
                <Row>
                    <Col></Col>
      
                    <Col>
                        <Link to="/admin/courses/add">
                            <Button variant="dark" className="button"> Agregar un Curso </Button>
                        </Link>
                    </Col>

                    <Col></Col>

                    <Col>
                        <Link to="/admin/courses/edit">
                            <Button variant="dark" className="button"> Editar un Curso </Button>
                        </Link>
                    </Col>

                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
};


export default AdminCourses;