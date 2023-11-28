// importamos useForm para crear el hook que nos permitirá usar el formulario
import { useForm } from 'react-hook-form'
//importamos el hook useNavigate para poder redirigir al usuario
import { useNavigate } from 'react-router-dom'
import NavAtras from './Navigate/NavAtras'
import NavAdelante from './Navigate/NavAdelante'

const Login = () => {
    // creamos el hook para usar el formulario
    const { register, handleSubmit, reset } = useForm()
    // creamos el hook para redirigir al usuario
    const navigate = useNavigate()
    // creamos la función que se ejecutará al enviar el formulario
    const onSubmit = data => {
        console.log(data)
        localStorage.setItem('userdata', JSON.stringify(data))// guardamos los datos en el localStorage
        reset(); // reseteamos los campos del formulario
        navigate('/about') // redirigimos al usuario a la página about
    }
    return (
        // creamos el formulario y le pasamos la función que se ejecutará al enviarlo
        <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col d-flex justify-content-center mt-5">
                        <NavAtras/>
                    </div>
                    <div className="col d-flex justify-content-center mt-5">
                        <NavAdelante/>
                    </div>

                </div>
            <div className='container'>
                <div className="row">
                    <div className="col text-center mt-2">
                        <h1>Iniciar sesion</h1>
                        <input className='m-5 col-3' type="text" placeholder="Usuario" {...register("user", { required: true })} />
                        <br />
                        <input className='col-3 ' type="password" placeholder="Contraseña" {...register("password", { required: true })} />
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center mt-5">
                        <input className=' btn btn-secondary col-2' type="submit" />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login