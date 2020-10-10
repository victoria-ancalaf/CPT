import React, { useState } from 'react';
import './Huertos.css';
import Modal from 'react-bootstrap/Modal';
import HuertosForm from './HuertosForm';
import Huerta from '../../img/Huerta.jpg';

const Huertos = () => {
	const [ huertoShow, setHuertosShow ] = useState(false);

	return (
		<div className="huertos-container">
			<div className="huertos-left">
				<img src={Huerta} alt="Huertos Urbanos" />
			</div>
			<div className="huertos-right">
				<div className="huertos-text">
					<p className="huertos-letter">Huertos Urbanos</p>
					<p className="huertos-letter-small">
						¿Tienes tierra disponible para<br />
						huertos comunitarios? Dona<br />
						un metro cuadrado para <br />
						fomentar el cultivo.
					</p>
					<p className="huertos-more">Leer más</p>
				</div>
				<button className="btn-huertos" onClick={() => setHuertosShow(true)}>
					Hazte Parte
				</button>
			</div>
			<Modal size="lg" show={huertoShow} onHide={() => setHuertosShow(false)}>
				<Modal.Header className="modal-header-huertos" closeButton />
				<Modal.Body>
					<p className="huertos-p1">
						Donar terreno para <strong>huertos urbanos</strong>
					</p>
					<p className="huertos-p2">
						Muchas gracias por tu interés en donar terreno para la creación de huertos<br />
						urbanos comunitarios. Nos contactaremos contigo a la brevedad.
					</p>
					<HuertosForm />
				</Modal.Body>
				<Modal.Footer className="modal-footer-huertos" />
			</Modal>
		</div>
	);
};

export default Huertos;
