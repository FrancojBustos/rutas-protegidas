import { Navigate, Outlet } from 'react-router-dom'

const UserAuth = () => {
    const userdata = JSON.parse(localStorage.getItem('userdata')) // obtenemos los datos del localStorage
    if (userdata) { // si existen datos en el localStorage
        return (
            <Outlet /> // renderizamos el componente hijo
        )
    } else { // si no existen datos en el localStorage
        return (
            <Navigate to="/" /> // redirigimos al usuario al login
        )
    }
}

export default UserAuth

