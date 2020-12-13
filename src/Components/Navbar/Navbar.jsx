import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import LogoCPT from "../../img/Logo_comidaparatodos_blanco.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="containerNavbar">
        <NavLink to="/">
          <img className="img-nav-logo" src={LogoCPT} alt="Comida para todos" />
        </NavLink>
        <ul className="navLinks">
          <li className="list-navbar">Nosotros</li>

          <li className="list-navbar">Cómo Ayudar</li>

          <li className="list-navbar">Transparencia</li>

          <li className="list-navbar">Colaboradores</li>
        </ul>
        <button className="btn-nav-donar">Donar</button>
      </div>
    </header>
  );
};

export default Navbar;
