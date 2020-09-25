import React from 'react';




const Footer = () => {
    return (
        <div className="container px-lg-2  pt-2 mt-2 pb-2 mb-2">
            <div className="footer-meddle">
                <div className="main-container px-lg-5 pt-5 mt-5 pb-5 mb-5">
                    <div className="row">
                        {/*colum 1*/}
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum </h4>
                            <ul className="list-unstyled">
                                <li>lorem ipsum</li>
                                <li>lorem ipsum</li>
                                <li>lorem ipsum</li>
                                <li>lorem ipsum</li>
                            </ul>
                        </div>
                        {/*colum 2*/}
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum </h4>
                            <ul className="list-unstyled">
                                <li>lorem ipsum</li>
                                <li>lorem ipsum</li>
                                <li>lorem ipsum</li>
                                <li>lorem ipsum</li>
                            </ul>
                        </div>
                        {/*colum 3*/}
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum </h4>
                            <ul className="list-unstyled">
                                <li>lorem ipsum</li>
                                <li>lorem ipsum</li>
                                <li>lorem ipsum</li>
                                <li>lorem ipsum</li>
                            </ul>
                        </div>
                        {/*colum 4*/}
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum </h4>
                            <ul className="list-unstyled">
                                <li>lorem ipsum</li>
                                <li>lorem ipsum</li>
                                <li>lorem ipsum</li>
                                <li>lorem ipsum</li>
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

