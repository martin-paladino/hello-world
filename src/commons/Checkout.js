import { useDispatch, useSelector } from "react-redux";
import { ListGroup, Badge, Button, Card, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { addCoursesToUserOrders } from "../state/orders";
import { deleteCoursesFromCart } from "../state/cart";
import { sendMail } from "../state/user";

function Checkout() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const totalPrice = cart.length > 0 && cart.reduce((sum, value) => sum + Number(value.price), 0);
  
  const handleConfirmClick = () => {
    const body = cart.map(course => { return { courseId: course.id, userId: user.id, purchased: true }});
    dispatch(addCoursesToUserOrders(body));//envia los cursos comprados a la tabla de ordenes ("userCourses") con la prop purchased=true
    dispatch(sendMail(cart));
    dispatch(deleteCoursesFromCart())
    document.getElementById('msgBody').style.visibility = "visible";
    document.getElementById('msgText').innerHTML = "Compra confirmada.";
  };

  const handleCancel = () => {
    const body = cart.map(course => { return { courseId: course.id, userId: user.id, purchased: false }});
    dispatch(addCoursesToUserOrders(body)) //envia los cursos cancelados a la tabla de ordenes ("userCourses") con la prop purchased=false
    dispatch(deleteCoursesFromCart());
    document.getElementById('msgBody').style.visibility = "visible";
    document.getElementById('msgText').innerHTML = "Compra cancelada.";
  };

  return (
    <div>
      <Container>
        <Card.Text>Confirme su compra</Card.Text>
      </Container>
      {cart.map(course => {
        return (
          <Container>
            <ListGroup.Item
              key={course.id}
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold"> {course.title} </div>
              </div>
              <Badge variant="primary" pill> US$ {course.price} </Badge>
            </ListGroup.Item>
          </Container>
        )
      })}
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/me">
          <Button onClick={handleConfirmClick}> Confirmar </Button>
        </Link>
        <Link to="/">
          <Button onClick={handleCancel}> Cancelar compra </Button>
        </Link>
        <Button onClick={() => navigate(-1)}>Volver</Button>
        <div>
          <h3>Total a pagar: US${totalPrice}</h3>
        </div>
      </Container>
    </div>
  );
}

export default Checkout;
