import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../assets/styles/general.css";

const SingleCourse = () => {
  const course = useSelector((state) => state.course);
  // iframe    <iframe src="https://www.youtube.com/watch?v=CjmzDHMHxwU&ab_channel=codigofacilito" width="540" height="310"></iframe>
  console.log("cursoooo", course);
  return (
    <div id="contMargin">
      <h1>{course.title} </h1>
      <h2>{course.professor}</h2>
      <iframe
        src={course.videoPreview}
        width="540"
        height="310"
      />

      <p>{course.description}</p>
      <h2>{course.rating}</h2>
      <h3>US$ {course.price}</h3>
    </div>
  );
};

export default SingleCourse;
