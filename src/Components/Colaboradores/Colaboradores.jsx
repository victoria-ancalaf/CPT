import React from 'react'
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
//import { Carousel} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
//import { Carousel } from 'react-bootstrap';
import cava from '../../img/cava.png';
import aurora from '../../img/aurora.png';
import comedor from '../../img/comedor.png';
import foodies from '../../img/foodies.png';
import restaurante from '../../img/99restaurante.jpg'
import ambrosiaBistro from '../../img/ambrosiaBistro.jpg'
import boa from '../../img/boa.png'
import cafeSanJuan from '../../img/cafeSanJuan.png'
import caperucitaLobo from '../../img/caperucitaLobo.png'
import colab from '../../img/colab.png'
import cultiva from '../../img/cultiva.png'
import elContenedor from '../../img/elContenedor.jpg'
import estudioEnoki from '../../img/estudioEnoki.jpg'
import fundacionGastronomiaSocial from '../../img/fundacionGastronomiaSocial.png'
import laChimba from '../../img/laChimba.png'
import land from '../../img/land.jpeg'
import lasCondenadas from '../../img/lasCondenadas.jpeg'
import manoChef from '../../img/manoChef.jpg'
import muniAntofagasta from '../../img/muniAntofagasta.png'
import niam from '../../img/niam.png'
import nossoPrato from '../../img/nossoPrato.jpeg'
import pebre from '../../img/pebre.png'
import puertoClaro from '../../img/puertoClaro.png'
import rossoNero from '../../img/rossoNero.png'
import socialGastronomy from '../../img/socialGastronomy.png'
import tallerMacera from '../../img/tallerMacera.png'
import tele13 from '../../img/tele13.png'

import './Colaboradores.css'


const Colaboradores = () => {
    return (

        <Carousel
            plugins={[
                'infinite'
            ]}

            autoPlay={2000}
            animationSpeed={1000}
        >

            <img src={cava} alt="" width="300px" height="150px" />
            <img src={aurora} alt="" width="300px" height="150px" />
            <img src={comedor} alt="" width="300px" height="150px" />
            <img src={foodies} alt="" width="300px" height="150px" />
            <img src={restaurante} alt="" width="300px" height="150px" />
            <img src={ambrosiaBistro} alt="" width="300px" height="150px" />
            <img src={boa} alt="" width="300px" height="150px" />
            <img src={cafeSanJuan} alt="" width="300px" height="150px" />
            <img src={colab} alt="" width="300px" height="150px" />
            <img src={caperucitaLobo} alt="" width="300px" height="150px" />
            <img src={cultiva} alt="" width="300px" height="150px" />
            <img src={elContenedor} alt="" width="300px" height="150px" />
            <img src={land} alt="" width="300px" height="150px" />
            <img src={laChimba} alt="" width="300px" height="150px" />
            <img src={lasCondenadas} alt="" width="300px" height="150px" />
            <img src={manoChef} alt="" width="300px" height="150px" />
            <img src={muniAntofagasta} alt="" width="300px" height="150px" />
            <img src={niam} alt="" width="300px" height="150px" />
            <img src={nossoPrato} alt="" width="300px" height="150px" />
            <img src={pebre} alt="" width="300px" height="150px" />
            <img src={rossoNero} alt="" width="300px" height="150px" />
            <img src={puertoClaro} alt="" width="300px" height="150px" />
            <img src={socialGastronomy} alt="" width="300px" height="150px" />
            <img src={tallerMacera} alt="" width="300px" height="150px" />
            <img src={tele13} alt="" width="300px" height="150px" />
            <img src={estudioEnoki} alt="" width="300px" height="150px" />
            <img src={fundacionGastronomiaSocial} alt="" width="300px" height="150px" />

        </Carousel>



    )
}

export default Colaboradores
