import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { FullPage, Slide } from 'react-full-page';
import PortalColaboradores from '../Components/PortalColaboradores/PortalColaboradores'
import SerColaborador from '../Components/PortalColaboradores/SerColaborador.jsx'
import Colaboradores from '../Components/Colaboradores/Colaboradores.jsx'
import '../Styles/Main.css';


const MainPortalColaboradores = () => {
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
                    <Colaboradores />
                </Slide>
                <Slide>
                    <Footer />
                </Slide>
            </FullPage>

        </div>

    );
};

export default MainPortalColaboradores;