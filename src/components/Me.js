import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { getAllCourses } from "../state/courses";
import Card from "../commons/Card";
import {getUserOrders} from "../state/orders"

import "../assets/styles/general.css"

const Me = () => {

    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const courses = useSelector(state => state.courses)
    const orders = useSelector(state => state.orders)

    useEffect(() => {
        dispatch(getAllCourses())
        dispatch(getUserOrders(user.id))
    }, [])

    return (
        <div id="contMargin">
            <h1>Bienvenidx {user.fullname}</h1>
            <Link to="/orders">
                <Button>Mi historial de compras</Button>
            </Link>
            {orders.length === 0? (
                <div>
                    Todavía no tienes cursos comprados. 
                </div>
                ) : (
                <div>
                    <h2>Estos son tus cursos:</h2>
                    <div id="contGrid">
                        {courses.map(course =>
                        (course.purchased && <div id="espacio">
                            <div key={course.id}>
                                <Card course={course} />
                            </div>
                        </div>))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Me
