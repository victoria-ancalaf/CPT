import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Masas from '../../img/Masas.jpg';
import FormTalento from '../Voluntariado/FormTalento'
import './DonarTalento.css';

const DonarTalento = () => {
    const [ talentoShow, setTalentoShow ] = useState(false);

	return (
		<div className="talento-container">
			<div className="talento-left">
				<img src={Masas} alt="Huertos Urbanos" />
			</div>
			<div className="talento-right">
				<div className="talento-text">
					<p className="talento-letter">Voluntariado</p>
					<p className="talento-letter-small">
						¿Te gustaría ayudar al equipo<br />
						de Comida Para Todos en<br />
						diferentes labores? Dona una<br />
						hora de tu tiempo.
					</p>
					<p className="talento-more">Leer más</p>
				</div>
				<button className="btn-talento" onClick={() => setTalentoShow(true)}>
					Hazte Parte
				</button>
			</div>
			<Modal size="lg" show={talentoShow} onHide={() => setTalentoShow(false)}>
				<Modal.Header className="modal-header" closeButton />
				<Modal.Body>
					<p className="talento-p1">
						Donar terreno para <strong>huertos urbanos</strong>
					</p>
					<p className="talento-p2">
						Muchas gracias por tu interés en donar terreno para la creación de huertos<br />
						urbanos comunitarios. Nos contactaremos contigo a la brevedad.
					</p>
					<FormTalento />
				</Modal.Body>
				<Modal.Footer />
			</Modal>
		</div>
	);
};

export default DonarTalento
