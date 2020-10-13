import React from 'react'
import './Capacidades.css';



const Capacidades = () => {
    return (

        <div className="containerCapacidades px-lg-2 pt-2 pb-2">
            <div className="capacidades px-lg-5 pt-5 pb-5 mb-5">
                <div className="row">
                    <div className="tituloCapacidades col-md-6 col-sm-6 pt-5">
                        <h1>Capacidades entregadas <br /><strong>al territorio</strong></h1>
                        <div className="msjCapacidades">
                            <ul className="list-unstyled">
                                <li className="liname">
                                    Restaurantes y productores de la alianza ponen a disposición sus <br />
                                    conocimientos para que la comunidad, comedores sociales y cocinerías <br />
                                    de las comunas vulnerables beneficiarias reciban capacitación.
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Capacidades