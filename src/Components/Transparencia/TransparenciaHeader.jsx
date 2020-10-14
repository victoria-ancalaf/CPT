import React from 'react'
import './TransparenciaHeader.css'
import Arrow from '../../img/Arrow.svg'

const TransparenciaHeader = () => {
    return (
        <div className="transparencia-container">
            <div className="header-transparencia">
            <p className="titulo-header">Transparencia</p>
            <p className="transparencia-main">
                Conoce qué es posible y cómo<br></br>
                <strong>se distribuyen e impactan tus <br></br>
                donaciones.</strong>
            </p>
            </div>
            <div className="arrow-header">
            <img src={Arrow} alt="down" />
            </div>
        </div>
    )
}

export default TransparenciaHeader
