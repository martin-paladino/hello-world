import React, { useState } from "react";
import { useEffect }       from "react";
import { Link }            from "react-router-dom";
import Admin               from "./Admin"
import axios               from "axios";
import NotFound            from "../commons/NotFound";
import { Button, Container, Row, Col} from "react-bootstrap";
import "../assets/styles/admin.css";


const AdminCourses = () => {
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        axios.get("/api/admin")
        .then((res) => res.data)
        .then(() => {
            setAuthorized(true);
        })
        .catch((error) => {
            setAuthorized(false);
        });
    }, []);

    if(authorized) {
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
    }
    else {
        return (
            <NotFound />
        ) 
    }
};


export default AdminCourses;