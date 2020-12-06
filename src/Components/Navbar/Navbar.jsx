import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import LogoCPT from '../../img/Logo_comidaparatodos_blanco.png';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
	
	
	return (
		<header className="navbar">
			<div className="containerNavbar">
				<NavLink to="/">
				<img className="img-nav-logo" src={LogoCPT} alt="Comida para todos" />
				</NavLink>
				<ul className="navLinks">
					<Link to="/Nosotros">
						<li className="list-navbar">Nosotros</li>
					</Link>
					<Link to="/ComoAyudar">
						<li className="list-navbar">Cómo Ayudar</li>
					</Link>
					<Link to="/Transparencia">
						<li className="list-navbar">Transparencia</li>
					</Link>
					<Link to="/Accion2030">
						<li className="list-navbar">Acción 2030</li>
					</Link>
					<Link to="/PortalColaboradores">
						<li className="list-navbar">Colaboradores</li>
					</Link>
				</ul>
				<button className="btn-nav-donar">Donar</button>
			</div>
		</header>
	);
};

export default Navbar;
