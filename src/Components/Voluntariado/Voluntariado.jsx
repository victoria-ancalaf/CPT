import React from "react";
import Capacitaciones from "./Capacitaciones";
import Voluntario from "./Voluntario";
import "../Formas-de-Donar/FormasDonar.css";

const Voluntariado = () => {
  return (
    <div className="formasDonar-container">
      <div className="formar-donar-text">
        <p className="fdonar-p-1">
          Tipos <strong>de Voluntariado</strong>
        </p>
        <p className="fdonar-p-2">
          Creemos que la unión hace la fuerza, por eso estamos felices de
          aceptar gente en <br></br>
		  nuestro equipo que pueda aportar a la comunidad
          ofreciendo capacitaciones y talento.
        </p>
        <button className="btn-formas-donar">Más información</button>
      </div>
      <div className="fdonar-card-container">
        <Capacitaciones />
        <Voluntario />
      </div>
    </div>
  );
};

export default Voluntariado;
