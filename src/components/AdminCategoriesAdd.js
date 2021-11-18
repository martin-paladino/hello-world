import React       from "react";
import Admin       from "./Admin"
import axios       from "axios";
import useInputStr from "../hooks/useInputStr";
import { useNavigate }        from "react-router-dom"
import { Button, Form }       from "react-bootstrap";
import { Container, Row, Col} from "react-bootstrap";
import "../assets/styles/admin.css";
import "../assets/styles/adminCoursesAdd.css";


const AdminCategoriesAdd = () => {
    const name     = useInputStr();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`/api/categories/add`, {
            name: name.value,
        })
        .then(res => res.data)
        .then( () => alert("Categoría agregado."))
        .then( () => navigate("/admin/categories"))
        .catch(err => console.log(err))
    };

    return (
        <div>
            <Admin />
            <Container className="marginContent">
                <div className="subtitulo">
                    <Row>
                        <Col><h1> AGREGAR CATEGORÍA: </h1></Col>
                    </Row>
                </div>
                <Row>
                    <Col>
                        <Form className="centrarForm" onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control
                                    {...name}
                                    className="input" 
                                    type="text" 
                                    placeholder="Nueva Categoría..." 
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit"> Agregar </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};


export default AdminCategoriesAdd;