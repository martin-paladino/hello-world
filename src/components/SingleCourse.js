import { useEffect } from "react";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import "../assets/styles/general.css";
import { getCourse } from "../state/course";
import { getUserOrders, purchasedCourse } from "../state/orders";

const SingleCourse = () => {

 const  {courseId}=useParams() 
 const course = useSelector((state) => state.course);
 const user=useSelector((state)=>state.user)
 const order=useSelector((state)=>state.orders)
const dispatch=useDispatch()
useEffect(()=>  {
dispatch(getCourse(courseId))
/* dispatch(getUserOrders(user.id))
 */
/* dispatch(purchasedCourse( {courseId,userId:user.id }))
 */
},[]) 

console.log("COMPRA?",order)
console.log(course,"COURSEeeeee")

  // iframe    <iframe src="https://www.youtube.com/watch?v=CjmzDHMHxwU&ab_channel=codigofacilito" width="540" height="310"></iframe>
  return (
    <div id="contMargin">
    {user.id ? (
      <h1>{course.title} </h1>
     ) :(
      <h2>{course.professor}</h2>)   }
      <iframe
      src={course.videoPreview}
      width="540"
      height="310"
      />
      
      <p>{course.description}</p>
      <h2>{course.rating}</h2>
      <h3>US$ {course.price}</h3>
      </div>
      )
};

export default SingleCourse;
