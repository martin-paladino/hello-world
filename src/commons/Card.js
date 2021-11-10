import React from 'react'
import {Button, Card} from 'react-bootstrap';

function Cards({courses}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="/tarjetas/1.png" />
  <Card.Body>
    <Card.Title>{courses.name }</Card.Title>
    <Card.Text>
    {courses.description}
    </Card.Text>
    <Button variant="primary">Add to cart</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Cards


/* 
get --> /api/course/getall devuelve todos los cursos
get --> api/course/:id
post --> api/course/add/:id
put --> api/course/:id
delete --> api/course/:id 
*/