import React, { useEffect } from "react"
import  {Dropdown,DropdownButton} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getAllCategories } from "../state/categories"

const Categories=()=>   {
const dispatch=useDispatch()

useEffect(()=>  {
dispatch(getAllCategories())

},[])

const categories=useSelector((state)=>state.categories)



return(
    <div>

       <DropdownButton id="dropdown-basic-button" title="Categorias" variant="secondary">
       {/* <Dropdown.Item href="#/action-1">{category.name}</Dropdown.Item>
 */}    {categories.map((category)=>(

 <Link to=  {`/courses/${category.name}`}> <Dropdown.Item href="#/action-1">{category.name}</Dropdown.Item></Link>


))}

</DropdownButton> 
</div>
  
)



}

export default Categories