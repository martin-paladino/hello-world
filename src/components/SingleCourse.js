import React, { useEffect } from "react";
import { Image } from "react-bootstrap";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesFromId } from "../state/courses";


const SingleCourse = () => {
    const dispatch = useDispatch()
    const { courseId } = useParams()
    console.log("el id", courseId)
    console.log("el getcourse", getCoursesFromId)
    useEffect(() => {
        dispatch(getCoursesFromId(courseId))

    }, [])

    const course = useSelector((state) => state.course)

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