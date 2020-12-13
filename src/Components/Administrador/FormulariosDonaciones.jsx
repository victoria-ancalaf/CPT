import React from "react";
import "./FormulariosDonaciones.css";
import NavBarAdmin from "./DetailAdmin/NavBarAdmin";
import DatosAdmin from "./DetailAdmin/DatosAdmin";
import EstadisticasAdmin from "./DetailAdmin/EstadisticasAdmin";
import DetailHuertos from "./DetailAdmin/DetailHuertos";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Row } from "react-bootstrap";
import DetailAlimentos from "./DetailAdmin/DetailAlimentos";
import DetailCapacitaciones from "./DetailAdmin/DetailCapacitaciones";

const FormulariosDonaciones = () => {
  return (
    <div className="containerAdmin mt-5 mb-2">
      <NavBarAdmin />
      <DatosAdmin />
      <EstadisticasAdmin />
      <div className="tabcontenido">
        <Tab.Container>
          <Row>
            <Tabs
              className="flex-column btnContenido"
              defaultActiveKey="Almuerzos"
            >
              <Tab eventKey="Almuerzos" title="Almuerzos" className="btnTab">
                <h1>Almuerzos</h1>
              </Tab>
              <Tab
                eventKey="Bco.Alimentos"
                title="Bco. Alimentos"
                className="btnTab"
              >
                <DetailAlimentos />
              </Tab>
              <Tab
                eventKey="Capacitaciones"
                title="Capacitaciones"
                className="btnTab"
              >
                <DetailCapacitaciones />
              </Tab>
              <Tab
                eventKey="Colaboradores"
                title="Colaboradores"
                className="btnTab"
              >
                <h1>Colaboradores</h1>
              </Tab>
              <Tab
                eventKey="HuertosUrbanos"
                title="Huertos Urbanos"
                className="btnTab"
              >
                <DetailHuertos />
              </Tab>
              <Tab
                eventKey="Navidad"
                title="Navidad"
                className="btnTab"
              >
                <h1>Navidad </h1>
              </Tab>
              <Tab
                eventKey="Voluntariado"
                title="Voluntariado"
                className="btnTab"
              >
                <h1>Voluntariado </h1>
              </Tab>
            </Tabs>
          </Row>
        </Tab.Container>
      </div>
      <p className="msnFooter">
        © 2020 Comida Para Todos - Todos los derechos reservados
      </p>
    </div>
  );
};

export default FormulariosDonaciones;
