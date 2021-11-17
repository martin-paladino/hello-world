import { useState } from "react";
import { useNavigate } from "react-router";
import { Container, Form, Button, Row, Col, Alert} from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { setUser } from "../state/user"


// Tengo que comprobar si esta o no logueado usando Redux!

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [vari, setVari] = useState("light");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  function loguear() {
    let body = { email, password};
    setVari("primary")
    setMessage("Logueando...");
     axios
      .post("/api/auth/login", body)
      .then((response) => dispatch(setUser(response.data)))
      .then(() => {
        setVari("primary");setMessage("Que bueno volver a verte " + email + ".")
        navigate("/me") //M: redirecciono
      })
      .catch(err => {
        console.log({err})
        setVari("danger");
        setMessage("Usuario o clave incorrecta.");
      }); 
  }

  function handleSubmit(e) {
    let comprobado =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
    if (!comprobado) {
        setVari("danger");
        setMessage("Correo invalido!");
    } else {
      if (password.length > 5) {
        loguear(email, password);
      } else {
        setVari("danger");
        setMessage("Password invalido.");
      }
    }
  }

  return (
    <Container className="d-grid h-100" id="main-container">
      <Row>
          <Col></Col>
          <Col>
      <Form>
        <h2>Por favor, ingrese su usuario:</h2>
        <Form.Group>
          <Form.Control
            value={email} //M: defini los values
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            size="lg"
            placeholder="Dirección de E-Mail"
            autoComplete="username"
            className="position-relative"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            size="lg"
            placeholder="Clave"
            autoComplete="password"
            className="position-relative"
          />
        </Form.Group>
      </Form>
      <div>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          onClick={handleSubmit}
        >
          Logueame
        </Button>
        <Alert variant={vari}>{message}</Alert>
      </div>
    </Col>
    <Col></Col>
    </Row>
    </Container>
  );
};

export default Login;
