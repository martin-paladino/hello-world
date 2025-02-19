import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllUsers } from "../state/users";
import { Button } from "react-bootstrap";
import NotFound from "../commons/NotFound";
import axios from "axios";
import "../assets/styles/general.css";
import "../assets/styles/admin.css";

const Admin = () => {
  const [authorized, setAuthorized] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/api/admin")
      .then(res => res.data)
      .then(() => {
        setAuthorized(true);
        dispatch(getAllUsers());
      })
      .catch(() => setAuthorized(false));
  }, []);

  if (authorized) {
    return (
      <div id="contMargin">
        <div className="wrapper">
          <div className="row">
            <div className="column">
              <h1> Perfil del Admin: </h1>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="column1">
                <Link to="/admin/users">
                  <img id="avatar" src="/users.png" alt="usuarios"></img>
                  <br></br>
                  <Button variant="dark" className="button">
                    {" "}
                    Administrar Usuarios{" "}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="column">
              <div className="column1">
                <Link to="/admin/courses">
                  <img id="avatar" src="/courses.png" alt="cursos"></img>
                  <br></br>
                  <Button variant="dark" className="button">
                    Administrar Cursos
                  </Button>
                </Link>
              </div>
            </div>
            <div className="column">
              <div className="column1">
                <Link to="/admin/categories">
                  <img id="avatar" src="/categories.png" alt="categorias"></img>
                  <br></br>
                  <Button variant="dark" className="button">
                    {" "}
                    Administrar Categorías{" "}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default Admin;
