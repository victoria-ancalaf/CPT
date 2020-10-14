import React from 'react'
import './Beneficiarios.css'


const Beneficiarios = () => {
    return (
        <div className="container-beneficiarios">
            <div className="bene-text">
                <p className="bene-title">
                    Quiénes son <strong>los beneficiarios</strong>
                </p>
                <p className="bene-paragraph">
                Los principales beneficiarios de Comida Para Todos son las comunidades<br></br> 
                y trabajadores que a causa de la contingencia han visto su principal<br></br> 
                actividad económica perjudicada.
                </p>
            </div>
            <div className="bene-cards">
                <div className="beneficiarios-card">
                    <div className="bene-card-left-1">
                        <p className="bene-card-left-text">
                            Sectores<br></br>
                            Vulnerables
                        </p>
                    </div>
                    <div className="bene-card-right">
                        <p className="right-card-text">
                        Proveemos a las<br></br> 
                        comunidades de mayor<br></br> 
                        acceso a alimentación<br></br>
                        gratuita, nutritiva y<br></br> 
                        balanceada, así como más<br></br> 
                        seguridad y educación<br></br>
                        alimentaria.
                        </p>
                    </div>
                </div>

                <div className="beneficiarios-card">
                    <div className="bene-card-left-2">
                        <p className="bene-card-left-text">
                            Restaurantes
                        </p>
                    </div>
                    <div className="bene-card-right">
                        <p className="right-card-text">
                        Nos encargamos de ayudar a<br></br>
                        la reactivación de actividades<br></br>
                        económicas de distintos <br></br>
                        restaurantes, asumiendo un <br></br>
                        compromiso social con ellos <br></br>
                        y evitando despidos masivos<br></br>
                        a causa de la contingencia.
                        </p>
                    </div>
                </div>

                <div className="beneficiarios-card">
                    <div className="bene-card-left-3">
                        <p className="bene-card-left-text">
                            Pequeños<br></br>
                            Productores
                        </p>
                    </div>
                    <div className="bene-card-right">
                        <p className="right-card-text">
                        Apoyamos a los pequeños <br></br>
                        productores a alcanzar una <br></br>
                        mayor estabilidad <br></br>
                        económica, lo que significa <br></br>
                        también una nueva fuente de <br></br>
                        ingresos y mayor <br></br>
                        fortalecimiento de sus redes <br></br>
                        de distribución.
                        </p>
                    </div>
                </div>

                <div className="beneficiarios-card">
                    <div className="bene-card-left-4">
                        <p className="bene-card-left-text">
                            Transporte<br></br>
                            Escolar
                        </p>
                    </div>
                    <div className="bene-card-right">
                        <p className="right-card-text">
                        Ayudamos a los <br></br>
                        transportistas escolares a <br></br>
                        obtener una mayor <br></br>
                        estabilidad económica, <br></br>
                        consiguiendo una fuente de <br></br>
                        ingresos alternativa y así <br></br>
                        reactivar su actividad.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beneficiarios
