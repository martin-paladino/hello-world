import React, { useState } from "react";
import { useEffect }       from "react";
import { Link }            from "react-router-dom";
import { useDispatch }     from "react-redux";
import axios               from "axios";
import { getAllUsers }     from "../state/users";
import NotFound            from "../commons/NotFound";
import { Button, Container, Row, Col} from "react-bootstrap";
import "../assets/styles/admin.css";


const Admin = () => {
    const [authorized, setAuthorized] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("/api/admin")
        .then((res) => res.data)
        .then(() => {
            setAuthorized(true);
            dispatch(getAllUsers())
        })
        .catch((error) => {
            setAuthorized(false);
        });
    }, []);


    if(authorized) {
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
    }
    else {
        return (
            <NotFound />
        )
    }
};


export default Admin;