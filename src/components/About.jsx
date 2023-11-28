import React from 'react'
import NavAtras from './Navigate/NavAtras'

const About = () => {
    return (
        <div>
            <NavAtras/>
    <header>
        <h1 className='text-center mt-4'>Franco Bustos</h1>
        <p className='text-center'>Desarrollador Web</p>
    </header>

    <section className='m-4'>
        <h2 >Sobre Mí</h2>
        <p >Soy un apasionado desarrollador web con experiencia en el desarrollo de sitios web interactivos y funcionales. Me especializo en las siguientes tecnologías:</p>

        <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Git</li>
            <li>Mysql</li>
            <li>Sequelize</li>
            <li>Bootstrap</li>
        </ul>
    </section>

    <section className='m-4'>
        <h2>Experiencia Laboral</h2>
        <p>Actualmente trabajo como desarrollador web en [Nombre de la Empresa]. Anteriormente, he trabajado en [Otra Empresa] donde me enfoqué en [proyectos o responsabilidades específicas].</p>
    </section>

    <section className='m-4'>
        <h2>Contacto</h2>
        <p>Puedes contactarme a través de mi correo electrónico: <a href="#">correo@example.com</a></p>
    </section>
    </div>
  )
}

export default About