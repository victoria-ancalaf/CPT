import React, { useState } from 'react';
import './FormasDonar.css';
import BancoAlimento from '../../img/BancoAlimentos.jpg';
import Modal from 'react-bootstrap/Modal';
import BancoAlimentosForm from './BancoAlimentosForm';

const BancoAlimentos = () => {
	
	const [ lgShow, setLgShow ] = useState(false);

	return (
		<div>
			<div className="training-container">
				<img src={BancoAlimento} alt="BancoAlimento" />
				<div>
					<p className="cap-letter">Banco de Alimentos</p>
					<p className="cap-letter-small">Dona los alimentos que te sobren en casa.</p>
				</div>
				<button onClick={() => setLgShow(true)}>Modal</button>

				<Modal
					size="lg"
					show={lgShow}
					onHide={() => setLgShow(false)}
				>
					<Modal.Header closeButton>
						<Modal.Title>Banco de Alimentos</Modal.Title>
					</Modal.Header>
					<Modal.Body>Dona los alimentos que te sobren en casa.
                        <BancoAlimentosForm />
                    </Modal.Body>
				</Modal>
			</div>
		</div>
	);
};

export default BancoAlimentos;
