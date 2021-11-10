import React from "react"
import { Card,Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const Cards=( {courses})=> {

return(
<Card style={{ width: '15rem' }}>

  <Link to= {`/api/course/${courses.id}`}>
  <Card.Img variant="top" src="1.png" /></Link>
  <Card.Body>
    <Card.Title>  {courses.name }</Card.Title>
    <Card.Text>
        {courses.description}
    </Card.Text>

   <Button variant="primary">Añadir al carrito</Button>
    <Button variant="outline-danger">Añadir a favorito</Button>{' '}
  </Card.Body>
</Card>

)

}

export default Cards