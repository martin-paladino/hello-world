import React, { useEffect, useState } from "react";
import { Button, ListGroup, Badge, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCoursesToCart, deleteCourseFromCart } from "../state/cart";

// Este componente sirve para Carrito y tambien para historial.
const Cart = () => {
  const dispatch = useDispatch();
  const [update, setUpdate] = useState([])

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  // cambia el JSON al valor real del localStorage
  let courses = cart.length > 0 ? cart : JSON.parse(localStorage.getItem("courses"));
  let currentCart = user.id ? cart : courses;
  

  useEffect(() => {
    if (user.id && courses.length > 0) {
      dispatch(addCoursesToCart(courses));
      localStorage.removeItem("courses");
    }
  }, []);

  const removeLocalStorageItem = (course) => {
    courses.splice(courses.indexOf(course), 1)
    localStorage.setItem("courses", JSON.stringify(courses))
    setUpdate(localStorage.getItem("courses"))
  }

  const  removeUserItem = (course) => {
    dispatch(deleteCourseFromCart(course.id))
  }

  let totalPrice = currentCart && currentCart.reduce((sum, value) => ( sum + Number(value.price) ), 0);
  
  return (
    <div>
      <ListGroup as="ol" numbered>
        {currentCart && currentCart.map((course) => {
          return (
            <ListGroup.Item
              key={course.id}
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{course.name}</div>
                {course.description}
              </div>
              <Badge variant="primary" pill>
               US$ {course.price}
              </Badge>
              <Button type="submit" onClick={() => user.id ? removeUserItem(course) : removeLocalStorageItem(course)} >borrar item</Button>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
     <Container style={{display: "flex" , justifyContent: "space-between"}}>{/* el style mandarlo a un css y pasar la clase */}
      <Link to={user.id ? "/checkout" : "/login"}>
        <Button>Pagar</Button>
      </Link>
      <div><h3>Total a pagar: US$ {totalPrice}</h3></div>
        </Container>
    </div>
  );
};

export default Cart;
