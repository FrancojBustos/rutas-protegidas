import { Link } from 'react-router-dom'
import NavAdelante from './Navigate/NavAdelante'

const Home = () => {
    return (
        <div className='container'>
          <div className="row">
            <div className="col text-center mt-2">
                <NavAdelante/> 
              <h1>Home</h1>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <p>Bienvenido a mi pagina de inicio por el momento esta página esta en proceso. 😊</p>
              <p className='mt-4'>Por ahora puedes iniciar sesion y acceder al about:</p>
                <Link to="/login"><button className='btn btn-secondary mt-5'>Iniciar sesion</button></Link>
            </div>
          </div>
        </div>
    )
}

export default Home