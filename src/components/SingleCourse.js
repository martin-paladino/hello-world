import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";


const SingleCourse = () => {
    const course = useSelector(state => state.course)

    return (
        <div>
            <h1>{course.title} </h1>
            <h2>{course.professor}</h2>
            <Image src={course.image} fluid />
            <p>{course.description}</p>
            <h2>{course.rating}</h2>
            <h3>{course.price}</h3>
        </div>
    )
}

export default SingleCourse