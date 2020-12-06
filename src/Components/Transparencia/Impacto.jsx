import React from 'react'
import './Impacto.css'
import uno from '../../img/impacto-1.svg'
import dos from '../../img/impacto-2.svg'
import tres from '../../img/impacto-3.svg'
import cuatro from '../../img/impacto-4.svg'
import cinco from '../../img/impacto-5.svg'
import seis from '../../img/impacto-6.svg'
import siete from '../../img/impacto-7.svg'
import ocho from '../../img/impacto-8.svg'
import nueve from '../../img/impacto-9.svg'

const Impacto = () => {
    return (
        <div className="container-impacto">
            <div className="impacto-text">
                <p className="impacto-title">
                    Cifras <strong>de Impacto</strong>
                </p>
                <p className="impacto-paragraph">
                Mediante nuestro círculo virtuoso y gracias al aporte realizado en cada <br></br>
                donación, hemos logrado dar trabajo, aumentar nuestro alcance territorial <br></br>
                y llevar un plato de comida a muchas personas que lo necesitan.
                </p>
            </div>
            <div className="cifras-impacto">
                <div className="impacto-logo-cifra-texto">
                    <img src={uno} alt="105" />
                    <p className="impacto-numeros">
                        105.000
                    </p>
                    <p className="impacto-logo-titulo">
                        Almuerzos solidarios<br></br>
                        entregados
                    </p>
                </div>
                <div className="impacto-logo-cifra-texto">
                    <img src={dos} alt="105" />
                    <p className="impacto-numeros">
                        72
                    </p>
                    <p className="impacto-logo-titulo">
                        Puesto de empleo<br></br>
                        activados
                    </p>
                </div>
                <div className="impacto-logo-cifra-texto">
                    <img src={tres} alt="105" />
                    <p className="impacto-numeros">
                        28
                    </p>
                    <p className="impacto-logo-titulo">
                        Comedores sociales<br></br>
                        apoyados
                    </p>
                </div>
                <div className="impacto-logo-cifra-texto">
                    <img src={cuatro} alt="105" />
                    <p className="impacto-numeros">
                        160.000
                    </p>
                    <p className="impacto-logo-titulo">
                        Almuerzos solidarios<br></br>
                        recaudados
                    </p>
                </div>
                <div className="impacto-logo-cifra-texto">
                    <img src={cinco} alt="105" />
                    <p className="impacto-numeros">
                        3.200
                    </p>
                    <p className="impacto-logo-titulo">
                        Personas comen<br></br>
                        a diario
                    </p>
                </div>
                <div className="impacto-logo-cifra-texto">
                    <img src={seis} alt="105" />
                    <p className="impacto-numeros">
                        12
                    </p>
                    <p className="impacto-logo-titulo">
                        Comunas<br></br>
                        beneficiadas
                    </p>
                </div>
                <div className="impacto-logo-cifra-texto">
                    <img src={siete} alt="105" />
                    <p className="impacto-numeros">
                        7
                    </p>
                    <p className="impacto-logo-titulo">
                        Hogares de adulto<br></br>
                        mayor apoyados
                    </p>
                </div>
                <div className="impacto-logo-cifra-texto">
                    <img src={ocho} alt="105" />
                    <p className="impacto-numeros">
                        19
                    </p>
                    <p className="impacto-logo-titulo">
                       Restaurantes<br></br>
                        reactivados
                    </p>
                </div>
                <div className="impacto-logo-cifra-texto">
                    <img src={nueve} alt="105" />
                    <p className="impacto-numeros">
                        120
                    </p>
                    <p className="impacto-logo-titulo">
                        Metros de huerto<br></br>
                        construido
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Impacto
