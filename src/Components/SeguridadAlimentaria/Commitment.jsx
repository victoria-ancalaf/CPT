import React from 'react';
import './Commitment.css';

const Commitment = () => {
	return (
		<div className="containerCommitment">
			<div>
				<p className="p-1-style">
					Nuestro compromiso con la
					<br />
					<strong>Seguridad Alimentaria</strong> para 2030
				</p>
				<p className="p-2-style">
					Estamos comprometidos con la Agenda 2030 ODS:<br />
					asegurar que todas las personas tengan acceso social,<br />
					físico y económico a alimento seguro y nutritivo.
				</p>
			</div>
			<button className="btn-commit">Aprender más</button>
		</div>
	);
};

export default Commitment;
