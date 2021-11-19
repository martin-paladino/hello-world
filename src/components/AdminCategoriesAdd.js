import React, { useState }    from "react";
import { useEffect }          from "react";
import Admin                  from "./Admin"
import axios                  from "axios";
import useInputStr            from "../hooks/useInputStr";
import { useNavigate }        from "react-router-dom"
import NotFound               from "../commons/NotFound";
import { Button, Form }       from "react-bootstrap";
import { Container, Row, Col} from "react-bootstrap";
import "../assets/styles/admin.css";
import "../assets/styles/adminCoursesAdd.css";


const AdminCategoriesAdd = () => {
    const [authorized, setAuthorized] = useState(false);
    const name     = useInputStr();
    const navigate = useNavigate();

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

    function alertMsg(msg){
        document.getElementById('msgBody').style.visibility="visible";
        document.getElementById('msgText').innerHTML=msg;
        setTimeout(()=>{
            document.getElementById('msgBody').style.visibility="hidden";
        }, 3000);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`/api/categories/add`, {
            name: name.value,
        })
        .then(res => res.data)
        .then( () => alertMsg("Categoría agregado."))
        .then( () => navigate("/admin/categories"))
        .catch(err => console.log(err))
    };


    if(authorized) {
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
    }
    else {
        return (
            <NotFound />
        )
    }
};


export default AdminCategoriesAdd;