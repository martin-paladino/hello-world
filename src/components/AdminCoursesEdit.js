import React                   from "react";
import { useState, useEffect } from "react";
import { Button, Form }        from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector }         from "react-redux";
import { useDispatch }         from "react-redux";
import { setCourses }          from "../state/courses";
import Admin                   from "./Admin"
import NotFound                from "../commons/NotFound";
import axios                   from "axios";          
import { getAllCourses }       from "../state/courses";
import "../assets/styles/admin.css";
import "../assets/styles/adminCoursesAdd.css";



const AdminCoursesEdit = () => {
    const [authorized, setAuthorized] = useState(false);
    const courses  = useSelector((state) => state.courses);
    const dispatch = useDispatch();
    
    const [id, setId]     = useState();
    const [form, setForm] = useState({
        title: "",
        description:"",
        professor:"",
        image:"",
        review:"",
        price:"",
        duration:"",
        accessLink:"",
        videoPreview:"",
    });

    function alertMsg(msg){
        document.getElementById('msgBody').style.visibility="visible";
        document.getElementById('msgText').innerHTML=msg;
        setTimeout(()=>{
            document.getElementById('msgBody').style.visibility="hidden";
        }, 3000);
    }
    
    useEffect(() => {
        axios.get("/api/admin")
        .then((res) => res.data)
        .then(() => {
            setAuthorized(true);
            dispatch(getAllCourses())
        })
        .catch((error) => {
            setAuthorized(false);
        });
  }, []);


    const editToggle = (idCourse) => {
        setId(idCourse);
        courses.map(course => {
            if(course.id === idCourse) {
                setForm({
                    ...form,
        
                    title: course.title,
                    description: course.description,
                    professor: course.professor,
                    image: course.image,
                    review: course.review,
                    price: course.price,
                    duration: course.duration,
                    accessLink: course.accessLink,
                    videoPreview: course.videoPreview,
                });
            };
        });
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
        .then( () => alertMsg("Curso modificado."))
        .catch(err => console.log(err))
    };


    const handleDelete = () => {
        axios.delete(`/api/courses/${id}`)
        .then( () => alertMsg("Curso eliminado."))
        .then(() => {
            dispatch(getAllCourses())
        })
        .catch(err => console.log(err))
    };


    const handleInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
          });
    };


    if(authorized) {
        return (
            <div>
                <Admin />
                <Container className="marginContent">
                    <div className="subtitulo">
                        <Row>
                            
                            <Col>
                                <h1> Editar curso: </h1>
                            </Col>
                        </Row>
                    </div>

                    <Row>
                        <Col>
                            {courses.map(course => {
                                return (
                                    <Row>
                                        <Col>
                                            <Button className="buttonSubsecciones" variant="outline-secondary" onClick={() => editToggle(course.id)} type='button'>
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
                                            required
                                        />
                                        
                                        <Form.Control
                                            value={form.description}
                                            as="textarea"
                                            placeholder="Descripción"
                                            className="input"
                                            rows={3}
                                            name="description"
                                            onChange={handleInput}
                                            required
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
                                            required
                                        />
                                        
                                        <Form.Control 
                                            value={form.review} 
                                            className="input" 
                                            as="textarea" 
                                            rows={3} 
                                            placeholder="Reviews" 
                                            name="review"
                                            onChange={handleInput}
                                            required
                                        />
                                        
                                        <Form.Control
                                            value={form.price} 
                                            className="input" 
                                            type="text" 
                                            placeholder="Precio" 
                                            name="price"
                                            onChange={handleInput}
                                            required
                                        />
                                        
                                        <Form.Control
                                            value={form.duration} 
                                            className="input"
                                            type="text"
                                            placeholder="Duración"
                                            name="duration"
                                            onChange={handleInput}
                                            required
                                        />
                                        
                                        <Form.Control
                                            value={form.accessLink}
                                            className="input"
                                            type="text"
                                            placeholder="Link de acceso"
                                            name="accessLink"
                                            onChange={handleInput}
                                            required
                                        />
                                        
                                        <Form.Control
                                            value={form.videoPreview}
                                            className="input"
                                            type="text"
                                            placeholder="Preview del video"
                                            name="videoPreview"
                                            onChange={handleInput}
                                            required
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
    }
    else {
        return (
            <NotFound />
        )
    }
};


export default AdminCoursesEdit;