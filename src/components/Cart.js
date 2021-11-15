import {Button, ListGroup, Badge} from "react-bootstrap";
import { useSelector } from "react-redux";

// Este componente sirve para Carrito y tambien para historial.
const Cart = (history) => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <ListGroup as="ol" numbered>
        {cart.map((curso) => {
          return (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{curso.name}</div>
                {curso.description}
              </div>
              <Badge variant="primary" pill>
                {curso.price}
              </Badge>
              <Button>borrar item</Button>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <Button>Pagar</Button>
    </div>
  );
};

export default Cart;
