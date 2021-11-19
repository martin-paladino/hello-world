import { useEffect } from "react";
import { Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import "../assets/styles/general.css";
import { getCourse } from "../state/course";
import {useNavigate} from "react-router-dom"
import { getUserOrders, purchasedCourse } from "../state/orders";

const SingleCourse = () => {
  const { courseId } = useParams();
  const course = useSelector((state) => state.course);
  const user = useSelector((state) => state.user);
  const order = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getCourse(courseId));
    /* dispatch(getUserOrders(user.id))
     */
    /* dispatch(purchasedCourse( {courseId,userId:user.id }))
     */
  }, []);
  return (
    <div id="contMargin">
      {user.id ? <h1>{course.title} </h1> : <h2>{course.professor}</h2>}
      <iframe src={course.videoPreview} width="540" height="310" />

      <p>{course.description}</p>
      <h2>{course.rating}</h2>
      <h3>US$ {course.price}</h3>
      
        <Button onClick={() =>navigate(-2)}> Volver</Button>
      
    </div>
  );
};

export default SingleCourse;
