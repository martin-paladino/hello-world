import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/general.css";
import "../assets/styles/register.css";

const Register = () => {
  const navigate = useNavigate()
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("") 
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");
  const [vari, setVari] = useState("light");
  const [message, setMessage] = useState("");

  function alertMsg(msg){
    document.getElementById('msgBody').style.visibility="visible";
    document.getElementById('msgText').innerHTML=msg;
    setTimeout(()=>{
        document.getElementById('msgBody').style.visibility="hidden";
    }, 3000);
}

  function register() {
    let body = { "fullname": fullname, "email": email, "password": password };
    setVari("primary")
    setMessage("Registrando...");
    axios
      .post("/api/auth/register", body)
      .then(() => alertMsg("Usuarix registradx"))
      .then(() => navigate("/login")) 
      .catch((err) => {
        console.log({ err });
        setVari("danger")
        setMessage("Lo sentimos, ha habido un error.");
      });
  }

  function handleSubmit(e) {
    let comprobado = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

    if (!comprobado) {
      setVari("danger")
      setMessage("Correo invalido!");
    } else {
      console.log(password)
      if (password.length >= 5) {
        if (!password.includes(' ')) {
          if (password === rPassword) {
            register();
          } else {
            setVari("danger")
            setMessage("Tu clave debe coincidir con la clave que re-ingresaste.");
          }
        }
        else {
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
    <div id="contMargin">
    <Container className="d-grid h-100" id="main-container">
      <Row><Col></Col><Col>
        <Form>
          <h2>Crea tu cuenta en Hello World!</h2>
          <Form.Group>
            <Form.Control
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              type="text"
              size="lg"
              placeholder="Nombre completo"
              autoComplete="Fullname"
              className="position-relative"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              value={email}
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
              placeholder="Nueva clave"
              className="position-relative"
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              value={rPassword}
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
            onClick={(e) => handleSubmit(e)}
          >
            Registrarme
          </Button> 
          <div id="alerta">{message}</div>
        </div>
      </Col><Col></Col></Row>
    </Container>
    </div>
  );
};

export default Register;