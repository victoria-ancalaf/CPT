import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Navbar.css'
import LogoCPT from '../img/comida-para-todos-logo.png';



const Navbar = () => {

    const [navbar, setNavbar] = useState(false);
   
    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <div>
            <header
                className={navbar ? 'navbar active' : 'navbar'}>
                <div className="containerNavbar">
                   <img src={LogoCPT} alt="Comida para todos" /> 
                    <ul className="nav-links">
                        <li>Categoría1</li>
                        <li>Categoría2</li>
                        <li>Categoría3</li>
                        <li>Categoría4</li>
                        <li>Categoría5</li>
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