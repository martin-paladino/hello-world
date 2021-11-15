import { useSelector } from 'react-redux'

const Me = () => {

    const user = useSelector(state => state.user)

    return (
        <div>
            <h1>Bienvenidx {user.fullname}</h1>
            <h2>Estos son tus cursos:</h2>

            {/* Mostrar los cursos del usuario */}
        </div>
    )
}

export default Me
