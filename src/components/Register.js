import React from "react";
import { Container, Form, Button, Col, Row, Alert} from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

// Tengo que comprobar si esta o no logueado usando Redux!

const Register = () => {
  const [fullname, setFullname] = useState("")
  const [user, setUser] = useState("");
  const [vari, setVari] = useState("light");
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");
  const [message, setMessage] = useState("");

  function registrar() {
    let body = {"fullname": fullname,  "email": user, "password": password };
    setVari("primary")
    setMessage("Registrando...");
    
    axios
      .post("/api/auth/register", body)
      .then((response) => console.log(response))
      .then((a) => {setVari("primary");
      setMessage("Bienvenidx a nuestra comunidad, " + user + ".")})
      .catch((e) => {
        console.log(e);
        setVari("danger")
        setMessage("Lo sentimos, ha habido un error.");
      });
  }
  function handlerSubmit(e) {
    let comprobado =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        user
      );

    if (!comprobado) {
        setVari("danger")
        setMessage("Correo invalido!");
    } else {
      console.log(password)
        if (password.length > 5) {
        if(!password.includes(' ')){
            if(password===rPassword){
                registrar();
            }else{
                setVari("danger")
                setMessage("Tu clave debe coincidir con la clave que re-ingresaste.");
            }
        }
        else{
            setVari("danger")
            setMessage("Tu clave no puede tener espacios.");
        }
        
      } else {
        setVari("danger")
        setMessage("Tu clave debe como mínimo poseer 5 caracteres.");
      }
    }

  }

  return (
    <Container className="d-grid h-100" id="main-container">
      <Row><Col></Col><Col>
      <Form>
        <h2>Crea tu cuenta en Hello, World!</h2>
        <Form.Group>
          <Form.Control
            onChange={(e) => setFullname(e.target.value)}
            type="text"
            size="lg"
            placeholder="Fullname"
            autoComplete="Fullname"
            className="position-relative"
          />
        </Form.Group>
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
            placeholder="Nueva clave"
            className="position-relative"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            onChange={(e) => setRPassword(e.target.value)}
            type="password"
            size="lg"
            placeholder="Re-introducir Clave"
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
      </Col><Col></Col></Row>
    </Container>
  );
};

export default Register;