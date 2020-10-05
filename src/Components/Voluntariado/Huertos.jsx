import React, { useState } from 'react';
import './Huertos.css';
import Huerta from '../../img/Huerta.jpg'
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
					<Modal.Header className="modal-header" closeButton>
					</Modal.Header>
					<Modal.Body>
						<p className="huertos-p1">
							Donar terreno para <strong>huertos urbanos</strong>
						</p>
						<p className="huertos-p2">
							Muchas gracias por tu interés en donar 
							terreno para la creación de huertos<br></br>
							urbanos comunitarios. Nos contactaremos contigo a la brevedad.
						</p>
                        <HuertosForm />
                    </Modal.Body>
					<Modal.Footer></Modal.Footer>
				</Modal>
			</div>
		</div>
	);
};

export default Huertos;
