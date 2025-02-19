import { useEffect, useState } from "react";
import { Button, ListGroup, Badge } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addCoursesToCart, deleteCourseFromCart, getCoursesFromUserCart } from "../state/cart";
import "../assets/styles/general.css"
import "../assets/styles/cart.css"

const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [update, setUpdate] = useState([]);
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  let courses = cart.length > 0 ? cart : JSON.parse(localStorage.getItem("courses"));
  let currentCart = courses;

  useEffect(() => {
    user.id && dispatch(getCoursesFromUserCart());
  }, [user]);

  useEffect(() => {
    if (user.id && courses) {
      dispatch(addCoursesToCart(courses));
      localStorage.removeItem("courses");
    }
  }, []);

  const removeLocalStorageItem = course => {
    courses.splice(courses.indexOf(course), 1);
    localStorage.setItem("courses", JSON.stringify(courses));
    setUpdate(localStorage.getItem("courses"));
  };

  const removeUserItem = course => {
    dispatch(deleteCourseFromCart(course.id));
    document.getElementById('msgBody').style.visibility="visible";
    document.getElementById('msgText').innerHTML="Curso removido del carrito.";
  };

  let totalPrice = currentCart && currentCart.reduce((sum, value) => sum + Number(value.price), 0);

  return (
    <div id="contMargin">
      <h1>Bienvenidx a tu carrito de compras:</h1><br></br>
      <ListGroup as="ol" numbered>
        {!currentCart ? (
          <h2>Tu carrito de compras está vacío!</h2>
        ) : (
          currentCart.map(course => {
            return (
              <ListGroup.Item
                key={course.id}
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{course.title}</div>
                  
                </div>
                <Badge variant="primary" pill>
                  US$ {course.price}
                </Badge>
                <Button
                  type="submit"
                  onClick={() =>
                    user.id
                      ? removeUserItem(course)
                      : removeLocalStorageItem(course)
                  }
                >
                  borrar item
                </Button>
              </ListGroup.Item>
            );
          })
        )}
      </ListGroup>
      {currentCart && (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to={user.id ? "/checkout" : "/login"}>
            <Button>Pagar</Button>
          </Link>
          <div>
            <h3>Total a pagar: US${totalPrice}</h3>
          </div>
        </div>
      )}
      <Button style={{width:"5%"}} onClick={() =>navigate(-1)}> Volver</Button>
    </div>)
};

export default Cart;
