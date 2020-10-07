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
					Estamos comprometidos con la Agenda 2030 ODS:
					asegurar que todas las <br></br>personas tengan acceso social,
					físico y económico a alimento seguro y nutritivo.
				</p>
			</div>
			<button className="btn-commit">Conoce nuestras líneas de acción</button>
		</div>
	);
};

export default Commitment;
