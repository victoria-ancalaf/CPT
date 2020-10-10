import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Masas from '../../img/Masas.jpg';
import VoluntarioForm from './VoluntarioForm'
import './Voluntario.css';

const Voluntario = () => {
    const [ voluntarioShow, setVoluntario ] = useState(false);

	return (
		<div className="voluntario-container">
			<div className="voluntario-left">
				<img src={Masas} alt="Huertos Urbanos" />
			</div>
			<div className="voluntario-right">
				<div className="voluntario-text">
					<p className="voluntario-letter">Voluntariado</p>
					<p className="voluntario-letter-small">
						¿Te gustaría ayudar al equipo<br />
						de Comida Para Todos en<br />
						diferentes labores? Dona una<br />
						hora de tu tiempo.
					</p>
					<p className="voluntario-more">Leer más</p>
				</div>
				<button className="btn-voluntario" onClick={() => setVoluntario(true)}>
					Hazte Parte
				</button>
			</div>
			<Modal size="lg" show={voluntarioShow} onHide={() => setVoluntario(false)}>
			<Modal.Header className="modal-header-voluntario" closeButton />
				<Modal.Body>
					<p className="voluntario-p1">
						Convertirse en <strong>Voluntario</strong>
					</p>
					<p className="voluntario-p2">
						Muchas gracias por tu interés en ser voluntario y apoyar en terreno al equipo de<br />
						Comida Para Todos. Nos contactaremos contigo a la brevedad.
					</p>
					<VoluntarioForm />
				</Modal.Body>
				<Modal.Footer className="modal-footer-voluntario" />
			</Modal>
		</div>
	);
};

export default Voluntario
