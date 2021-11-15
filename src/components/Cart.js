import React , {useEffect} from "react";
import { Button, ListGroup, Badge } from "react-bootstrap";
import getCourse from "../state/cart";

import { useSelector, useDispatch } from "react-redux";

// Este componente sirve para Carrito y tambien para historial.
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  // cambia el JSON al valor real del localStorage
  let courses = JSON.parse(localStorage.getItem(`courses`));
  useEffect(() => {
    courses.map((course) => {
      return dispatch(getCourse(course));
    });
  }, []);

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
