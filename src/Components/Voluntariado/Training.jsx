import React, { useState } from 'react';
import Capacitaciones from '../../img/Capacitaciones.jpg';
import Modal from 'react-bootstrap/Modal';
import CapacitacionesForm from './CapacitacionesForm';
import './Training.css';

const Training = () => {
	const [ trainingShow, setTrainingShow ] = useState(false);

	return (
		<div className="capacitaciones-container">
			<div className="capacitaciones-left">
				<img src={Capacitaciones} alt="Capacitaciones" />
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
				<Modal.Header className="modal-header" closeButton />
				<Modal.Body>
					<p className="capacitaciones-p1">
						Donar terreno para <strong>huertos urbanos</strong>
					</p>
					<p className="capacitaciones-p2">
						Muchas gracias por tu interés en donar terreno para la creación de huertos<br />
						urbanos comunitarios. Nos contactaremos contigo a la brevedad.
					</p>
					<CapacitacionesForm />
				</Modal.Body>
				<Modal.Footer />
			</Modal>
		</div>
	);
};

export default Training;
