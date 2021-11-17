import React      from "react";
import { Link }   from "react-router-dom";
import { Button, Container, Row, Col} from "react-bootstrap";
import "../assets/styles/admin.css";


const AdminUsers = () => {
    const users  = useSelector((state) => state.users);


    return (
        <div>
            <Container className="marginContent">
                <div className="centrarTitulo">
                    <Row>
                        <Col><h4> ADMINISTRAR USUARIOS </h4></Col>
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
                </Row>
            </Container>
        </div>
    )
};


export default AdminUsers;