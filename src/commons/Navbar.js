import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../state/cart";
import { sendLogoutRequest } from "../state/user";
import { setCategory } from "../state/category"

function Navbar({ onSubmitHandler }) {
  
  const user = useSelector(state => state.user)
  const category = useSelector(state => state.category)
  const dispatch = useDispatch()
  
  return (
    <Container>
      <div className="navbar">
        <div>
          <Button href="/">Home</Button>
        </div>
        <div>
          <Form className="d-flex" onSubmit={onSubmitHandler}>
            <Form.Control
              value={category}
              onChange={(e) => dispatch(setCategory(e.target.value))}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
              <Button type="submit">Search</Button>
          </Form>
        </div>
        <div>
          <Button>Categories</Button>
          <Link to="/cart">
            <Button onClick={() => dispatch(getCourses(/* {user.id} */))}>
              Cart
            </Button>
          </Link>
        </div>
        {user.id ? (
          <div>
            <Button className="boton">{user.fullname}</Button>
            <Link to="/">
              <Button onClick={() => dispatch(sendLogoutRequest())}>
                Logout
              </Button>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <Button type="submit" as="input" value="Login" />
            </Link>
            <Link to="/register">
              <Button as="input" type="submit" value="Register" />
            </Link>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Navbar;

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
