import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Navbar.css'
import LogoCPT from '../img/comida-para-todos-logo.png';



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
                        <li>Nosotros</li>
                        <li>Cómo Ayudar</li>
                        <li>Acción 2030</li>
                        <li>Portal Colaboradores</li>
                        <li>Contacto</li>
                    </ul>
                    <button className="btn-donations"> 
                        DONACIONES
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Navbar;