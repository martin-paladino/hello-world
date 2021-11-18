import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getUserOrders } from "../state/orders"
import { getCoursesFromOrders } from "../state/courses"
import { ListGroup } from "react-bootstrap"


const Orders = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const courses = useSelector(state => state.courses)
    const orders = useSelector(state => state.orders)
    
    useEffect(() => {
        dispatch(getUserOrders(user.id))
        dispatch(getCoursesFromOrders(user.id))
    }, [])

    return (
        <div>
            <h1>Historial de órdenes</h1>
            <ListGroup as="ol" numbered>
                <ListGroup.Item  variant="primary"
                    className="d-flex justify-content-between align-items-start">
                    <h5>Curso</h5>
                    <h5>Estado</h5>
                    <h5>Fecha y hora</h5>
                </ListGroup.Item>
                {orders && orders.map((order, i) =>
                (<ListGroup.Item as="li" style={{justifyContent: "space-between"}}
                    className="d-flex justify-content-between align-items-start">
                    <p>{courses[i] && courses[i].title}</p>
                    <p>{order.purchased ? "Comprado" : "Cancelado"}</p>
                    <p>{order.createdAt}</p>
                </ListGroup.Item>))}
            </ListGroup>
        </div>
    )
}

export default Orders
