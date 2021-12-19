import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategories } from "../state/categories";
import { Button, Container, Row, Col } from "react-bootstrap";
import NotFound from "../commons/NotFound";
import Admin from "./Admin"
import axios from "axios";
import "../assets/styles/admin.css";

const AdminCategories = () => {
    const [authorized, setAuthorized] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("/api/admin")
            .then(res => res.data)
            .then(users => {
                setAuthorized(true);
                dispatch(getAllCategories())
            })
            .catch(() => setAuthorized(false));
    }, []);

    if (authorized) {
        return (
            <div>
                <Admin />
                <Container className="marginContent">
                    <div className="subtitulo">
                        <Row>
                            <Col><h1> ADMINISTRAR CATEGORÍAS: </h1></Col>
                        </Row>
                    </div>
                    <Row>
                        <Col>
                            <Link to="/admin/categories/add">
                                <Button variant="warning" className="buttonSubsecciones"> Agregar Categoría </Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/admin/categories/edit">
                                <Button variant="warning" className="buttonSubsecciones"> Editar Categoría </Button>
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


export default AdminCategories;