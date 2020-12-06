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
			<Modal.Header className="modal-header-banco" closeButton />
				<Modal.Body className="probando">
					<p className="banco-p1">
						Donar víveres para el <strong>Banco de Alimentos</strong>
					</p>
					<p className="banco-p2">
						Muchas gracias por tu interés en donar víveres para nuestro Banco de<br />
						Alimentos. Nos contactaremos contigo a la brevedad.
					</p>
					<BancoAlimentosForm />
				</Modal.Body>
				<Modal.Footer className="modal-footer-banco" />
			</Modal>
		</div>
	);
};

export default BancoAlimentos;
