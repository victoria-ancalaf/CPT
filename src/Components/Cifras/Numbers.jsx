import React from "react";
import Plato from "../../img/Plato_Corazon.svg";
import Comida from "../../img/Comida-Sana.svg";
import Chef from "../../img/Chef.svg";
import Olla from "../../img/Olla.svg";
import "./Numbers.css";
import "./CountUpNumber";
import CountUpNumber from "./CountUpNumber";

const Numbers = () => {
  return (
    <div className="containerNumbers">
      <div className="numbers-main-l">
        <p className="number-letter1">
          Esto es posible <strong>gracias a ti</strong>
        </p>
        <p className="number-letter2">
          En el corto tiempo que llevamos como fundación, hemos conseguido
          cifras
          <br />
          increíbles gracias a todos quienes han confiado en nosotros.
        </p>
        <button className="btn-cifras">Conoce nuestros logros</button>
      </div>

      <div className="icon-container">
        <div className="icon-text">
          <img src={Olla} alt="Comedores" />
          <CountUpNumber className="count" end={28} duration={1.5} />
          <p className="p-cifras-icon">
            Comedores <br />
            apoyados
          </p>
        </div>
        <div className="icon-text">
          <img src={Chef} alt="Puestos empleo" />
          <CountUpNumber className="count" end={72} duration={1.5} />
          <p className="p-cifras-icon">
            Puestos de empleo
            <br />
            activados
          </p>
        </div>
        <div className="icon-text">
          <img src={Comida} alt="Comen a diario" />
          <CountUpNumber
            className="count"
            end={3.2}
            decimals={3}
            duration={1.5}
          />
          <p className="p-cifras-icon">
            Personas comen a<br />
            diario
          </p>
        </div>
        <div className="icon-text">
          <img src={Plato} alt="Almuerzos solidarios" />
          <CountUpNumber
            className="count"
            end={160}
            decimals={3}
            duration={1.5}
          />
          <p className="p-cifras-icon">
            Almuerzos solidarios
            <br />
            recaudados
          </p>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
