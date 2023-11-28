import React from 'react'

const PageNotFound = () => {
    //un temporizador para redirigir al usuario a la página de inicio después de 5 segundos
    setTimeout(() => {
        window.location.href = '/'
    }, 3000)
  return (
    <div>Page Not Found</div>
    
  )
}

export default PageNotFound