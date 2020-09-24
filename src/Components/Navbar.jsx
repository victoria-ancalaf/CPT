import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Navbar.css'
import LogoCPT from '../img/comida-para-todos-logo.png';


const Navbar = () => {
    return (
        <div>
            <header
                className="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg"
                color-on-scroll="50">
                <div className="container">
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