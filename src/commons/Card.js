import React from "react";
import { Card, Button } from "react-bootstrap";
//import { useState, useEffect } from "react";
//import axios from "axios";
import { Link } from "react-router-dom";
import course from "../utils/course.json"

function Cards() {
  // traemos un curso en particular //
 /*   const [course, setCourse] = useState([]);

  useEffect(() => {
    axios.get("api/course/:id").then((data) => setCourse(data));
  }, []);
*/
  return (

    
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="/tarjetas/1.png" />
        <Card.Body className="text-center">
          <Card.Title>Javascript</Card.Title>
          <Card.Text>Aprende Javascripts desde 0</Card.Text>
          <Card.Title>10 US$</Card.Title>
            <Button variant="primary">Add to cart</Button>
          <Link to="/cart">
          <Button variant="primary">Go to cart</Button>
          </Link>
        </Card.Body>
      </Card>



      
    </div>
  );
}

export default Cards;

/* 
get --> /api/course/getall devuelve todos los cursos
get --> api/course/:id
post --> api/course/add/:id
put --> api/course/:id
delete --> api/course/:id 
*/
