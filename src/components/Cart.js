import React, {useEffect} from "react";
import { Button, ListGroup, Badge } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom"
import {addCoursesToCart} from "../state/cart"

// Este componente sirve para Carrito y tambien para historial.
const Cart = () => {
  const dispatch = useDispatch()
  console.log("el dispatch", dispatch)
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  // cambia el JSON al valor real del localStorage
  let courses = JSON.parse(localStorage.getItem("courses"))
  let currentCart = user.id ? cart : courses
 
  useEffect(()=> {
   if(user.id) {
    dispatch(addCoursesToCart(courses))
    localStorage.removeItem("courses")
   } 
  }, [])
  
  return (
    <div>
      <ListGroup as="ol" numbered>
        {currentCart.map(course => {
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
                {course.price}
              </Badge>
              <Button>borrar item</Button>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <Link to={user.id ? "/checkout" : "/login"}> {/* definir componente checkout */}
      <Button>Pagar</Button>
      </Link>
    </div>
  );
};

export default Cart;
