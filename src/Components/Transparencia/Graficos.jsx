import React from 'react';
import Distribucion from '../../img/distribucionDonaciones.svg'
import './Graficos.css'


const Graficos = () => {
	return (
		<div className="graficos-container">
			<div className="chart-text-container">
				<h1 className="chart-text">
					Distribución <strong>de las donaciones</strong>
				</h1>
			<p className="chart-paragraph">
				Por cada $3.000 recibidos mediante las docnaciones, podemos costear<br></br>
				todo el proceso de producción de los alimentos: desde las cocinas hasta<br></br>
				la distribución a los comedores comunitarios.
			</p>
			</div>
			<div className="chart">
			<img src={Distribucion} alt="Distribución donaciones"/>
			</div>
		</div>
	)
}

export default Graficos
