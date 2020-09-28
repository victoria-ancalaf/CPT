import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Carrusel from '../Components/Carrusel'
import Graficos from '../Components/Graficos'
import Operaciones from '../Components/Operaciones'
import Voluntariado from '../Components/Voluntariado'
import Numbers from '../Components/Numbers'
import Colaboradores from '../Components/Colaboradores'
import Commitment from '../Components/Commitment'


const Main = () => {
    return (
        <div>
            <Navbar />
            <Carrusel />
            <Voluntariado />
            <Numbers />
            <Commitment />
            <Operaciones />
            <Graficos />
            <Colaboradores />
            <Footer />
        </div>
    )
}

export default Main;
