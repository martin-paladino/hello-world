import React, { useEffect } from "react"
import { Dropdown, DropdownButton } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { getAllCategories } from "../state/categories"

const Categories = () => {
   const dispatch = useDispatch()
   const categories = useSelector((state) => state.categories)

   useEffect(() => {
      dispatch(getAllCategories())
   }, [])

   return (
      <div>
         <DropdownButton id="dropdown-basic-button" title="Categories" variant="secondary">
            <Link to={"/courses/vertodos"} style={{ textDecoration: "none" }}>
               <Dropdown.Item href="#/action-2">Ver todos</Dropdown.Item>
            </Link>
            {categories.map((category) => (
               <Link to={`/courses/${category.name}`} style={{ textDecoration: "none" }}>
                  <Dropdown.Item href="#/action-1">{category.name}</Dropdown.Item>
               </Link>
            ))}
         </DropdownButton>
      </div>
   )
}

export default Categories