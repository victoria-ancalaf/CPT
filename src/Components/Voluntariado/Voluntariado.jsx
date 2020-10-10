import React from 'react';
import Capacitaciones from './Capacitaciones';
import Voluntario from './Voluntario';
import '../Formas-de-Donar/FormasDonar.css';

const Voluntariado = () => {
	return (
		<div className="formasDonar-container">
			<div className="formar-donar-text">
				<p className="fdonar-p-1">
					Otras <strong>formas de donar</strong>
				</p>
				<p className="fdonar-p-2">
					En Comida Para Todos fomentamos el cultivo para la producción de alimentos <br />
					de manera sustentable y recibimos productos para continuar cocinando
				</p>
                <button className="btn-formas-donar">Más información</button>
			</div>
			<div className="fdonar-card-container">
			<Capacitaciones />
			<Voluntario />
			</div>
		</div>
	);
};

export default Voluntariado;
