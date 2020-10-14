import React from 'react'
import fomentamos from '../../img/fomentamos.png';
import './Fomentamos.css'

const Fomentamos = () => {
    return (

        <div className="containerFomentamos px-lg-2  pt-2 pb-2">
            <div className="footer-meddle">
                <div className="contenedorFomentamos pt-5 pb-5 mb-5">
                    <div className="row">
                        {/*colum 1*/}
                        <div className="claseFomentamos col-md-6 col-sm-6 pt-5">
                            <div className="fomentamos">
                            <h1 className="tituloFomentamos">¿Qué <strong> fomentamos? </strong></h1>
                            </div>
                            <ul className="list-unstyled">
                                <li className="parrafoFomentamos">En Comida Para Todos trabajamos para proteger
                                la Seguridad Alimentaria,
                                generando oportunidades mediante cuatro aristas:
                                el alimento bueno,
                                el empleo, la educación y la comunidad.
                                </li>

                            </ul>
                            <button className="btn-aprenderMas">
                                Más información
                                </button>
                        </div>
                        {/*colum 2*/}
                        <div className="col-md-5 col-sm-6">
                            <ul className="list-unstyled">
                                <img
                                    className="d-block w-100"
                                    src={fomentamos} alt="" 
                                />

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Fomentamos
