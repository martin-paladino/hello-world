import { Card as Rcard, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { addCourseToCart } from "../state/cart";
import { setCourse } from "../state/course";
import { BsFillCartPlusFill } from "react-icons/bs"

import "../assets/styles/general.css";
import "../assets/styles/card.css";

function Card({ course }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  
  function alertMsg(msg){
    document.getElementById('msgBody').style.visibility="visible";
    document.getElementById('msgText').innerHTML=msg;
    setTimeout(()=>{
        document.getElementById('msgBody').style.visibility="hidden";
    }, 3000);
  }

  const handleClick = () => {
    dispatch(setCourse(course));
    navigate(`/course/${course.id}`);
  }

  const handleCartClick = () => {
    let courses = JSON.parse(localStorage.getItem("courses"));
    if (!courses) {
      alertMsg("Sumando al carrito.")
      localStorage.setItem(`courses`, JSON.stringify([course]));
    } else {
      courses.push(course);
      localStorage.setItem(`courses`, JSON.stringify(courses))
    }
  };

  const userHandleCartClick = () => {
    dispatch(addCourseToCart(course.id));
    alertMsg("Sumando al carrito.")
  };

  return (
    <div>
      <div className="card">
        <Link to={`/course/${course.id}`}> <div id="cardImgCont"><img id="cardImg" variant="top" src={course.image} alt="imagen del curso" /></div></Link>
        <div id="cardDesc">
          <Rcard.Title>{course.title}</Rcard.Title>
          <Rcard.Text>{course.description}</Rcard.Text>
        </div>
        <div >
          <div>${course.price}</div>
          {user.id && course.purchased ?
            <Button onClick={handleClick} variant="success">Ver mi curso</Button> :
            <div id="cardFooter">
              <Button onClick={user.id ? userHandleCartClick : handleCartClick} variant="primary">
                <BsFillCartPlusFill /> Agregar
              </Button>
            </div>}
        </div>
      </div>
    </div>
  );
}

export default Card;
