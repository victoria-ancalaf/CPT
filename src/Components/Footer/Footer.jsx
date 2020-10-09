import React from 'react';
import logoNaranjo from '../../img/logoNaranjo.png';
import iconInstagram from '../../img/CPT_Instagram.svg';
import iconEmail from '../../img/CPT_Mail.svg';
import iconWhatsapp from '../../img/CPT_Whatsapp.svg';
import './Footer.css'




const Footer = () => {
    return (
        <div className="containerFooter px-lg-2 pt-5 pb-2 mb-2">
            <div className="footer-meddle">
                <div className="main-container px-lg-4 pt-5 pb-6">
                    <div className="row">
                        {/*colum 1*/}
                        <div className="elLogoNaranjo">
                            <ul className="list-unstyled">
                                <img
                                    className="logoNaranjo"
                                    src={logoNaranjo} alt=""
                                />
                            </ul>
                        </div>

                    </div>

                    <div className="contacto">
                        <ul className="list-unstyled">
                            <div className="titulo">
                                <h1> Escribenos, <strong> te leemos</strong></h1>
                            </div>

                            <li><input className="nombre" placeholder="Nombre Completo"></input></li>
                            <li><input className="mail" placeholder="Email"></input></li>
                            <li><textarea className="elmensaje" placeholder="Mensaje"></textarea></li>

                        </ul>

                        <div className="redesSociales">
                            <li className="instagramPrueba list-unstyled">
                                <a href="https://www.instagram.com/comida_para_todos_cl/">
                                    <img

                                        className="instagram"
                                        src={iconInstagram} alt=""
                                    />
                                </a>
                                <li className="emailPrueba" >
                                    <img
                                        className="email"
                                        src={iconEmail} alt=""
                                    />
                                </li>
                                <li className="whatsappPrueba" >
                                    <img
                                        className="whatsapp"
                                        src={iconWhatsapp} alt=""
                                    />
                                </li>
                                <div className="enviar">
                                    <button className="btn-enviar">
                                        Enviar
                                </button>
                                </div>

                            </li>
                        </div>
                    </div>

                </div>
                <div className="main-container px-lg-4 pt-5 pb-6">
                    <div className="contenedorrow row">
                        <div className="contenedorContenedor">
                            <div className="contenedorRestaurante">
                                <ul className="list-unstyled">
                                    <h4>Red de Restaurantes</h4>
                                    {/*<ul className="list-unstyled">*/}
                                    <li className="liname">Boa Santiago</li>
                                    <li className="liname">99 Restaurante</li>
                                    <li className="liname">La Cava del Sommelier</li>
                                    <li className="liname">Aurora Cocina</li>
                                    <li className="liname">Rossonero</li>
                                    <li className="liname">Foodies</li>
                                    <li className="liname">La Caperucita y El Lobo</li>
                                    <li className="liname">Pebre Chile</li>
                                    <li className="liname">Ambrosia Bistro</li>
                                    <li className="liname">Cafè San Juan</li>
                                    <li className="liname">Puerto Claro Valpo</li>
                                    <li className="liname">Taller Macera</li>
                                    <li className="liname">Comedor Comùn</li>
                                </ul>
                            </div>
                        </div>
                            <div className="contenedorMuni">
                                <ul className="list-unstyled">
                                    <h4>Red de Municipios</h4>
                                    <ul className="list-unstyled">
                                        <li className="liname">Municipalidad de la Pintana</li>
                                        <li className="liname">Municipalidad de Antofagasta</li>
                                    </ul>
                                </ul>
                            </div>
                            <div className="contenedorComunicacion">
                                {/*colum 3*/}
                                <h4>Red de Comunicaciòn</h4>
                                <ul className="list-unstyled">
                                    <li className="liname">Ñam</li>
                                    <li className="liname">Agencia Land</li>
                                    <li className="liname">Estudio Enoki</li>
                                    <li className="liname">EcoPass</li>
                                    <li className="liname">Tele13 Radio</li>
                                </ul>
                            </div>
                            <div className="contenedorSociales">
                                <h4>Red de Colaboradores Sociales</h4>
                                <ul className="list-unstyled">
                                    <li className="liname">Las Condenadas</li>
                                    <li className="liname">La Chimba</li>
                                    <li className="liname">Nosso Prato</li>
                                </ul>
                            </div>
                            <div className="contenedorCordinadoras">
                                <h4>Organizaciones Coordinadoras</h4>
                                <ul className="list-unstyled">
                                    <li className="liname">Cultiva</li>
                                    <li className="liname">Gastronomia Social</li>
                                    <li className="liname">Colab UC</li>
                                    <li className="liname">Social Gastronomy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                        {/*Footer Bottom*/}

                        <p className="parrafo text-xs-center py-3">
                            &copy;{new Date().getFullYear()} Comida para todos -
                        Todos los derechos reservados | Ingresar como Administrador
                    </p>
                    </div>
                </div>

    );
}

export default Footer

