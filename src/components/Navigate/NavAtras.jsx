import React from 'react'
import {useNavigate} from 'react-router-dom'

const NavAtras = () => {
    const navigate = useNavigate()
  return (
    <button className='btn btn-dark' onClick={()=>{navigate(-1)}}>Atras</button>
  )
}

export default NavAtras