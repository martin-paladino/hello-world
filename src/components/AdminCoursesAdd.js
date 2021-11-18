import React from "react";
import { Button, Form } from "react-bootstrap";
import { Container, Row, Col} from "react-bootstrap";
import axios from "axios";
import Admin from "./Admin"
import useInputStr from "../hooks/useInputStr";
import useInputNum from "../hooks/useInputNum";
import { useNavigate } from "react-router-dom"

import "../assets/styles/admin.css";
import "../assets/styles/adminCoursesAdd.css";


const AdminCoursesAdd = () => {

    const title        = useInputStr();
    const description  = useInputStr();
    const professor    = useInputStr();
    const image        = useInputStr();
    const review       = useInputStr();
    const price        = useInputNum();
    const duration     = useInputNum();
    const accessLink   = useInputStr();
    const videoPreview = useInputStr();

    const navigate = useNavigate();

    function alertMsg(msg){
        document.getElementById('msgBody').style.visibility="visible";
        document.getElementById('msgText').innerHTML=msg;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`/api/courses/add`, {
            title: title.value,
            description: description.value,
            professor: professor.value,
            image: image.value,
            review: review.value,
            price: price.value,
            duration: duration.value,
            accessLink: accessLink.value,
            videoPreview: videoPreview.value,
        })
        .then(res => res.data)
        .then( () => alertMsg("Curso agregado."))
        .then( () => navigate("/admin/courses"))
        .catch(err => console.log(err))
    };


    return (
        <div>
            <Admin />
            <Container className="marginContent">
                <div className="subtitulo">
                    <Row>
                        <Col><h1> AGREGAR CURSO: </h1></Col>
                    </Row>
                </div>
                <Row>
                    <Col>
                        <Form className="centrarForm" onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control 
                                    {...title}
                                    className="input" 
                                    type="text" 
                                    placeholder="Título del Curso"
                                    required
                                />
                                
                                <Form.Control 
                                    {...description} 
                                    className="input" 
                                    as="textarea" 
                                    rows={3} 
                                    placeholder="Descripción" 
                                    required
                                />
                                
                                <Form.Control 
                                    {...professor} 
                                    className="input" 
                                    type="text" 
                                    placeholder="Profesor a cargo" 
                                    required
                                />
                                
                                <Form.Control 
                                    {...image} 
                                    className="input" 
                                    type="text" 
                                    placeholder="Imagen del curso" 
                                    required
                                />
                                
                                <Form.Control 
                                    {...review} 
                                    className="input" 
                                    as="textarea" 
                                    rows={3} 
                                    placeholder="Reviews"
                                    required
                                />
                                
                                <Form.Control 
                                    {...price} 
                                    className="input" 
                                    type="text" 
                                    placeholder="Precio"
                                    required
                                />
                                
                                <Form.Control 
                                    {...duration} 
                                    className="input" 
                                    type="text" 
                                    placeholder="Duración"
                                    required
                                />
                                
                                <Form.Control 
                                    {...accessLink} 
                                    className="input" 
                                    type="text" 
                                    placeholder="Link de acceso"
                                    required
                                />
                                
                                <Form.Control 
                                    {...videoPreview} 
                                    className="input" 
                                    type="text" 
                                    placeholder="Preview del video"
                                    required
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


export default AdminCoursesAdd;