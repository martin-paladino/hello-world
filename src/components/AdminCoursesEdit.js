import React                   from "react";
import { useState, useEffect } from "react";
import { Button, Form }        from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector }         from "react-redux";
import { useDispatch }         from "react-redux";
import { setCourses }          from "../state/courses";
import axios                   from "axios";          
import { getAllCourses }       from "../state/courses";
import "../assets/styles/admin.css";
import "../assets/styles/adminCoursesAdd.css";



const AdminCoursesEdit = () => {
    const courses  = useSelector((state) => state.courses);

    const dispatch = useDispatch();
    
    const [id, setId]     = useState();
    const [form, setForm] = useState({
        title: "",
        description:"",
        professor:"",
        image:"",
        review:"",
        rating:"",
        price:"",
        duration:"",
        accessLink:"",
        videoPreview:"",
    })

    console.log("COURSES", courses)

    const editToggle = (idCourse) => {
        console.log("ESTADO Id PRE", id)
        console.log("ID DEL BOTON", idCourse)
        setId(idCourse);
        console.log("ESTADO Id POST", id)
        console.log("SETFORM", courses[id])
        courses.map(course => {
            if(course.id === idCourse) {
                setForm({
                    ...form,
        
                    title: course.title,
                    description: course.description,
                    professor: course.professor,
                    image: course.image,
                    review: course.review,
                    rating: course.rating,
                    price: course.price,
                    duration: course.duration,
                    accessLink: course.accessLink,
                    videoPreview: course.videoPreview,
                });
            }
        })
        
        
        document.getElementById('EditProduct').style.display = document.getElementById('EditProduct').style.display === 'none' ? 'block' : 'none'
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/api/courses/${id}`, form)
        .then(res => res.data)
        .then(() => {
            dispatch(setCourses())
            dispatch(getAllCourses())
        })
        .then( () => alert("Curso modificado."))
        .catch(err => console.log(err))
    };

    useEffect(() => {
          dispatch(getAllCourses())
    }, []);

    const handleDelete = () => {
        axios.delete(`/api/courses/${id}`)
        .then( () => alert("Curso eliminado."))
        .then(() => {
            dispatch(getAllCourses())
        })
    };

    const handleInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
          });
    };


    return (
        <div>
            <Container className="marginContent">
                <div className="centrarTitulo">
                    <Row>
                        
                        <Col>
                            <h4> EDITAR CURSO </h4>
                        </Col>
                    </Row>
                </div>

                <Row>
                    <Col>
                        {courses.map(course => {
                            return (
                                <Row>
                                    <Col>
                                        <Button variant="outline-dark" onClick={() => editToggle(course.id)} type='button'>
                                            {course.title}
                                        </Button>
                                    </Col>
                                </Row>
                            )
                        })}
                    </Col>

                    <Col>
                        <div style={{display: 'none'}} id='EditProduct'>
                        
                            <Form className="centrarForm" onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control
                                        value={form.title}
                                        type="text"
                                        placeholder="Título del Curso"
                                        className="input"
                                        name="title"
                                        onChange={handleInput}
                                    />
                                    
                                    <Form.Control
                                        value={form.description}
                                        as="textarea"
                                        placeholder="Descripción"
                                        className="input"
                                        rows={3}
                                        name="description"
                                        onChange={handleInput}
                                    />
                                    
                                    <Form.Control 
                                        value={form.professor}
                                        className="input" 
                                        type="text" 
                                        placeholder="Profesor a cargo" 
                                        name="professor"
                                        onChange={handleInput}
                                    />
                                    
                                    <Form.Control 
                                        value={form.image} 
                                        className="input" 
                                        type="text" 
                                        placeholder="Imagen del curso" 
                                        name="image"
                                        onChange={handleInput}
                                    />
                                    
                                    <Form.Control 
                                        value={form.review} 
                                        className="input" 
                                        as="textarea" 
                                        rows={3} 
                                        placeholder="Reviews" 
                                        name="review"
                                        onChange={handleInput}
                                    />
                                    
                                    <Form.Control 
                                        value={form.rating} 
                                        className="input"
                                        type="text" 
                                        placeholder="Rating" 
                                        name="rating"
                                        onChange={handleInput}
                                    />
                                    
                                    <Form.Control
                                        value={form.price} 
                                        className="input" 
                                        type="text" 
                                        placeholder="Precio" 
                                        name="price"
                                        onChange={handleInput}
                                    />
                                    
                                    <Form.Control
                                        value={form.duration} 
                                        className="input"
                                        type="text"
                                        placeholder="Duración"
                                        name="duration"
                                        onChange={handleInput}
                                    />
                                    
                                    <Form.Control
                                        value={form.accessLink}
                                        className="input"
                                        type="text"
                                        placeholder="Link de acceso"
                                        name="accessLink"
                                        onChange={handleInput}
                                    />
                                    
                                    <Form.Control
                                        value={form.videoPreview}
                                        className="input"
                                        type="text"
                                        placeholder="Preview del video"
                                        name="videoPreview"
                                        onChange={handleInput}
                                    />
                                </Form.Group>
                        
                                <Button variant="primary" type="submit"> Editar </Button>
                                <Button variant="danger" onClick={handleDelete}> Eliminar </Button>

                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};


export default AdminCoursesEdit;