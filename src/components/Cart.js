import React from "react";
import {
  Container,
  Form,
  Button,
  Col,
  Row,
  Alert,
  ListGroup,
  Badge,
} from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useSelector } from "react-redux";

// Este componente sirve para Carrito y tambien para historial.
const Cart = (history) => {
  const allCourses = useSelector((state) => {
    state.course;
  });
  return (
    <div>
        <ListGroup as="ol" numbered>
      
      { allCourses.map((curso)=>{ 
        return(<ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{curso.name}</div>
            {curso.description}
          </div>
          <Badge variant="primary" pill>
            {curso.price}
          </Badge>
          <button>borrar item</button>
        </ListGroup.Item>) 
        
        })}
      </ListGroup>
    <button>Pagar</button>
    </div>
  );
};

export default Cart;
