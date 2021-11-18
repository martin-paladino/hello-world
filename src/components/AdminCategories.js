import React                from "react";
import Admin                from "./Admin"
import { useEffect }        from "react";
import { useDispatch }      from "react-redux";
import { Link }             from "react-router-dom";
import { getAllCategories } from "../state/categories";
import { Button, Container, Row, Col} from "react-bootstrap";
import "../assets/styles/admin.css";


const AdminCategories = () => {
    const dispatch = useDispatch();
  
  
    useEffect(() => {
        dispatch(getAllCategories())
  }, []);


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
                            <Button variant="warning"  className="buttonSubsecciones"> Agregar Categoría </Button>
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
};


export default AdminCategories;