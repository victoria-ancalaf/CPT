import React, { useState } from 'react';
import '../Styles/Training.css';
import Capacitaciones from '../img/Capacitaciones.jpg';
import Modal from 'react-bootstrap/Modal';
import CapacitacionesForm from './CapacitacionesForm';
import BancoAlimentos from './BancoAlimentos'

const Training = () => {
	
	const [ lgShow, setLgShow ] = useState(false);

	return (
		<div>
			<div className="training-container">
				<img src={Capacitaciones} alt="Capacitaciones" />
				<div>
					<p className="cap-letter">Capacitaciones</p>
					<p className="cap-letter-small">Dona una hora de clases para que otros aprendan.</p>
				</div>
				<button onClick={() => setLgShow(true)}>Modal</button>

				<Modal
					size="lg"
					show={lgShow}
					onHide={() => setLgShow(false)}
				>
					<Modal.Header closeButton>
						<Modal.Title>Capacitaciones</Modal.Title>
					</Modal.Header>
					<Modal.Body>Este es el modal de capacitaciones :D
                        <CapacitacionesForm />
                    </Modal.Body>
				</Modal>
			</div>
			<BancoAlimentos />
		</div>

	);
};

export default Training;
