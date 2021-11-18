import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap" //agregado por M.
import "../assets/styles/general.css"

const Me = () => {

    const user = useSelector(state => state.user)

    return (
        <div id="contMargin">
            <h1>Bienvenidx {user.fullname}</h1>
            <h2>Estos son tus cursos:</h2>
            <Link to="/orders">
            <Button>Historial de compras</Button>
            </Link>

            {/* Mostrar los cursos del usuario */}
        </div>
    )
}

export default Me
