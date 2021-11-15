import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup, Badge, Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {addCoursesToUser} from "../state/user"
import {deleteCourseFromCart} from "../state/cart"


function Checkout() {
  const dispatch = useDispatch()
  
  const cart = useSelector((state) => state.cart);
const handleConfirmClick = () => {
  dispatch(addCoursesToUser(cart))
  dispatch(deleteCourseFromCart())
  }
  return (
    <div>
      <Container>
        <Card.Text>Confirme su compra</Card.Text>
      </Container>
      {cart.map((course) => {
        return (
          <Container>
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
            </ListGroup.Item>
          </Container>
        );
      })}
      <Container>
        <Link to="/mycourses">
          <Button onClick={handleConfirmClick} >Confirmar</Button>
        </Link>
        <Link to="/me">
          <Button>Cancelar compra</Button>
        </Link>
      </Container>
    </div>
  );
}

export default Checkout;
