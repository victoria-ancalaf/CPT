import React from 'react'
import prueba from '../img/iconOperaciones.png'
import '../Styles/Numbers.css'

const Numbers = () => {
    return (
        <div>
            <div className="containerNumbers">
                <p className="number-content">Esto es posible gracias a ti</p>
            <div className="icon-container">
                <div className="icon-text">
                    <img src={prueba} alt="prueba" />
                    <p className="numb">160.000</p>
                    <p className="text">Almuerzos solidarios <br></br>recaudados</p>
                </div>
                <div>
                <img src={prueba} alt="prueba" />
                    <p className="numb">19</p>
                    <p className="text">Restaurantes <br></br>reactivados</p>
                </div>
                <div>
                <img src={prueba} alt="prueba" />
                    <p className="numb">3.200</p>
                    <p className="text">Personas pueden comer <br></br>a diario</p>
                </div>
                <div>
                <img src={prueba} alt="prueba" />
                    <p className="numb">72</p>
                    <p className="text">Puestos de empleo <br></br>activados</p>
                </div>
            </div>
            </div> 
        </div>
    )
}

export default Numbers
