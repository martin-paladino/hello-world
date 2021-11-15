import { Card as Rcard, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { addCourseToCart } from "../state/cart";
import { setCourse } from "../state/course"

import "../assets/styles/general.css";
import "../assets/styles/card.css";

function Card({ course }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
 
  const handleClick = () => {
    dispatch(setCourse(course))
    navigate(`/course/${course.id}`)
  }

  return (
    <div>
      <Rcard className="card">
        <Rcard.Img onClick={handleClick} variant="top" src={course.image} />
        <Rcard.Body className="text-center">
          <Rcard.Title>{course.title}</Rcard.Title>
          <Rcard.Text>{course.description}</Rcard.Text>
          <Rcard.Title>{course.price}</Rcard.Title>
          <Button /* onClick={()=> {dispatch(addCourseToCart(data))}} */ variant="primary">Add to cart</Button>
          <Link to="/cart">
            <Button variant="primary">Go to cart</Button>
          </Link>
        </Rcard.Body>
      </Rcard>
    </div>
  );


}

export default Card;
