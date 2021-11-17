import {ListGroup} from "react-bootstrap"

const Orders = () => {
    return (
        <div>
            <h1>Historial de órdenes</h1>
            <ListGroup as="ol" numbered>
                <ListGroup.Item as="li"
                className="d-flex justify-content-between align-items-start">
                    <h5>Curso</h5>
                    <h5>Estado</h5>
                    <h5>Fecha de compra</h5>
                </ListGroup.Item>
                <ListGroup.Item as="li"
                className="d-flex justify-content-between align-items-start">
                    <h5>Curso</h5>
                    <h5>Estado</h5>
                    <h5>Fecha de compra</h5>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Orders
