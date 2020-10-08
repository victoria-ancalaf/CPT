import React from 'react';
import logoNaranjo from '../../img/logoNaranjo.png';
import iconInstagram from '../../img/CPT_Instagram.svg';
import iconEmail from '../../img/CPT_Mail.svg';
import iconWhatsapp from '../../img/CPT_Whatsapp.svg';
import './Footer.css'




const Footer = () => {
    return (
        <div className="containerFooter px-lg-2 pt-2 mt-2 pb-2 mb-2">
            <div className="footer-meddle">
                <div className="main-container px-lg-4 pt-5 pb-6">
                    <div className="row">
                        {/*colum 1*/}
                        <div className="col-md-3 col-sm-6">
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
                            <h1> Escribenos, <strong> te leemos</strong></h1>
                            <tr> {/*className="list-unstyled">*/}
                                <td><input className="nombre" placeholder="Nombre"></input></td>
                                <td><input className="mail" placeholder="Email"></input></td>

                            </tr>
                            <li><input className="asunto" placeholder="Asunto"></input></li>
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

                <div className="contenedorRow row">
                    {/*colum 1*/}
                    <div className="col-md-3 col-sm-6">
                        <h4>Red de Comunicaciòn</h4>
                        <ul className="list-unstyled">
                            <li className="liname">Ñam</li>
                            <li className="liname">Agencia Land</li>
                            <li className="liname">Estudio Enoki</li>
                            <li className="liname">EcoPass</li>
                            <li className="liname">Tele13 Radio</li>
                        </ul>
                    </div>
                    {/*colum 2*/}
                    <div className="col-md-3 col-sm-6">
                        <h4>Red de Colaboradores Sociales</h4>
                        <ul className="list-unstyled">
                            <li className="liname">Las Condenadas</li>
                            <li className="liname">La Chimba</li>
                            <li className="liname">Nosso Prato</li>
                        </ul>
                    </div>
                    {/*colum 3*/}
                    <div className="col-md-3 col-sm-6">
                        <h4>Organizaciones Coordinadoras</h4>
                        <ul className="list-unstyled">
                            <li className="liname">Cultiva</li>
                            <li className="liname">Gastronomia Social</li>
                            <li className="liname">Colab UC</li>
                            <li className="liname">Social Gastronomy</li>
                        </ul>
                    </div>
                </div>
                {/*Footer Bottom*/}
                {/*<div className="footer-copyright text-center py-3">*/}
                <p className="parrafo text-xs-center py-3">
                    &copy;{new Date().getFullYear()} Comida para todos -
                        Todos los derechos reservados
                    </p>
                {/*</div>*/}
            </div>
        </div>

    );
}

export default Footer

