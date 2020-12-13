import React from "react";
import sirviendoComida from "../../img/sirviendoComida.jpeg";
import "./Sumate.css";

const Sumate = () => {
  return (
    <div className="containerSumate px-lg-2 pt-5 pb-2 mb-2">
      <div className="footer-meddle">
        <div className="main-container px-lg-4 pt-5 pb-6">
          <div className="row">
            <div className="logoMasas">
              <ul className="list-unstyled">
                <img className="imgMasas" src={sirviendoComida} alt="" />
              </ul>
            </div>
          </div>

          <div className="contactoSumate">
            <ul className="list-unstyled">
              <div className="tituloSumate">
                <h1>
                  {" "}
                  Súmate <strong> al equipo</strong>
                </h1>
                <p className="parrafoSumate">
                  Si tienes un emprendimiento del rubro gastronómico y quieres{" "}
                  <br />
                  aportar desde tu vereda, esta es tu oportunidad.{" "}
                  <strong>
                    Escribamos <br />
                    juntos la receta para un mejor país.
                  </strong>
                </p>
              </div>
              <div className="contenedorNombre">
                <ul className="list-unstyled">
                  <li>
                    <input
                      className="nombre"
                      placeholder="Nombre Completo"
                    ></input>
                  </li>
                </ul>
              </div>
              <div className="contenedorEmail">
                <ul className="list-unstyled">
                  <ul className="list-unstyled">
                    <li>
                      <input
                        className="mailSumatecolab"
                        placeholder="Correo Electronico"
                      ></input>
                    </li>
                  </ul>
                </ul>
              </div>
              <div className="contenedorTlf">
                <ul className="list-unstyled">
                  <li>
                    <input className="tlf" placeholder="Teléfono"></input>
                  </li>
                </ul>
              </div>
              <li>
                <input className="comunacolab" placeholder="Comuna"></input>
              </li>

              <div className="contenedorRegion">
                <ul className="list-unstyled">
                  <li>
                    <input className="region" placeholder="Región"></input>
                  </li>
                </ul>
              </div>
              <li>
                <input
                  className="emprendimiento"
                  placeholder="Nombre de tu Emprendimiento"
                ></input>
              </li>
              <li>
                <input
                  className="info"
                  placeholder="¿Cómo te enteraste de nosotros?"
                ></input>
              </li>
              <li>
                <input
                  className="horario"
                  placeholder="Coméntanos tu disponibilidad horaria para contactarte"
                ></input>
              </li>

              <div className="enviar">
                <button className="btn-sumate">Enviar</button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sumate;
