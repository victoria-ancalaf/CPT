import React from 'react';
import logoNaranjo from '../img/logoNaranjo.png';
import '../Styles/Footer.css'



const Footer = () => {
    return (
        <div className="containerFooter px-lg-2  pt-2 mt-2 pb-2 mb-2">
            <div className="footer-meddle">
                <div className="main-container px-lg-5 pt-5 mt-5 pb-5 mb-5">
                    <div className="row">
                        {/*colum 1*/}
                        <div className="col-md-3 col-sm-6">
                            <ul className="list-unstyled">
                                <img
                                    className="d-block w-100"
                                    src={logoNaranjo}
                                />
                                <li>Intagram</li>
                                <li>Correo</li>
                                <li>Whatsapp</li>
                            </ul>
                        </div>
                        {/*colum 2*/}
                        <div className="col-md-3 col-sm-6">
                            <h4>Red de Comunicaciòn</h4>
                            <ul className="list-unstyled">
                                <li>Ñam</li>
                                <li>Agencia Land</li>
                                <li>Estudio Enoki</li>
                                <li>EcoPass</li>
                                <li>Tele13 Radio</li>
                            </ul>
                        </div>
                        {/*colum 3*/}
                        <div className="col-md-3 col-sm-6">
                            <h4>Red de Colaboradores Sociales</h4>
                            <ul className="list-unstyled">
                                <li>Las Condenadas</li>
                                <li>La Chimba</li>
                                <li>Nosso Prato</li>
                            </ul>
                        </div>
                        {/*colum 4*/}
                        <div className="col-md-3 col-sm-6">
                            <h4>Organizaciones Coordinadoras</h4>
                            <ul className="list-unstyled">
                                <li>Cultiva</li>
                                <li>Gastronomia Social</li>
                                <li>Colab UC</li>
                                <li>Social Gastronomy</li>
                            </ul>
                        </div>
                    </div>
                    {/*Footer Bottom*/}
                    <div className="footer-copyright text-center py-3">
                        <p className="text-xs-center py-3">
                            &copy;{new Date().getFullYear()} Comida para todos -
                        Todos los derechos reservados
                    </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Footer

