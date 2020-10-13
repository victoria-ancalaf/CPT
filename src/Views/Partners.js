import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { FullPage, Slide } from 'react-full-page';
import PortalColaboradores from '../Components/PortalColaboradores/PortalColaboradores'
import SerColaborador from '../Components/PortalColaboradores/SerColaborador.jsx'
import Colaboradores from '../Components/Colaboradores/Colaboradores.jsx'
import '../Styles/Main.css';
import Capacidades from '../Components/PortalColaboradores/Capacidades';
import Sumate from '../Components/PortalColaboradores/Sumate'

const Partners = () => {
    return (
        <div>
            <FullPage>
                    <Navbar />
                <Slide>
                    <PortalColaboradores />
                </Slide>
                <Slide>
                    <SerColaborador />
                </Slide>
                <Slide>
                    <Capacidades />
                </Slide>
                <Slide>
                    <Sumate />
                </Slide>
                <Slide>
                    <Colaboradores />
                </Slide>
                <Slide>
                    <Footer />
                </Slide>
            </FullPage>
        </div>
    )
}

export default Partners
