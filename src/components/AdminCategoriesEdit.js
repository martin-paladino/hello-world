import React                   from "react";
import { useState, useEffect } from "react";
import Admin                   from "./Admin"
import axios                   from "axios";
import { useNavigate }         from "react-router-dom"
import { useSelector }         from "react-redux";
import { useDispatch }         from "react-redux";
import { Button, Form }        from "react-bootstrap";
import { Container, Row, Col}  from "react-bootstrap";
import { getAllCategories }    from "../state/categories";
import { setCategories }       from "../state/categories";
import NotFound                from "../commons/NotFound";
import "../assets/styles/admin.css";
import "../assets/styles/adminCoursesAdd.css";


const AdminCategoriesEdit = () => {
    const categories      = useSelector((state) => state.categories);
    const dispatch        = useDispatch();
    const navigate        = useNavigate();
    const [id, setId]     = useState();
    const [form, setForm] = useState({
        name: "",
    });
    const [authorized, setAuthorized] = useState(false);
  
    
    useEffect(() => {
        axios.get("/api/admin")
        .then((res) => res.data)
        .then(() => {
            setAuthorized(true);
            dispatch(getAllCategories())
        })
        .catch((error) => {
            setAuthorized(false);
        });
  }, []);


    const editToggle = (idCategory) => {
        setId(idCategory);
        categories.map(category => {
            if(category.id === idCategory) {
                setForm({
                    ...form,
                    name: category.name,
                });
            };
        });
        document.getElementById('EditCategory').style.display = document.getElementById('EditCategory').style.display === 'none' ? 'block' : 'none'
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/api/categories/${id}`, form)
        .then(res => res.data)
        .then(() => {
            dispatch(setCategories())
            dispatch(getAllCategories())
        })
        .then( () => alert("Categoría modificada."))
        .then( () => navigate("/admin/categories"))
        .catch(err => console.log(err))
    };


    const handleDelete = () => {
        axios.delete(`/api/categories/${id}`)
        .then( () => alert("Categoría eliminada."))
        .then(() => {
            dispatch(getAllCategories())
        })
        .then( () => navigate("/admin/categories"))
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
                            <Col><h1> EDITAR CATEGORÍA: </h1></Col>
                        </Row>
                    </div>
                    <Row>
                        <Col>
                            {categories.map(category => {
                                return (
                                    <Row>
                                        <Col>
                                            <Button className="buttonSubsecciones" variant="outline-secondary" onClick={() => editToggle(category.id)} type='button'>
                                                {category.name}
                                            </Button>
                                        </Col>
                                    </Row>
                                )
                            })}
                        </Col>

                        <Col>
                            <div style={{display: 'none'}} id='EditCategory'>
                            
                                <Form className="centrarForm" onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control
                                            value={form.name}
                                            type="text"
                                            placeholder="Nombre de la Categoría"
                                            className="input"
                                            name="name"
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
    }
    else {
        return (
            <NotFound />
        )
    }
};


export default AdminCategoriesEdit;