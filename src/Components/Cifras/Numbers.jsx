import React from 'react';
// import Plato from '../../img/Almuerzos_Solidarios_1.png';
// import Restaurant from '../../img/Restaurantes-reactivados-02.png';
// import Persona from '../../img/Personas-comen-a-dario-03.png';
// import Hands from '../../img/Puestos-de-empleo-activados-04.png';
import './Numbers.css';
import './CountUpNumber';
import CountUpNumber from './CountUpNumber';

const Numbers = () => {
	return (
		<div className="containerNumbers">
			<div>
				<p className="number-letter1">
					Esto es posible <strong>gracias a ti</strong>
				</p>
				<p className="number-letter2">
					En el corto tiempo que llevamos como fundación, hemos conseguido cifras<br />
					increíbles gracias a todos quienes han confiado en nosotros.
				</p>
			</div>

			<div className="icon-container">
				<span className="icon-text">
					<CountUpNumber className="count" end={160} decimals={3} duration={1.5} />
				</span>
				<span className="icon-text">
					<CountUpNumber className="count" end={19} duration={1.5} />
				</span>
				<span className="icon-text">
					<CountUpNumber className="count" end={3.2} decimals={3} duration={1.5} />
				</span>
				<span className="icon-text">
					<CountUpNumber className="count" end={72} duration={1.5} />
				</span>

				<span className="icon-text">
					<CountUpNumber className="count" end={160} decimals={3} duration={1.5} />
				</span>
				<span className="icon-text">
					<CountUpNumber className="count" end={19} duration={1.5} />
				</span>
				<span className="icon-text">
					<CountUpNumber className="count" end={3.2} decimals={3} duration={1.5} />
				</span>
				<span className="icon-text">
					<CountUpNumber className="count" end={72} duration={1.5} />
				</span>
			</div>
		</div>
	);
};

export default Numbers;
