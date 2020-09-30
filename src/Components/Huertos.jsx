import React, { useState } from 'react';
import '../Styles/Training.css';
import Huerta from '../img/Huerta.jpg'
import Modal from 'react-bootstrap/Modal';
import HuertosForm from './HuertosForm';

const Huertos = () => {
	
	const [ huertoShow, setHuertosShow ] = useState(false);

	return (
		<div>
			<div className="training-container">
				<img src={Huerta} alt="Huerta" />
				<div>
					<p className="cap-letter">Huertos Urbanos</p>
					<p className="cap-letter-small">Dona un metro cuadrado para fomentar el cultivo.</p>
				</div>
				<button onClick={() => setHuertosShow(true)}>Modal</button>

				<Modal
					size="lg"
					show={huertoShow}
					onHide={() => setHuertosShow(false)}
				>
					<Modal.Header closeButton>
						<Modal.Title>Huertos Urbanos</Modal.Title>
					</Modal.Header>
					<Modal.Body>Este es el modal de Huertossss 
                        <HuertosForm />
                    </Modal.Body>
				</Modal>
			</div>
		</div>
	);
};

export default Huertos;
