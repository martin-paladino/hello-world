import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import Card from "../commons/Card";
import { getCoursesFromCategory } from "../state/courses"

const CategoryContainer=()=> {

const   {category}=useParams()
const dispatch=useDispatch()
const courses=useSelector((state)=>state.courses)

useEffect(()=>  {
    
    dispatch(getCoursesFromCategory(category))
    
    
},[category])

console.log(courses,"LOCATTTT")

return(    <div id="contGrid">

    {courses.map((course)=>   (
        <div>
        <h1> Estos son los cursos de  {category}  </h1>
        <Card course={course}></Card>
        </div>
        
    ))}

</div>)



}

export default CategoryContainer;