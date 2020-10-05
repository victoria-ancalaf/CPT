import React from 'react';
import Training from './Training';
import Huertos from './Huertos';
import BancoAlimentos from './BancoAlimentos';
import DonarTalento from './DonarTalento';
import './Voluntariado.css';

const Voluntariado = () => {
	return (
		<div className="voluntariado-container">
			<Huertos />
			<Training />
			<BancoAlimentos />
			<DonarTalento />
		</div>
	);
};

export default Voluntariado;
