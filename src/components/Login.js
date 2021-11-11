import React from "react";
import { Container, Form, Button, Row, Col, Alert} from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { setUser } from "../state/user"

// Tengo que comprobar si esta o no logueado usando Redux!

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [vari, setVari] = useState("light");

  function loguear(usr, pass) {
    let body = { "email": usr, "password": pass };
    setVari("primary")
    setMessage("Logueando...");
    const dispatch = useDispatch();

    axios
      .post("/api/login", body)
      .then((response) => dispatch(setUser(respose.data)))
      .then((a) => {setVari("primary");setMessage("Que bueno volver a verte " + usr + ".")})
      .catch((e) => {
        setVari("danger");
        setMessage("Usuario o clave incorrecta.");
      });
  }
  function handlerSubmit(e) {
    let comprobado =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        user
      );

    if (!comprobado) {
        setVari("danger");
        setMessage("Correo invalido!");
    } else {
      if (password.length > 5) {
        loguear(user, password);
      } else {
        setVari("danger");
        setMessage("Password invalido.");
      }
    }

    console.log("funciona", user);
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
            onChange={(e) => setUser(e.target.value)}
            type="email"
            size="lg"
            placeholder="Dirección de E-Mail"
            autoComplete="username"
            className="position-relative"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
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
          onClick={(e) => handlerSubmit(e)}
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
