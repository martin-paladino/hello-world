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
  
  

  /* const handleClick = () => {
    dispatch(setCourse(course));
    navigate(`/course/${course.id}`);
  }; */
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
    dispatch(addCourseToCart(course.id));
  };

  return (
    <div>
      <div className="card">
      <Link to= {`/course/${course.id}`}> <div id="cardImgCont"><img id="cardImg" /* onClick={handleClick} */ variant="top" src={course.image} /></div></Link>
        <div id="cardDesc">
          <Rcard.Title>{course.title}</Rcard.Title>
          <Rcard.Text>{course.description}</Rcard.Text>
        </div>
        <div >
          <div>${course.price}</div>
          {!course.purchased ?
          <div id="cardFooter">
            <Button onClick={user.id ? userHandleCartClick : handleCartClick} variant="primary">
              Agregar
            </Button>
            <Link to="/cart">
              <Button variant="primary">Ir al carrito</Button>
            </Link>
          </div> : 
          <Button onClick={handleClick} variant="success">Ver mi curso</Button>}
        </div>
      </div>
    </div>
  );
}

export default Card;
