import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Masas from '../img/Masas.jpg';
import '../Styles/Training.css';
import FormTalento from '../Components/FormTalento'

const DonarTalento = () => {
    const [ lgShow, setLgShow ] = useState(false);

	return (
		<div>
			<div className="training-container">
				<img src={Masas} alt="Donar Talento" />
				<div className="mainText">
					<p className="cap-letter">Donar Talento</p>
					<p className="cap-letter-small">Dona una hora de tu talento a la comunidad.</p>
				</div>
				<button onClick={() => setLgShow(true)}>Modal</button>

				<Modal
					size="lg"
					show={lgShow}
					onHide={() => setLgShow(false)}
				>
					<Modal.Header closeButton>
						<Modal.Title>Donar Talento</Modal.Title>
					</Modal.Header>
					<Modal.Body>
                        <FormTalento />
                    </Modal.Body>
				</Modal>
			</div>
		</div>
    );
}

export default DonarTalento
