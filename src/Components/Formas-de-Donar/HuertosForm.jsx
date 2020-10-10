import React, { useState } from 'react';
import './HuertosForm.css';
import { firebase } from '../../firebase';

const db = firebase.firestore();

const HuertosForm = () => {
	const [ name, setName ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ direccion, setDireccion ] = useState('');
	const [ comuna, setComuna ] = useState('');
	const [ region, setRegion ] = useState('Región');
	const [ terreno, setTerreno] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		db
			.collection('VoluntariosHuertos')
			.add({
				name: name,
				phone: phone,
				email: email,
				direccion: direccion,
				comuna: comuna,
				region: region,
				terreno: terreno
			})
			.then(() => {
				alert('Enviado');
			})
			.catch((error) => {
				alert(error.message);
			});

		setName('');
		setPhone('');
		setEmail('');
		setDireccion('');
		setComuna('');
		setRegion('');
	};

	return (
		<form className="form-container" onSubmit={handleSubmit}>
			<div className="input-container">
				<div className="personal-info">
					<div className="h3-huertos">
						<h3>Datos personales</h3>
					</div>

					<div className="left-inputs">
						<input
							className="input-huertos-name"
							placeholder="Nombre Completo"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>

						<input
							className="input-huertos"
							placeholder="Teléfono"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>

						<input
							className="input-huertos"
							placeholder="E-mail"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

						<input
							className="input-huertos"
							placeholder="Dirección"
							value={direccion}
							onChange={(e) => setDireccion(e.target.value)}
						/>

						<input
							className="input-huertos"
							placeholder="Comuna"
							value={comuna}
							onChange={(e) => setComuna(e.target.value)}
						/>

						<select 
						className="region-selector"
						value={region} 
						onChange={(e) => setRegion(e.target.value)}>
							<option selected value="region">
								Región
							</option>
							<option value="tarapaca">I Región de Tarapacá</option>
							<option value="antofagasta">II Región de Antofagasta</option>
							<option value="atacama">III Región de Atacama</option>
							<option value="coquimbo">IV Región de Coquimbo</option>
							<option value="valparaiso">V Región de Valparaíso</option>
							<option value="ohiggins">VI Región del Libertador Gral. Bernardo O'Higgins</option>
							<option value="maule">VII Región del Maule</option>
							<option value="biobio">VIII Región del BioBío</option>
							<option value="araucania">IX Región de la Araucanía</option>
							<option value="lagos">X Región de los Lagos</option>
							<option value="aysen">XI Región Aysén del Gral. Carlos Ibáñez del Campo</option>
							<option value="magallanes">XII Región de Magallanes y Antártica Chilena</option>
							<option value="metropolitana">Región Metropolitana de Santiago</option>
							<option value="losrios">XIV Región de los Ríos</option>
							<option value="arica">XV Región de Arica y Parinacota</option>
							<option value="nuble">XVI Región de Ñuble</option>
						</select>
					</div>
				</div>
				<div className="terreno">
					<h3 className="h3-huertos">Terreno Disponible</h3>
					<input
							type="radio"
							className="terreno-disponible"
							checked={terreno === '1a5metroscuadrados'}
							value={'1a5metroscuadrados'}
							onChange={(e) => {setTerreno(e.target.value)}}
						/>1 a 5 metros cuadrados
						<input
							type="radio"
							className="terreno-disponible"
							checked={terreno === '6a20metroscuadrados'}
							value={'6a20metroscuadrados'}
							onChange={(e) => {setTerreno(e.target.value)}}
						/>6 a 20 metros cuadrados
						<input
							type="radio"
							className="terreno-disponible"
							checked={terreno === '20a50metroscuadrados'}
							value={'20a50metroscuadrados'}
							onChange={(e) => {setTerreno(e.target.value)}}
						/>20 a 50 metros cuadrados
						<input
							type="radio"
							className="terreno-disponible"
							checked={terreno === 'Masde50metroscuadrados'}
							value={'Masde50metroscuadrados'}
							onChange={(e) => {setTerreno(e.target.value)}}
						/>Más de 50 metros cuadrados
				</div>
				<div className="end-huertos">
					<button className="btn-huertos-enviar" type="submit">
						Enviar
					</button>
				</div>
			</div>
		</form>
	);
};

export default HuertosForm;
