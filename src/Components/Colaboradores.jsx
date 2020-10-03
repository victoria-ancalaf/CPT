import React from 'react'
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

//import { autoplayPlugin } from '@brainhubeu/react-carousel';

//import { Carousel } from 'react-bootstrap';
import cava from '../img/cava.png';
import aurora from '../img/aurora.png';
import comedor from '../img/comedor.png';
import foodies from '../img/foodies.png';
import restaurante from '../img/99restaurante.jpg'
import ambrosiaBistro from '../img/ambrosiaBistro.jpg'
import boa from '../img/boa.png'
import cafeSanJuan from '../img/cafeSanJuan.png'
import caperucitaLobo from '../img/caperucitaLobo.png'
import colab from '../img/colab.png'
import cultiva from '../img/cultiva.png'
import elContenedor from '../img/elContenedor.jpg'
import estudioEnoki from '../img/estudioEnoki.jpg'
import fundacionGastronomiaSocial from '../img/fundacionGastronomiaSocial.png'
import laChimba from '../img/laChimba.png'
import land from '../img/land.jpeg'
import lasCondenadas from '../img/lasCondenadas.jpeg'
import manoChef from '../img/manoChef.jpg'
import muniAntofagasta from '../img/muniAntofagasta.png'
import niam from '../img/niam.png'
import nossoPrato from '../img/nossoPrato.jpeg'
import pebre from '../img/pebre.png'
import puertoClaro from '../img/puertoClaro.png'
import rossoNero from '../img/rossoNero.png'
import socialGastronomy from '../img/socialGastronomy.png'
import tallerMacera from '../img/tallerMacera.png'
import tele13 from '../img/tele13.png'

import '../Styles/Colaboradores.css'


const Colaboradores = () => {
    return (

        <Carousel
            plugins={[
                'infinite'
            ]}

            autoPlay={2000}
            animationSpeed={1000}
        >

            <img src={cava} width="300px" height="150px" />
            <img src={aurora} width="300px" height="150px" />
            <img src={comedor} width="300px" height="150px" />
            <img src={foodies} width="300px" height="150px" />
            <img src={restaurante} width="300px" height="150px" />
            <img src={ambrosiaBistro} width="300px" height="150px" />
            <img src={boa} width="300px" height="150px" />
            <img src={cafeSanJuan} width="300px" height="150px" />
            <img src={colab} width="300px" height="150px" />
            <img src={caperucitaLobo} width="300px" height="150px" />
            <img src={cultiva} width="300px" height="150px" />
            <img src={elContenedor} width="300px" height="150px" />
            <img src={land} width="300px" height="150px" />
            <img src={laChimba} width="300px" height="150px" />
            <img src={lasCondenadas} width="300px" height="150px" />
            <img src={manoChef} width="300px" height="150px" />
            <img src={muniAntofagasta} width="300px" height="150px" />
            <img src={niam} width="300px" height="150px" />
            <img src={nossoPrato} width="300px" height="150px" />
            <img src={pebre} width="300px" height="150px" />
            <img src={rossoNero} width="300px" height="150px" />
            <img src={puertoClaro} width="300px" height="150px" />
            <img src={socialGastronomy} width="300px" height="150px" />
            <img src={tallerMacera} width="300px" height="150px" />
            <img src={tele13} width="300px" height="150px" />
            <img src={estudioEnoki} width="300px" height="150px" />
            <img src={fundacionGastronomiaSocial} width="300px" height="150px" />

        </Carousel>



    )
}

export default Colaboradores
