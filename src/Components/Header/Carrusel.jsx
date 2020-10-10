import React from 'react'
import { Carousel } from 'react-bootstrap';
import carousel from '../../img/carousel.jpg';
import './Carrusel.css';
import ComidaParaTodosGif3 from '../../img/ComidaParaTodosGif3.gif';

const Carrusel = () => {

  return (
    <div>
      <Carousel>
      <Carousel.Item>
          <img className="imagenCarrusel"
            src={ComidaParaTodosGif3}
            alt="slideGif"
          />
          <Carousel.Caption className="carouselMensaje" >
            <div class="container ">
              <p>Regala una cena en esta <strong>Navidad</strong>. Escribamos juntos <strong>la receta para un mejor país</strong>.</p>
              <button type="button" className="btn btn-ttc" >
               Donar una Cena Navideña
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="imagenCarrusel2"
            src={carousel}
            alt="Second slide"
          />
          <Carousel.Caption className="carouselMensaje" >
            <div class="container ">
              <p>Puedes aportar con un <strong>almuerzo solidario </strong> por solo <strong>$3.000 CLP</strong></p>
              <button type="button" className="btn btn-ttc" >
                Donar un Almuerzo Solidario
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

       
       
     

      </Carousel>


    </div>
  )
}

export default Carrusel
