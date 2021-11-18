import { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import Card from "../commons/Card";
import { useSelector, useDispatch } from "react-redux";
import { getAllCourses } from "../state/courses";

import "../assets/styles/general.css";
import "../assets/styles/home.css";

function Home() {
  const courses = useSelector(state => state.courses);
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllCourses()), []);

 
  return (
 
 <div>
    <div id="contMargin"><h1 id="big">Bienvenidx {user.fullname} a Hello World!</h1></div>
 <div className="bodyCar">
   
  <input type="radio" name="position" checked />
  <input type="radio" name="position" />
  <input type="radio" name="position" />
  <input type="radio" name="position" />
  <input type="radio" name="position" />
  
  <main id="carousel">
  
   {courses.map(course => { if(course<5){
          return (
            <div key={course.id} className="item">
              <Card course={course} />
            </div>
          )
        }})}
       
    </main>

 </div>
 
 </div>
 
 
    );
}

export default Home;
