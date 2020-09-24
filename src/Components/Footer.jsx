import React from 'react';




const Footer = () => {
    return (
        <div className="main-footer">
            <div className="footer-meddle">
                <div className="main-container">
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
                    <div className="footer-bottom">
                        <p className="text-xs-center">
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

