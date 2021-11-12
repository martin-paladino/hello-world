import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
//import { useState, useEffect } from "react";
//import axios from "axios";
import { Link } from "react-router-dom";
//import {addToCart} from "../state/course"
import { addCourseToCart } from "../state/cart";


function Cards({ course }) { //M. le llega como prop toda la data de cada curso individual (antes estaba en plural)
  // traemos un curso en particular //
  /*   const [course, setCourse] = useState([]);
 
   useEffect(() => {
     axios.get("api/course/:id").then((data) => setCourse(data));
   }, []);
 */
  //const dispatch = useDispatch()
  //const user = useSelector((state) => state.user) 
  //const data = {userId: user.id, courseId: course.id} 
  //M. accedo al user
  //M. data para el carrito
  console.log("hola holaaaaa")
  return (
    <div>
        <Card style={{ width: "18rem" }}>
          <Link to={`/course/${course.id}`}>
          <Card.Img variant="top" src={course.image} />
          </Link>
          <Card.Body className="text-center">
            <Card.Title>{course.title}</Card.Title> {/* M. cambie name x title, no existe name */}
            <Card.Text>{course.description}</Card.Text>
            <Card.Title>{course.price}</Card.Title>
            <Button /* onClick={()=> {dispatch(addCourseToCart(data))}} */ variant="primary">Add to cart</Button>
            <Link to="/cart">
              <Button variant="primary">Go to cart</Button>
            </Link>
          </Card.Body>
        </Card>
    </div>
  );


}

export default Cards;
