import React                  from "react";
import { useState }           from "react";
import { Button, Form }       from "react-bootstrap";
import { Container, Row, Col} from "react-bootstrap";
import { useSelector }        from "react-redux";
import "../assets/styles/admin.css";
import "../assets/styles/adminCoursesAdd.css";



const AdminCoursesEdit = () => {
    const courses     = useSelector((state) => state.course);

    const [id, setId] = useState();

    const editToggle = (id) => {
         setId(id);
         document.getElementById('EditProduct').style.display = document.getElementById('EditProduct').style.display === 'none' ? 'block' : 'none'
    }
    console.log("CURSOSSS", courses)
    return (
        <div>
            <Container className="marginContent">
                <div className="centrarTitulo">
                    <Row>
                        <Col><h4> EDITAR CURSO </h4></Col>
                    </Row>
                </div>
                <Row>
                    <Col>
                        {courses.map(course => {
                            return (
                                <button onClick={() => editToggle(course.id)} type='button'>{course.title}</button>
                            )
                        })}

                        <div style={{display: 'none'}} id='EditProduct'>
                            {/* <EditProduct id={id}/> */}
                            <h1> HOLA!!! </h1>
                        </div>
                    </Col>

                    <Col>
                        <Form className="centrarForm">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control className="input" type="text" placeholder="Título del Curso" />
                                <Form.Control className="input" as="textarea" rows={3} placeholder="Descripción" />
                                <Form.Control className="input" type="text" placeholder="Profesor a cargo" />
                                <Form.Control className="input" type="text" placeholder="Imagen del curso" />
                                <Form.Control className="input" as="textarea" rows={3} placeholder="Reviews" />
                                <Form.Control className="input" type="text" placeholder="Rating" />
                                <Form.Control className="input" type="text" placeholder="Precio" />
                                <Form.Control className="input" type="text" placeholder="Duración" />
                                <Form.Control className="input" type="text" placeholder="Link de acceso" />
                                <Form.Control className="input" type="text" placeholder="Preview del video" />
                            </Form.Group>
                    
                            <Button variant="primary" type="submit"> Editar </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};


export default AdminCoursesEdit;