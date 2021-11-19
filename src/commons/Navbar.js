import {
  Container,
  Form,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesFromUserCart, setCart } from "../state/cart";
import { sendLogoutRequest } from "../state/user";
import { setCategory } from "../state/category";
import Message from "./Message";

// estilos
import "../assets/styles/general.css";
import "../assets/styles/navbar.css";
import Categories from "../components/Categories";

function Navbar({ onSubmitHandler, onChangeHandler, inputSearch }) {
  const user = useSelector((state) => state.user);
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setCart([]));
    dispatch(sendLogoutRequest());
    document.getElementById("msgBody").style.visibility = "visible";
    document.getElementById("msgText").innerHTML = "Usuario deslogueado.";
  };

  function visib(e) {
    e.preventDefault();
    document.getElementById("msgBody").style.visibility = "hidden";
  }

  return (
    <div>
      <div className="navbar">
          
          <div>
            <Link to="/">
              {" "}
              <img
                style={{ width: "40px", height: "auto" }}
                src="https://i.stack.imgur.com/o2dfh.png"
                alt=""
              />
            </Link>
          </div>
      
          <div>
            <Form className="d-flex">
              <Form.Control
                value={inputSearch}
                onChange={onChangeHandler}
                type="search"
                placeholder="Curso o categoria..."
                className="me-2"
                aria-label="Search"
                id="searchinput"
              />

              <Button
                onClick={onSubmitHandler}
                variant="secondary"
                type="submit"
              >
                <img id="searchButton" src="/lupa.png"></img>
              </Button>
            </Form>
          </div>

          <div>
            <Categories />
          </div>

          <div>
            <Link to="/cart">
              <Button className="redondo">
                <img width="20px" src="/cart.png" />
              </Button>
            </Link>
          </div>

          
          {user.id ? (
            <div>
              <Link to="/me">
                <Button variant="secondary" className="boton">
                  {user.fullname}
                </Button>
              </Link>
              <Link to="/">
                <Button variant="secondary" onClick={handleLogout}>
                  Logout
                </Button>
              </Link>
            </div>
          ) : (
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
          )}
          {user.isAdmin && (
            <div>
              <Link to="/admin">
                <Button className="boton"> Admin </Button>
              </Link>
            </div>
          )}
        </div>
        <div className="msgCont">
        <div id="msgBody">
          <div className="contCerrar">
            <Form onSubmit={(e) => visib(e)}>
              <button className="cerrar" type="submit">
                x
              </button>
            </Form>
          </div>
          <div id="msgText">mensaje</div>
        </div>
      </div>
    </div>
  )
  
}

export default Navbar;
