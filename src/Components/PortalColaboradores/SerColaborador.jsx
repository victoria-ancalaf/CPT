import React from 'react'
import tomates from '../../img/tomates.jpg'
import iconNave from '../../img/iconNave.svg'
import iconHuerta from '../../img/iconHuerta.svg'
import iconFoco from '../../img/iconFoco.svg'
import './SerColaborador.css';


const SerColaborador = () => {
    return (
        <div className="containerSerColaborador pt-5">
            <div className="serColaborador px-lg-5 pt-5 pb-5 mb-5">
                <div className="row">
                    <div className="tituloColaborador col-md-6 col-sm-6 pt-5">
                        <h1> Què es <strong>Ser Colaborador</strong></h1>
                        <div className="msjSerColaborador">
                            <ul className="list-unstyled">
                                Los colaboradores son restaurantes que aportan con la <strong>elaboración <br />
                                de los almuerzos solidarios</strong>, financiando los gastos de producción <br />
                                mediante las donaciones. Detrás de cada plato servido hay:
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="fomentos">
                <ul className="list-unstyled">
                            <img
                                className="imgNave"
                                src={iconNave} alt=""
                            />

                        </ul>
                    <div className="mensajeSerColaborador">

                        <h1><strong>Reactivacion de las PYMES</strong></h1>
                        <ul className="list-unstyled">
                            fomento y apoyo ala industria de restaurantes y <br />
                                cocinerías locales, así como a su red de <strong>pequeños <br />
                                productores</strong> y <strong>transportistas escolares</strong>.
                            </ul>
                    </div>

                    <ul className="list-unstyled">
                            <img
                                className="imgHuerta"
                                src={iconHuerta} alt=""
                            />

                        </ul>

                    <div className="mensajeSerColaborador">

                        <h1><strong>Alimentaciòn Saludable</strong></h1>
                        <ul className="list-unstyled">
                            Los platos se conciben a partir de altos estándares <br />
                            de calidad, nutritivos y saludables cocinados por <br />
                                los restaurantes. Recetas tradicionales de <strong>400 <br />
                                gramos por ración.</strong>
                        </ul>
                    </div>
                    <ul className="list-unstyled">
                            <img
                                className="imgFoco"
                                src={iconFoco} alt=""
                            />

                        </ul>
                    <div className="mensajeSerColaborador">

                        <h1><strong>Eduaciòn</strong></h1>
                        <ul className="list-unstyled">
                            Cada restaurante apadrina un comedor social con <br />
                            el compromiso de en el corto plazo, debido a la <br />
                            emergencia sanitaria, ser parte de los cursos de <br />
                            <strong>capacitación</strong> y <strong>educación a la comunidad.</strong>
                        </ul>
                    </div>

                    <div className="contenedorTomates">
                        <ul className="list-unstyled">
                            <img
                                className="imgTomates"
                                src={tomates} alt=""
                            />

                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SerColaborador