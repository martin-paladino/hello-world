import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesFromUserCart, setCart } from "../state/cart";
import { sendLogoutRequest } from "../state/user";
import { setCategory } from "../state/category";

// estilos

import "../assets/styles/general.css";
import "../assets/styles/navbar.css";


function Navbar({ onSubmitHandler, onChangeHandler }) {
  
  const user = useSelector(state => state.user)
  const category = useSelector(state => state.category)
  const dispatch = useDispatch()
  
console.log(user.id)

  const handleLogout = () => {
    dispatch(setCart([]));
    dispatch(sendLogoutRequest());
  };

  return (
    <div className="navbar">
      
        <div>
          <Link to="/" > <img
            style={{ width: "40px", height: "auto" }}
            src="https://i.stack.imgur.com/o2dfh.png"
            alt=""
          />
          </Link>
        </div>

      <div>
        <Form className="d-flex" onSubmit={(e)=> onSubmitHandler(e)}>
          <Form.Control
            
            onChange={onChangeHandler}
            type="search"
            placeholder="Curso o categoria.."
            className="me-2"
            aria-label="Search"
            id="searchinput"
          />
          <Button variant="secondary" type="submit">
            Buscar
          </Button>
        </Form>
      </div>
      <div>
        <Button variant="secondary">Categorias</Button>
      </div>
      <div>
        <Link to="/cart">
          <Button
            className="redondo"
          >
            <img width="20px" src="/cart.png" />
          </Button>
        </Link>
      </div>
      {user.id ? (
        <div>
          <Button variant="secondary" className="boton">
            {user.fullname}
          </Button>
          <Link to="/">
            <Button variant="secondary" onClick={handleLogout}>
              Logout
            </Button>
          </Link>
        </div>
      ) : (
        <div>
          <div>
            <Link to="/login">
              <Button
                variant="secondary"
                type="submit"
                as="input"
                value="Login"
              />
            </Link>

            <Link to="/register">
              <Button as="input" type="submit" value="Register" />
            </Link>
          </div>
        </div>
      )}

      {user.id ? (
        <>
          <Link to="/admin">
            <Button className="boton"> Admin </Button>
          </Link>
        </>
      ) : null}
    </div>
  );
}

export default Navbar;
