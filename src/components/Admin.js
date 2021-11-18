import React      from "react";
import { useEffect } from "react";
import { useDispatch }         from "react-redux";
import { Link }   from "react-router-dom";
import { getAllCourses }       from "../state/courses";
import { getAllUsers }       from "../state/users";

import { Button, Container, Row, Col} from "react-bootstrap";
import "../assets/styles/admin.css";


const Admin = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
  }, []);


    return (
        <div >
            <Container className="marginContent">
                <div className="centrarTitulo">
                    <Row>
                        <Col><h2> PERFIL DEL ADMIN </h2></Col>
                    </Row>
                </div>
                <Row>
                    <Col>
                        <Link to="/admin/users">
                            <Button variant="dark" className="button"> Administrar Usuarios </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/admin/courses">
                            <Button variant="dark" className="button"> Administrar Cursos </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/admin/categories">
                            <Button variant="dark" className="button"> Administrar Categorías </Button>
                        </Link>
                    </Col>
                   
                </Row>
            </Container>
        </div>
    )
};


export default Admin;