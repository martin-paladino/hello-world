import React from 'react'
import {List, Badge, Button, ListGroup} from "react-bootstrap"

function Checkout() {
    return (
        //confirme su compra en texto
        //map del carrito
        //boton comprar
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
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      <Button>Pagar</Button>
    </div>
    )
}

export default Checkout
