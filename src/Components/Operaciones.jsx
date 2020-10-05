import React from 'react'
import iconOperaciones from '../img/iconOperaciones.png';
import Instituciones from '../img/Instituciones.svg';
import Restaurant from '../img/Restaurant.svg'
import Transporte from '../img/Transporte.svg'
import Distribucion from '../img/Distribucion.svg'
import Apadrinamiento from '../img/Apadrinamiento.svg'
import { Figure } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Styles/Operaciones.css';

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

      <div className="row ">

        <div className="container">
          <div className="mensaje">
          <h1>Conoce nuestro <strong>Modelo de Operaciones</strong></h1>
          <p>Nuestro modelo de operaciones está al servicio de las áreas que buscamos potenciar, multiplicando lo recaudado, reactivando restaurantes,
             dando trabajo a transportistas y asegurando la llegada de alimento a los sectores que más lo necesitan.</p>
             </div>
          <Carousel responsive={responsive}> 
            <div className="col-12 logo">
              <div className="ImagenOperaciones">
              <Figure>
                <Figure.Image
                  width={183}
                  height={183}
                  alt="iconOperaciones"
                  src={iconOperaciones}
                />
              </Figure>
              </div>
              <div className="mensajeDonaciones">
              <h3><strong>Donaciones por la Web</strong></h3>
              <p>Donantes ingresan a la web y aportan <strong> $3.000 CLP </strong> destinado a un almuerzo solidario.</p>
              </div>
            </div>

            <div className="col-12 logo">
            <div className="ImagenOperaciones">
              <Figure>
                <Figure.Image
                  width={183}
                  height={183}
                  alt="Instituciones"
                  src={Instituciones}
                />
              </Figure>
              </div>
              <div className="mensajeDonaciones">
              <h3><strong>Instituciones</strong></h3>
              <p>Tanto entidades públicas como privadas <strong>multiplicarán lo recaudado</strong>  mediante la web.</p>
              </div>
            </div>

            <div className="col-12 logo">
            <div className="ImagenOperaciones">
              <Figure>
                <Figure.Image
                  width={183}
                  height={183}
                  alt="Restaurant"
                  src={Restaurant}
                />
              </Figure>
              </div>
              <div className="mensajeDonaciones">
              <h3><strong>Restaurantes</strong></h3>
              <p>Lo recolectado se entrega a los <strong>restaurantes</strong> para costear <strong>personal y gastos de producción</strong>.</p>
              </div>
            </div>

            <div className="col-12 logo">
            <div className="ImagenOperaciones">
              <Figure>
                <Figure.Image
                  width={183}
                  height={183}
                  alt="Transporte"
                  src={Transporte}
                />
              </Figure>
              </div>
              <div className="mensajeDonaciones">
              <h3><strong>Transporte del Alimento</strong></h3>
              <p>Un equipo de <strong>transporte escolar</strong>  estará a cargo de transportar los almuerzos solidarios.</p>
              </div>
            </div>

            <div className="col-12 logo">
            <div className="ImagenOperaciones">
              <Figure>
                <Figure.Image
                  width={183}
                  height={183}
                  alt="Distribucion"
                  src={Distribucion}
                />
              </Figure>
              </div>
              <div className="mensajeDonaciones">
              <h3><strong>Distribución</strong></h3>
              <p>El alimento cocinado en restaurantes de la alianza llega a comedores en  <strong>sectores vulnerables</strong>.</p>
              </div>
            </div>

            <div className="col-12 logo">
            <div className="ImagenOperaciones">
              <Figure>
                <Figure.Image
                  width={183}
                  height={183}
                  alt="Apadrinamiento"
                  src={Apadrinamiento}
                />
              </Figure>
              </div>
              <div className="mensajeDonaciones">
              <h3><strong>Apadrinamiento</strong></h3>
              <p>El restaurant <strong>apadrina a una comunidad</strong> y capacita en materia de <strong>alimentación saludable</strong>.</p>
              </div>
            </div>
          </Carousel>



        </div>
      </div>
    </div>

  )
}

export default Operaciones
