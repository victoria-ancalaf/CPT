import React from 'react'
import './Capacidades.css';
import Nutricion from '../../img/Nutricion.svg'
import barras from '../../img/barras.svg'
import planeta from '../../img/planeta.svg'
import manoEstrellas from '../../img/manoEstrellas.svg'



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
                        <div className="logosCapacidades">
                            <div className="logoNutricion">
                                <ul className="list-unstyled">
                                    <img
                                        className="imgNutricion"
                                        src={Nutricion} alt=""
                                    />

                                </ul>
                                <div className="alimentacion">
                                {/*<ul className="list-unstyled">*/}
                                    <h1>Alimentación<br />Saludable</h1>
                                {/*</ul>*/}
                            </div>
                            </div>

                            <div className="logoBarras">
                                <ul className="list-unstyled">
                                    <img
                                        className="imgBarras"
                                        src={barras} alt=""
                                    />

                                </ul>
                            </div>

                            <div className="logoPlaneta">
                                <ul className="list-unstyled">
                                    <img
                                        className="imgPlaneta"
                                        src={planeta} alt=""
                                    />

                                </ul>
                            </div>

                            <div className="logoManoEstrellas">
                                <ul className="list-unstyled">
                                    <img
                                        className="imgManoEstrellas"
                                        src={manoEstrellas} alt=""
                                    />

                                </ul>
                            </div>

                        </div>
                        <div className="titulosImagenes">

                            <div className="barras">
                                <ul className="list-unstyled">
                                    <h1>Emprendimiento</h1>
                                </ul>
                            </div>
                            <div className="permaCultura">
                                <ul className="list-unstyled">
                                    <h1>Permacultura</h1>
                                </ul>
                            </div>
                            <div className="buenasPracticas">
                                <ul className="list-unstyled">
                                    <h1>Buenas Prácticas</h1>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Capacidades