import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
//import { useState, useEffect } from "react";
//import axios from "axios";
import { Link } from "react-router-dom";
import {addToCart} from "../state/course"


function Cards({courses}) {
  // traemos un curso en particular //
 /*   const [course, setCourse] = useState([]);

  useEffect(() => {
    axios.get("api/course/:id").then((data) => setCourse(data));
  }, []);
*/
const dispatch = useDispatch()
  return (
    
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/tarjetas/1.png" />
        <Card.Body className="text-center">
          <Card.Title>{courses.name }</Card.Title>
          <Card.Text>{courses.description}</Card.Text>
          <Card.Title>{courses.price}</Card.Title>

            <Button onClick={(courses)=> {dispatch(addToCart(courses.name))}} variant="primary">Add to cart</Button>
          <Link to="/cart">
          <Button variant="primary">Go to cart</Button>
          </Link>
        </Card.Body>
      </Card>



      
    </div>
  );


}

export default Cards;
