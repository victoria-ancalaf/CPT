import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import LogoCPT from '../../img/Logo_comidaparatodos_blanco.png';
import { Link } from "react-router-dom";
import { animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
    // const [navbar, setNavbar] = useState(false);
    // const [navLinks, setNavLinks] = useState(false);

    // const changeBackground = () => {
    //     if(window.scrollY >= 80) {
    //         setNavbar(true)
    //     } else {
    //         setNavbar(false);
    //     }
    // }

    // window.addEventListener('scroll', changeBackground);

    // const changeColor = () => {
    //     if(window.scrollY >= 80) {
    //         setNavLinks(true)
    //     } else {
    //         setNavLinks(false);
    //     }
    // }

    // window.addEventListener('scroll', changeColor);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <div>
            <header
                className="navbar">
                <div className="containerNavbar">
                   <img src={LogoCPT} onClick={toggleHome} alt="Comida para todos" /> 
                    <ul className="navLinks">
                        <Link to="/Nosotros">
                        <li className="list-navbar">Nosotros</li>
                        </Link>
                        <Link to="/ComoAyudar">
                        <li className="list-navbar">Cómo Ayudar</li>
                        </Link>
                        <Link to="/Accion2030">
                        <li className="list-navbar">Acción 2030</li>
                        </Link>
                        <Link to="/PortalColaboradores">
                        <li className="list-navbar">Portal Colaboradores</li>
                        </Link>
                        <Link to="/Contacto">
                        <li className="list-navbar">Contacto</li>
                        </Link>
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Navbar;