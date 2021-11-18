import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Admin from "./Admin"
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table, Container, Row, Col} from "react-bootstrap";
import "../assets/styles/admin.css";


const AdminUsers = () => {
    const userLoggeado = useSelector(state => state.user)
    const [users, setUsers] = useState([]);
    const [rol, setRol]     = useState(0)
    const navigate          = useNavigate();

    console.log("USER LOGGEADO PRI", userLoggeado.id)

    useEffect(() => {
        axios.get("/api/admin")
        .then((res) => res.data)
        .then((data) => {
            setUsers(data);
          });
    }, []);

    function alertMsg(msg){
        document.getElementById('msgBody').style.visibility="visible";
        document.getElementById('msgText').innerHTML=msg;
    }
    
    const handleRol = (e) => {
        setRol(e.target.value)
    };

    const handleEdit = (id) => {
        console.log("USER LOGGEADO SEC", userLoggeado.id)
        console.log("USER DEL MAP", id)

        if(userLoggeado.id == id) {
            alertMsg("No se puede auto-revocar su permiso.")
        }
        else{
            axios.put(`/api/users/${id}`, {isAdmin: Boolean(Number(rol)) })
            .then( () => alertMsg("Usuario modificado."))
            .then(() => navigate('/admin'))
        }
    };

    const handleDelete = (id) => {
        axios.delete(`/api/admin/${id}`)
        .then( () => alertMsg("Usuario eliminado."))
        .then(() => navigate('/admin'))
    };



    return (
    <div>
        <Admin />
        <Container className="marginContent">
            <div className="subtitulo">
                <Row>
                    <Col><h1> ADMINISTRAR USUARIOS: </h1></Col>
                </Row>
            </div>
            <Row>
                <Col>
                    {users.map(user => {
                        return(
                            <div>
                            <Table striped bordered hover variant="warning">
                                <thead>
                                    <tr>
                                        <th> Id </th>
                                        <th> Fullname </th>
                                        <th> E-mail </th>
                                        <th> Rol </th>
                                        <th colSpan="2">  </th>
                                        <th>  </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td> {user.id} </td>
                                        <td> {user.fullname} </td>
                                        <td> {user.email} </td>
                                        {user.isAdmin? (
                                            <td> Administrador </td>
                                        ) : (
                                            <td> Usuario </td>
                                        )}
                                        <td> 
                                            <select onChange={handleRol}>
                                                <option> Selecciona un rol </option>
                                                <option value="1"> Admin </option>
                                                <option value="0"> User </option>
                                            </select>
                                        
                                        </td>
                                        <td>  
                                            <Button size="sm" onClick={() => handleEdit(user.id)} type='button'> Cambiar rol </Button>
                                        </td>
                                        <td>      
                                            <Button onClick={() => handleDelete(user.id)} type="button" variant="danger" size="sm"> Eliminar usuario </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            </div>
                        )})
                    }
                </Col>
            </Row>
        </Container>
    </div>
    )
};


export default AdminUsers;