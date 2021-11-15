import React from "react";
import { Button, Form } from "react-bootstrap";
import { Container, Row, Col} from "react-bootstrap";
import axios from "axios";
import useInputStr from "../hooks/useInputStr";
import useInputNum from "../hooks/useInputNum";
import "../assets/styles/admin.css";
import "../assets/styles/adminCoursesAdd.css";


const AdminCoursesAdd = () => {
/*     const [form, setForm] = React.useState({
        title: "",
        description: "",
        professor: "",
        image: "",
        review: "",
        rating: 0,
        price: 0,
        duration: 0,
        accessLink:"",
        videoPreview: ""
    }); */

    const title        = useInputStr();
    const description  = useInputStr();
    const professor    = useInputStr();
    const image        = useInputStr();
    const review       = useInputStr();
    const rating       = useInputNum();
    const price        = useInputNum();
    const duration     = useInputNum();
    const accessLink   = useInputStr();
    const videoPreview = useInputStr();


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`/api/courses/add`, {
            title: title.value,
            description: description.value,
            professor: professor.value,
            image: image.value,
            review: review.value,
            rating: rating.value,
            price: price.value,
            duration: duration.value,
            accessLink: accessLink.value,
            videoPreview: videoPreview.value,
        })
        .then(res => res.data)
        .then( () => alert("Curso agregado."))
        .catch(err => console.log(err))
    };

/*     const handleInput = (e) => {
        setForm({
          ...form,
          [e.target.localName]: e.target.value,
        });
      }; */


    return (
        <div>
            <Container className="marginContent">
                <div className="centrarTitulo">
                    <Row>
                        <Col><h4> AGREGAR CURSO </h4></Col>
                    </Row>
                </div>
                <Row>
                    <Col>
                        <Form className="centrarForm" onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control {...title} className="input" type="text" placeholder="Título del Curso" />
                                <Form.Control {...description} className="input" as="textarea" rows={3} placeholder="Descripción" />
                                <Form.Control {...professor} className="input" type="text" placeholder="Profesor a cargo" />
                                <Form.Control {...image} className="input" type="text" placeholder="Imagen del curso" />
                                <Form.Control {...review} className="input" as="textarea" rows={3} placeholder="Reviews" />
                                <Form.Control {...rating} className="input" type="text" placeholder="Rating" />
                                <Form.Control {...price} className="input" type="text" placeholder="Precio" />
                                <Form.Control {...duration} className="input" type="text" placeholder="Duración" />
                                <Form.Control {...accessLink} className="input" type="text" placeholder="Link de acceso" />
                                <Form.Control {...videoPreview} className="input" type="text" placeholder="Preview del video" />
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