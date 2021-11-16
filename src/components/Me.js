import { useSelector } from 'react-redux'
import "../assets/styles/general.css"

const Me = () => {

    const user = useSelector(state => state.user)

    return (
        <div id="contMargin">
            <h1>Bienvenidx {user.fullname}</h1>
            <h2>Estos son tus cursos:</h2>

            {/* Mostrar los cursos del usuario */}
        </div>
    )
}

export default Me
