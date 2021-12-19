import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Admin from "./Admin"
import axios from "axios";
import NotFound from "../commons/NotFound";
import { Button } from "react-bootstrap";
import "../assets/styles/general.css";
import "../assets/styles/admin.css";


const AdminCourses = () => {
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        axios.get("/api/admin")
            .then(res => res.data)
            .then(() => setAuthorized(true))
            .catch(() => setAuthorized(false));
    }, []);

    if (authorized) {
        return (
            <div>
                <Admin />
                <div id="contTable">
                    <div><h1> Administrar cursos: </h1></div>
                    <div>
                        <div>
                            <Link to="/admin/courses/add">
                                <Button variant="warning" className="button buttonSubsecciones"> Agregar un Curso </Button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Link to="/admin/courses/edit">
                                <Button variant="warning" className="button buttonSubsecciones"> Editar un Curso </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>)
    }
    else {
        return (
            <NotFound />
        )
    }
};


export default AdminCourses;