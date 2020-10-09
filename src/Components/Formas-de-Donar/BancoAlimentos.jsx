import React, { useState } from 'react';
import './BancoAlimentos.css';
import BancoAlimento from '../../img/BancoAlimentos.jpg';
import Modal from 'react-bootstrap/Modal';
import BancoAlimentosForm from './BancoAlimentosForm';

const BancoAlimentos = () => {
	const [ bancoShow, setBancoShow ] = useState(false);

	return (
		<div className="fdonar-container">
			<div className="fdonar-left">
				<img src={BancoAlimento} alt="Banco Alimentos" />
			</div>
			<div className="fdonar-right">
				<div className="fdonar-text">
					<p className="fdonar-letter">Banco de Alimentos</p>
					<p className="fdonar-letter-small">
						Recibimos mercadería para<br />
						preparar almuerzos en <br />nuestras cocinas. Dona <br></br>
						alimentos que tengas en casa.
					</p>
					<p className="fdonar-more">Leer más</p>
				</div>
				<button className="btn-fdonar" onClick={() => setBancoShow(true)}>
					Hazte Parte
				</button>
			</div>
			<Modal size="lg" show={bancoShow} onHide={() => setBancoShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Banco de Alimentos</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Dona los alimentos que te sobren en casa.
					<BancoAlimentosForm />
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default BancoAlimentos;
