import { useEffect } from "react";
import { useParams } from "react-router";
import { getCourse } from "../state/course";
import singleCourse  from "../assets/styles/singleCourse.css"
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/general.css";

const SingleCourse = () => {
  const { courseId } = useParams() 
  const course       = useSelector((state) => state.course);
  const user         = useSelector((state)=>state.user)
  const order        = useSelector((state)=>state.orders)
  const dispatch     = useDispatch()


  useEffect(()=>  {
    dispatch(getCourse(courseId))
    /* dispatch(getUserOrders(user.id))
    */
    /* dispatch(purchasedCourse( {courseId,userId:user.id }))
    */
  },[]) 

    /*     console.log("COMPRA?",order)
    console.log(course,"COURSEeeeee") */

    // iframe    <iframe src="https://www.youtube.com/watch?v=CjmzDHMHxwU&ab_channel=codigofacilito" width="540" height="310"></iframe>
  

  return (
    <div id="contMargin">
      <h1 id="title"> {course.title} </h1>
      
      <iframe
        src={course.videoPreview}

      />
       
      <h2> Requisitos </h2>
      <p> Acceso a una computadora con conexión a internet. </p>
      
      <h2> Descripción </h2>
      <p> {course.description }</p>

      <h2> Comentarios </h2>
      <p> {course.review} </p>
      <h3> US$ {course.price} </h3>
    </div>
  )
};

export default SingleCourse;
