import{ useState, useEffect } from "react";
import axios from "axios";
import Admin from "./Admin"
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import NotFound from "../commons/NotFound";
import { Button, Table } from "react-bootstrap";
import "../assets/styles/general.css";
import "../assets/styles/admin.css";

const AdminUsers = () => {
    const navigate = useNavigate();
    const userLoggeado = useSelector(state => state.user)
    const [authorized, setAuthorized] = useState(false);
    const [users, setUsers] = useState([]);
    const [rol, setRol] = useState(0)

    useEffect(() => {
        axios.get("/api/admin")
            .then(res => res.data)
            .then(data => {
                setAuthorized(true);
                setUsers(data);
            })
            .catch(() => setAuthorized(false));
    }, []);

    function alertMsg(msg) {
        document.getElementById('msgBody').style.visibility = "visible";
        document.getElementById('msgText').innerHTML = msg;
        setTimeout(() => {
            document.getElementById('msgBody').style.visibility = "hidden";
        }, 3000);
    }

    const handleRol = (e) => setRol(e.target.value)

    const handleEdit = (id) => {
        userLoggeado.id == id ? alertMsg("No se puede auto-revocar su permiso.") : 
            axios.put(`/api/users/${id}`, { isAdmin: Boolean(Number(rol)) })
                .then(() => alertMsg("Usuario modificado."))
                .then(() => navigate('/admin'))
    };

    const handleDelete = (id) => {
        axios.delete(`/api/admin/${id}`)
            .then(() => alertMsg("Usuario eliminado."))
            .then(() => navigate('/admin'))
    };

    if (authorized) {
        return (
            <div id="contMargin">
                <Admin />
                <div id="contTable">
                    <div className="subtitulo">
                        <div className="row">
                            <div className="column"><h1> Administrar usuarios: </h1></div>
                        </div>
                    </div>
                    <div>
                        <div>
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
                                        {users.map(user => {
                                            return (
                                                <tr>
                                                    <td> {user.id} </td>
                                                    <td> {user.fullname} </td>
                                                    <td> {user.email} </td>
                                                    {user.isAdmin ? (
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
                                                </tr>)
                                        })}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <NotFound />
        )
    }
};


export default AdminUsers;