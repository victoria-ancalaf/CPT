import React, { useState } from 'react';
import Capacitacion from '../../img/Capacitaciones.jpg';
import Modal from 'react-bootstrap/Modal';
import CapacitacionesForm from './CapacitacionesForm';
import './Capacitaciones.css';

const Capacitaciones = () => {
	const [ trainingShow, setTrainingShow ] = useState(false);

	return (
		<div className="capacitaciones-container">
			<div className="capacitaciones-left">
				<img src={Capacitacion} alt="Capacitaciones" />
			</div>
			<div className="capacitaciones-right">
				<div className="capacitaciones-text">
					<p className="capacitaciones-letter">Capacitaciones</p>
					<p className="capacitaciones-letter-small">
						Para nosotros la educación es<br />
						fundamental. Dona una hora<br />
						de clases para que otros<br />
						puedan aprender.
					</p>
					<p className="capacitaciones-more">Leer más</p>
				</div>
				<button className="btn-capacitaciones" onClick={() => setTrainingShow(true)}>
					Hazte Parte
				</button>
			</div>

			<Modal size="lg" show={trainingShow} onHide={() => setTrainingShow(false)}>
			<Modal.Header className="modal-header-capacitaciones" closeButton />
				<Modal.Body>
					<p className="capacitaciones-p1">
						Donar una hora de <strong>clases para la Comunidad</strong>
					</p>
					<p className="capacitaciones-p2">
						Muchas gracias por tu interés en donar parte de tu tiempo para hacer capacitaciones<br />
						destinadas a la comunidad. Nos contactaremos contigo a la brevedad.
					</p>
					<CapacitacionesForm />
				</Modal.Body>
				<Modal.Footer className="modal-footer-capacitaciones" />
			</Modal>
		</div>
	);
};

export default Capacitaciones;
