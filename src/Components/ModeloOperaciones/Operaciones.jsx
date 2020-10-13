import React from 'react'
import iconOperaciones from '../../img/iconOperaciones.svg';
import Instituciones from '../../img/Instituciones.svg';
import Restaurant from '../../img/Restaurant.svg'
import Transporte from '../../img/Transporte.svg'
import Distribucion from '../../img/Distribucion.svg'
import Apadrinamiento from '../../img/Apadrinamiento.svg'
import { Figure } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Operaciones.css';

const Operaciones = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



  return (


    <div className="operaciones">

   

        <div className="containerOperaciones">
          <div className="mensaje">
          <p className="parrafo1">Conoce nuestro <strong> Modelo de Operaciones</strong></p>
          <p className="parrafo2">Nuestro modelo de operaciones está al servicio de las áreas que buscamos potenciar, multiplicando lo recaudado, reactivando restaurantes,
             dando trabajo a transportistas y asegurando la llegada de alimento a los sectores que más lo necesitan.</p>
             </div>
          <Carousel className="CarruselOperaciones" responsive={responsive}> 
            <div className=" tarjetasModelo">
              <div className="ImagenOperaciones " >
              <Figure>
                <Figure.Image
                  width={165}
                  height={140}
                  alt="iconOperaciones"
                  src={iconOperaciones}
                />
              </Figure>
              </div>
              <div className="mensajeDonaciones">
              <p className="parraftitulo">Donaciones por la Web</p>
              <p className="parrafConte">Donantes ingresan a la web y aportan <strong> $3.000 CLP </strong> destinado a un almuerzo solidario.</p>
              </div>
            </div>

            <div className=" tarjetasModelo">
            <div className="ImagenOperaciones">
              <Figure>
                <Figure.Image
                  width={159}
                  height={159}
                  alt="Instituciones"
                  src={Instituciones}
                />
              </Figure>
              </div>
              <div className="mensajeDonaciones">
              <p className="parraftitulo" >Instituciones</p>
              <p className="parrafConte">Tanto entidades públicas como privadas <strong>multiplicarán lo recaudado</strong>  mediante la web.</p>
              </div>
            </div>

            <div className=" tarjetasModelo">
            <div className="ImagenOperaciones">
              <Figure>
                <Figure.Image
                  width={147}
                  height={152}
                  alt="Restaurant"
                  src={Restaurant}
                />
              </Figure>
              </div>
              <div className="mensajeDonaciones">
              <p className="parraftitulo">Restaurantes</p>
              <p className="parrafConte">Lo recolectado se entrega a los <strong>restaurantes</strong> para costear <strong>personal y gastos de producción</strong>.</p>
              </div>
            </div>

            <div className="tarjetasModelo">
            <div className="ImagenOperaciones">
              <Figure className="transporte">
                <Figure.Image
                  width={200}
                  height={200}
                  alt="Transporte"
                  src={Transporte}
                />
              </Figure>
              </div>
              <div className="mensajeDonaciones">
              <p className="parraftitulo">Transporte del Alimento</p>
              <p className="parrafConte">Un equipo de <strong>transporte escolar</strong>  estará a cargo de transportar los almuerzos solidarios.</p>
              </div>
            </div>

            <div className="tarjetasModelo">
            <div className="ImagenOperaciones">
              <Figure>
                <Figure.Image
                  width={147}
                  height={147}
                  alt="Distribucion"
                  src={Distribucion}
                />
              </Figure>
              </div>
              <div className="mensajeDonaciones">
              <p className="parraftitulo">Distribución</p>
              <p className="parrafConte">El alimento cocinado en restaurantes de la alianza llega a comedores en  <strong>sectores vulnerables</strong>.</p>
              </div>
            </div>

            <div className="tarjetasModelo">
            <div className="ImagenOperaciones">
              <Figure>
                <Figure.Image
                  width={167}
                  height={167}
                  alt="Apadrinamiento"
                  src={Apadrinamiento}
                />
              </Figure>
              </div>
              <div className="mensajeDonaciones">
              <p className="parraftitulo">Apadrinamiento</p>
              <p className="parrafConte">El restaurant <strong>apadrina a una comunidad</strong> y capacita en materia de <strong>alimentación saludable</strong>.</p>
              </div>
            </div>
          </Carousel>



        </div>
      </div>
    

  )
}

export default Operaciones
