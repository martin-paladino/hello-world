import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup, Badge, Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addCoursesToUser } from "../state/user";
import { deleteCoursesFromCart } from "../state/cart";
import { sendMail } from "../state/user";
import nodemailer from "nodemailer";


function Checkout() {
  const dispatch = useDispatch();
  
  
    
  const cart = useSelector((state) => state.cart);
  
  const handleConfirmClick = () => {
    dispatch(addCoursesToUser(cart));
    dispatch(sendMail(cart));
    dispatch(deleteCoursesFromCart());
   
  };
  const totalPrice = cart && cart.reduce((sum, value) => sum + Number(value.price), 0);

  const handleCancel = () => {
    dispatch(deleteCoursesFromCart());
  };
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
                US$ {course.price}
              </Badge>
            </ListGroup.Item>
          </Container>
        );
      })}
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        {" "}
        {/* el style mandarlo a un css y pasar la clase */}
        <Link to="/me">
          <Button onClick={handleConfirmClick}>Confirmar</Button>
        </Link>
        <Link to="/">
          <Button onClick={handleCancel}>Cancelar compra</Button>
        </Link>
        <div>
          <h3>Total a pagar: US$ {totalPrice}</h3>
        </div>
      </Container>
    </div>
  );
}

export default Checkout;
