import React from 'react'
import { Carousel } from 'react-bootstrap';
import carousel1 from '../img/carousel1.jpg';
import carousel2 from '../img/carousel2.jpg';
import '../Styles/Carrusel.css';


const Carrusel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="imagenCarrusel"
            src={carousel1}
            alt="First slide" 
          />

          <Carousel.Caption className="carouselMensaje" >
            <div class="container ">
              <h1 >Regala una cena en esta <strong>Navidad</strong>. Escribamos juntos <br />
                <strong> la receta para un mejor país </strong>.</h1>
              <button type="button" className="btn btn-ttc" >
                Donar una Cena Navideña
              </button>
            </div>

          </Carousel.Caption>

        </Carousel.Item>
        
        <Carousel.Item>
          <img className="imagenCarrusel"
            src={carousel2}
            alt="Second slide"
          />
          <Carousel.Caption className="carouselMensaje" >
            <div class="container ">
              <h1 >Puedes aportar con un <strong>almuerzo solidario </strong> por solo <strong>$3.000 CLP</strong></h1>
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
