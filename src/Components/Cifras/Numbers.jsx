import React from 'react';
import Plato from '../../img/Almuerzos_Solidarios_1.png';
import Restaurant from '../../img/Restaurantes-reactivados-02.png';
import Persona from '../../img/Personas-comen-a-dario-03.png';
import Hands from '../../img/Puestos-de-empleo-activados-04.png';
import './Numbers.css';
import './CountUpNumber';
import CountUpNumber from './CountUpNumber';

const Numbers = () => {
	return (
		<div className="containerNumbers">
			<p className="number-content">
				Esto es posible <strong>gracias a ti</strong>
			</p>
			<div className="icon-container">
				<div className="icon-text">
					<img src={Plato} alt="prueba" />
				</div>
				<div className="icon-text">
					<img src={Restaurant} alt="prueba" />
				</div>
				<div className="icon-text">
					<img src={Persona} alt="prueba" />
				</div>
				<div className="icon-text">
					<img src={Hands} alt="prueba" />
				</div>
			</div>

			<CountUpNumber className="count" end={160} decimals={3} duration={1.5} />
			<CountUpNumber className="count" end={19} duration={1.5} />
			<CountUpNumber className="count" end={3.2} decimals={3} duration={1.5} />
			<CountUpNumber className="count" end={72} duration={1.5} />
		</div>
	);
};

export default Numbers;
