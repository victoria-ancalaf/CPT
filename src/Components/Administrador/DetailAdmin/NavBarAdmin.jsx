import React from 'react'
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import LogoCPT from '../../../img/Logo_comidaparatodos_blanco.png';
import Salir from '../../../img/Salir.svg';
import IconMensaje from '../../../img/IconMensaje.svg'
import IconCampana from '../../../img/IconCampana.svg';
import IconSettings from '../../../img/IconSettings.svg';
import IconSearch from '../../../img/IconSearch.svg';
import './NavBarAdmin.css'
import {firebase} from '../../../firebase'

const NavBarAdmin = () => {
    const toggleHome = () => {
		scroll.scrollToTop();
	};
    return (
        <header className="navbar">
			<div className="containerNavAdmin">
				<img className="logoNav"  src={LogoCPT} onClick={toggleHome} alt="Comida para todos" />
                <input className="form-control searchSpace " type="text" placeholder="Search" aria-label="Search"></input>
                <img className="IconSearch"  src={IconSearch} alt="Search" />
				<ul className="navLinks">
					<Link to="/">
                    <img className="IconSettings"  src={IconSettings} alt="Settings" />
					</Link>
					<Link to="/">
                    <img className="IconCampana"  src={IconCampana} alt="Aviso" />
					</Link>
					<Link to="/">
                    <img className="IconMensaje"  src={IconMensaje} alt="Mensaje" />
					</Link>
					<Link to="/">
                       <img className="iconSalir"  src={Salir} onClick={() => firebase.auth().signOut()} alt="Cerrar Sesion" />
                       
					</Link>
				</ul>
			</div>
		</header>
    )
}

export default NavBarAdmin
