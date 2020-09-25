import React from 'react'
import Plato from '../img/Plato_Corazon.svg'
import Restaurant from '../img/Restaurant.svg'
import Persona from '../img/Eating.svg'
import Hands from '../img/Trabajo.svg'
import '../Styles/Numbers.css'

const Numbers = () => {
    return (
        <div>
            <div className="containerNumbers">
                <p className="number-content">Esto es posible gracias a ti</p>
            <div className="icon-container">
                <div className="icon-text">
                    <img src={Plato} alt="prueba" />
                    <p className="numb">160.000</p>
                    <p className="text">Almuerzos solidarios <br></br>recaudados</p>
                </div>
                <div className="icon-text">
                <img src={Restaurant} alt="prueba" />
                    <p className="numb">19</p>
                    <p className="text">Restaurantes <br></br>reactivados</p>
                </div>
                <div className="icon-text">
                <img src={Persona} alt="prueba" />
                    <p className="numb">3.200</p>
                    <p className="text">Personas pueden comer <br></br>a diario</p>
                </div>
                <div className="icon-text">
                <img src={Hands} alt="prueba" />
                    <p className="numb">72</p>
                    <p className="text">Puestos de empleo <br></br>activados</p>
                </div>
            </div>
            </div> 
        </div>
    )
}

export default Numbers
