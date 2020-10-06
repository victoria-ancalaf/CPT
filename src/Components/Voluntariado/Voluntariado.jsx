import React from 'react';
import Training from './Training';
import DonarTalento from './DonarTalento';
import './Voluntariado.css';

const Voluntariado = () => {
	return (
		<div className="voluntariado-container">
			<Training />
			<DonarTalento />
		</div>
	);
};

export default Voluntariado;
