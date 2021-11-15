import { Container, Form, Button, Navbar, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../state/cart";
import { sendLogoutRequest } from "../state/user";
import { setCategory } from "../state/category";

// estilos

import "../assets/styles/general.css";
import "../assets/styles/navbar.css";

function NavbarFunc({ onSubmitHandler }) {
  const user = useSelector((state) => state.user);
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      
        <div>
          <a href="/"><img
            style={{ width: "40px", height: "auto" }}
            src="https://i.stack.imgur.com/o2dfh.png"
            alt=""
          />
          </a>
        </div>

        <div>
          <Form className="d-flex" onSubmit={onSubmitHandler}>
            <Form.Control
              value={category}
              onChange={(e) => dispatch(setCategory(e.target.value))}
              type="search"
              placeholder="Curso o categoria.."
              className="me-2"
              aria-label="Search"
              id="searchinput"
            />
            <Button variant="secondary" type="submit">Buscar</Button>
          </Form>
        </div>
        <div>
          <Button variant="secondary">Categorias</Button>
        </div>
        <div>
          <Link to="/cart">
            <Button
              onClick={() => dispatch(getCourses(/* {user.id} */))}
              className="redondo"
            >
              <img width="20px" src="/cart.png" />
            </Button>
          </Link>
        </div>
        {user.id ? (
          <div>
            <Button variant="secondary" className="boton">{user.fullname}</Button>
            <Link to="/">
              <Button variant="secondary" onClick={() => dispatch(sendLogoutRequest())}>
                Logout
              </Button>
            </Link>
          </div>
        ) : (
          <div>
            <div>
              <Link to="/login">
                <Button variant="secondary" type="submit" as="input" value="Login" />
              </Link>

              <Link to="/register">
                <Button as="input" type="submit" value="Register" />
              </Link>
            </div>
          </div>
        )}
      
    </div>
  );
}

export default NavbarFunc;

/*
<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

*/
