import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Navbar.css'
import LogoCPT from '../img/Logo_comidaparatodos_blanco.png';



const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [navLinks, setNavLinks] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    const changeColor = () => {
        if(window.scrollY >= 80) {
            setNavLinks(true)
        } else {
            setNavLinks(false);
        }
    }

    window.addEventListener('scroll', changeColor);


    return (
        <div>
            <header
                className={navbar ? 'navbar active' : 'navbar'}>
                <div className="containerNavbar">
                   <img src={LogoCPT} alt="Comida para todos" /> 
                    <ul className={navLinks ? 'navLinks active' : 'navLinks'}>
                        <li className="list-navbar">Nosotros</li>
                        <li className="list-navbar">Cómo Ayudar</li>
                        <li className="list-navbar">Acción 2030</li>
                        <li className="list-navbar">Portal Colaboradores</li>
                        <li className="list-navbar">Contacto</li>
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default Navbar;