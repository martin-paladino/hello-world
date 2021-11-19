import {
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../state/cart"

import { sendLogoutRequest } from "../state/user";

import Categories from "../components/Categories";

// estilos
import "../assets/styles/general.css";
import "../assets/styles/navbar.css";

function Navbar({ onSubmitHandler, onChangeHandler, inputSearch }) {
  const user = useSelector((state) => state.user);
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  function alertMsg(msg){
    document.getElementById('msgBody').style.visibility="visible";
    document.getElementById('msgText').innerHTML=msg;
    setTimeout(()=>{
        document.getElementById('msgBody').style.visibility="hidden";
    }, 3000);
  }

  const handleLogout = () => {
    dispatch(setCart([]));
    dispatch(sendLogoutRequest());
    alertMsg("Usuario deslogueado")

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
            <div style={{display: "flex"}}>
              <Link to="/me">
                <Button variant="secondary" className="boton">
                  {user.fullname}
                </Button>
              </Link>
              <Link to="/">
                <Button style={{marginLeft: "10px"}} variant="primary" onClick={handleLogout}>
                  Logout
                </Button>
              </Link>
            </div>
          ) : (
            <div style={{display: 'flex'}}>
            <div>
           
                <Link to="/login">
                  <Button
                    variant="secondary"
                    type="submit"
                    as="input"
                    value="Login"
                  />
                </Link>
              </div>
              <div>

                <Link to="/register">
                  <Button style={{marginLeft: "10px"}} as="input" type="submit" value="Register" />
                </Link>
              
            </div>
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