import { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import Card from "../commons/Card";
import { useSelector, useDispatch } from "react-redux";
import { getAllCourses } from "../state/courses";

import "../assets/styles/general.css";
import "../assets/styles/home.css";

function Home() {
  const courses = useSelector(state => state.courses);
  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllCourses()), []);
 
  return (
  /*  <div>
      <h1>Mensaje de bienvenida</h1>
      <Carousel>
        {courses.map(course => {
          return (
            <Carousel.Item key={course.id}>
              <Card course={course} />
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  */
 <div className="bodyCar">
   
  <input type="radio" name="position" checked />
  {
  
  
  courses.map((course) => {
          return (
            <input type="radio" name="position" />
          )
        })}
  <main id="carousel">
  {courses.map(course => {
          return (
            <div key={course.id} className="item">
              <Card course={course} />
            </div>
          )
        })}
    </main>

 </div>
 
 
 
 
    );
}

export default Home;
