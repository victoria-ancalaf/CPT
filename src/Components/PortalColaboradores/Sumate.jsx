import React from 'react'
import masas from '../../img/Masas.jpg'
import './Sumate.css';


const Sumate = () => {
    return (
        <div className="containerSumate pt-5">
            <div className="sumatepx-lg-5 pt-5 pb-5 mb-5">
                <div className="row">
                    <div className="tituloSumate col-md-6 col-sm-6 pt-5">
                        <h1> Sumate <strong>al equipo</strong></h1>
                        <div className="msjSumate">
                            <ul className="list-unstyled">
                            Si tienes un emprendimiento del rubro gastronómico y quieres <br />
                            aportar desde tu vereda, esta es tu oportunidad. <strong>Escribamos <br />
                            juntos la receta para un mejor país.</strong>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="fomentos">
                    <div className="mensajeSerColaborador">
                        <h1><strong>Reactivacion de las PYMES</strong></h1>
                        <ul className="list-unstyled">
                            fomento y apoyo ala industria de restaurantes y <br />
                                cocinerías locales, así como a su red de <strong>pequeños <br />
                                productores</strong> y <strong>transportistas escolares</strong>.
                            </ul>
                    </div>

                    <div className="mensajeSerColaborador">
                        <h1><strong>Alimentaciòn Saludable</strong></h1>
                        <ul className="list-unstyled">
                            Los platos se conciben a partir de altos estándares <br />
                            de calidad, nutritivos y saludables cocinados por <br />
                                los restaurantes. Recetas tradicionales de <strong>400 <br />
                                gramos por ración.</strong>
                        </ul>
                    </div>

                    <div className="mensajeSerColaborador">
                        <h1><strong>Eduaciòn</strong></h1>
                        <ul className="list-unstyled">
                            Cada restaurante apadrina un comedor social con <br />
                            el compromiso de en el corto plazo, debido a la <br />
                            emergencia sanitaria, ser parte de los cursos de <br />
                            <strong>capacitación</strong> y <strong>educación a la comunidad.</strong>
                        </ul>
                    </div>

                    <div className="contenedorMasas">
                        <ul className="list-unstyled">
                            <img
                                className="imgMasas"
                                src={masas} alt=""
                            />

                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sumate