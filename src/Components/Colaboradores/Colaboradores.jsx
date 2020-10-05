import React from 'react';
import cava from '../../img/cava.png';
import aurora from '../../img/aurora.png';
import comedor from '../../img/comedor.png';
import foodies from '../../img/foodies.png';

const Colaboradores = () => {
	return (
		<div className="container px-lg-2  pt-2 mt-2 pb-2 mb-2">
			<h1>
				Nuestros <strong>Colaboradores</strong>
			</h1>
			<div className="footer-meddle">
				<div className="main-container px-lg-5 pt-5 mt-5 pb-5 mb-5">
					<div className="row">
						{/*colum 1*/}
						<div className="col-md-3 col-sm-6">
							<ul className="list-unstyled">
								<img className="d-block w-100" src={cava} />
								<img className="d-block w-100" src={aurora} />
							</ul>
						</div>
						<div className="col-md-3 col-sm-6">
							<ul className="list-unstyled">
								<img className="d-block w-100" src={aurora} />
								<img className="d-block w-100" src={comedor} />
							</ul>
						</div>
						<div className="col-md-3 col-sm-6">
							<ul className="list-unstyled">
								<img className="d-block w-100" src={foodies} />
								<img className="d-block w-100" src={comedor} />
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Colaboradores;
