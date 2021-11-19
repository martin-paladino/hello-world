import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom"
import { getCourse } from "../state/course";
import {Button} from "react-bootstrap"
import "../assets/styles/general.css";

const SingleCourse = () => {
  const { courseId } = useParams()
  const dispatch = useDispatch()
  const course = useSelector((state) => state.course);
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getCourse(courseId))
  }, [])

  return (
    <div id="contMargin">
      {user.id ? (
        <h1>{course.title}</h1>
      ) : (
        <h2>{course.professor}</h2>)}
      <iframe
        src={course.purchased ? course.accessLink : course.videoPreview}
        width="540"
        height="310"
      />
      <p>{course.description}</p>
      <h2>{course.rating}</h2>
      <h3>US${course.price}</h3>
      <Button onClick={() =>navigate(-2)}> Volver</Button>
    </div>
  )
};

export default SingleCourse;
