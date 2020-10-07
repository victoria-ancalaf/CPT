import React from 'react'
import { Carousel } from 'react-bootstrap';
import carousel2 from '../../img/carousel2.jpg';
import './Carrusel.css';
import { useState, useRef } from 'react';


const Carrusel = () => {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    isPlaying ? video.pause() : video.play();

    setIsPlaying(!isPlaying);

  }
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <div className="imagenCarrusel carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <video  className="video-fluid" autoplay loop muted ref={videoRef} onClick={handlePlay}>
                  <source src="Videos/ComidaParaTodos.mp4" type="video/mp4" />
                </video>
                <Carousel.Caption className="carouselMensaje" >
                  <div className="container ">
                    <h1 >Regala una cena en esta <strong>Navidad</strong>. Escribamos juntos <br />
                      <strong> la receta para un mejor país </strong>.</h1>
                    <button type="button" className="btn btn-ttc" >
                      Donar una Cena Navideña
                    </button>
                  </div>

                </Carousel.Caption>
              </div>
            </div>
            <a className="carousel-control-prev" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
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
