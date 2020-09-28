import React from 'react'
import Plato from '../img/Almuerzos_Solidarios_1.png'
import Restaurant from '../img/Restaurantes-reactivados-02.png'
import Persona from '../img/Personas-comen-a-dario-03.png'
import Hands from '../img/Puestos-de-empleo-activados-04.png'
import '../Styles/Numbers.css'

const Numbers = () => {
    return (
        <div>
            <div className="containerNumbers">
                <p className="number-content">Esto es posible <strong>gracias a ti</strong></p>
            <div className="icon-container">
                <div className="icon-text">
                    <img src={Plato} alt="prueba" />
                </div>
                <div className="icon-text">
                <img src={Restaurant} alt="prueba" />
                </div>
                <div className="icon-text">
                <img src={Persona} alt="prueba" />
                </div>
                <div className="icon-text">
                <img src={Hands} alt="prueba" />
                </div>
            </div>
            </div> 
        </div>
    )
}

export default Numbers
