import { Card as Rcard, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { addCourseToCart } from "../state/cart";

import { setCourse } from "../state/course";



import "../assets/styles/general.css";
import "../assets/styles/card.css";


function Card({ course }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    dispatch(setCourse(course));
    navigate(`/course/${course.id}`);
  };
  const handleCartClick = () => {
    // courses queda en NULL o con un ARR con contenido
    let courses = JSON.parse(localStorage.getItem("courses"));
    if (!courses) {
      localStorage.setItem(`courses`, JSON.stringify([course]));
    } else {
      courses.push(course);
      localStorage.setItem(`courses`, JSON.stringify(courses))
    }
  };

  const userHandleCartClick = () => {
    dispatch(addCourseToCart({ userId: user.id, courseId: course.id }));
  };
  return (
    <div>
      <Rcard className="card">
        <Rcard.Img onClick={handleClick} variant="top" src={course.image} />
        <Rcard.Body className="text-center">
          <Rcard.Title>{course.title}</Rcard.Title>
          <Rcard.Text>{course.description}</Rcard.Text>
          <Rcard.Title>{course.price}</Rcard.Title>
          {user.id ? (
            <Button onClick={userHandleCartClick} variant="primary">
              Add to cart
            </Button>
          ) : (
            <Button onClick={handleCartClick} variant="primary">
              Add to cart
            </Button>
          )}
          <Link to="/cart">
            <Button variant="primary">Go to cart</Button> {/* no deberia decir comprar y redirigir a checkout? */}
          </Link>
        </Rcard.Body>
      </Rcard>
    </div>
  );
}

export default Card;
