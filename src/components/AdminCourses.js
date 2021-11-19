import React, { useState } from "react";
import { useEffect }       from "react";
import { Link }            from "react-router-dom";
import Admin               from "./Admin"
import axios               from "axios";
import NotFound            from "../commons/NotFound";
import { Button, Container, Row, Col} from "react-bootstrap";

import "../assets/styles/general.css";
import "../assets/styles/admin.css";


const AdminCourses = () => {
    const [authorized, setAuthorized] = useState(false);

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

    if(authorized) {
        return (
            <div id="contMargin">
                <Admin />
                <div id="contTable">
                    
                       
                            <div><h1> Administrar cursos: </h1></div>
                        
                    
                    <div>
                        <div>
                            <Link to="/admin/courses/add">
                                <Button variant="warning" className="button" className="buttonSubsecciones"> Agregar un Curso </Button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Link to="/admin/courses/edit">
                                <Button variant="warning" className="button" className="buttonSubsecciones"> Editar un Curso </Button>
                            </Link>
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


export default AdminCourses;