import React from 'react'
import cocinando from '../../img/cocinando.jpg';
import manzanas from '../../img/manzanas.jpg';
import './PortalColaboradores.css';
//import SerColaborador from './SerColaborador';




const PortalColaboradores = () => {
    return (

        <div className="portalColaboradores">
           {/* <img className="imagenPortal"
                src={cocinando}
                alt="First slide"
            />
    */}
            <div className="colaboradores">
                    <p className="p-1-style">
                        Ùnete a
                    <br />
                        <strong> nuestra alianza</strong>
                    </p>
                    <p className="p-2-style">
                        En Comida Para Todos contamos con una red de colaboradores que hacen
                        posible nuestro sueño día a día, llevando alimento saludable a los sectores
                        que más lo necesitan.
                    </p>

            </div>
  {/*
            <div className="serColaborador">
                <div className="mensajeColabora">
                    <h1>Qué es Ser Colaborador</h1>
                    <p>Los colaboradores son restaurantes que aportan con la elaboración de los almuerzos solidarios, financiando los gastos de producción mediante las donaciones. Detrás de cada plato servido hay: </p>
                </div>
                <div className="contenidoColabora">
                    <p> Reactivación de las PYMES Fomento y apoyo a la industria de restaurantes y cocinerías locales, así como a su red de pequeños productores y transportistas escolares.</p>
                </div>

                <div>
                  
                    <img className="imagenManzanas"
                        src={manzanas}
                        alt="Second slide"
                    />

                    <div className="portalMensaje">
                        <div class="container ">
                            <h1>Únete a nuestra alianza</h1>
                            <p>En Comida Para Todos contamos con una red de colaboradores que hacen posible nuestro sueño día a día, llevando alimento saludable a los sectores que más lo necesitan.</p>

                        </div>
                    </div>
                   
                </div>




            </div>
             */}
           {/* <SerColaborador />*/}
        </div>




    )
}

export default PortalColaboradores
