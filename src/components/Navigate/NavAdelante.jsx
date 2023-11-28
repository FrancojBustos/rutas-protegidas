import {useNavigate} from 'react-router-dom'

const NavAdelante = () => {
    const navigate = useNavigate()
  return (
    <button className='btn btn-dark' onClick={()=>{navigate(+1)}}>Adelante</button>
  )
}

export default NavAdelante
