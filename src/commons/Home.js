import { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import Card from "../commons/Card";
import { useSelector, useDispatch } from "react-redux";
import { getAllCourses } from "../state/courses";
import "../assets/styles/general.css";
import "../assets/styles/home.css";

function Home() {
  const courses = useSelector((state) => state.courses);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCourses())
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
  ];

  return (
    <div>
      <div id="contMargin">
        <h1 id="big">¡Bienvenidx a Hello World {user.fullname}!</h1>
        <h3 id="big">¡Tenemos los mejores cursos de programación para vos!</h3>
      </div>
      <div className="bodyCar">
        <main id="carousel" style={{ width: "100%", height: "800px" }}>
          <Carousel breakPoints={breakPoints}>
            {courses.map((course) => (
              <Card course={course} />
            ))}
          </Carousel>
        </main>
      </div>
    </div>
  );
}

export default Home;
