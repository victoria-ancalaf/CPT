import React, { useState } from 'react';
import './HuertosForm.css';
import { firebase } from '../../firebase';
import { Form } from 'react-bootstrap';

const db = firebase.firestore();

const HuertosForm = () => {
	const [ name, setName ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ direccion, setDireccion ] = useState('');
	const [ comuna, setComuna ] = useState('');
	const [ region, setRegion ] = useState('Región');
	const [ terreno, setTerreno ] = useState('');

	
	const handleSubmit = (e) => {
		e.preventDefault();
		const dateForm = new Date();

		db.collection('VoluntariosHuertos')
			.add({
				name: name,
				phone: phone,
				email: email,
				direccion: direccion,
				comuna: comuna,
				region: region,
				terreno: terreno,
				date: dateForm.toLocaleString()
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
						<Form.Control
							className="input-huertos-name"
							placeholder="Nombre Completo"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>

						<Form.Control
							className="input-huertos"
							placeholder="Teléfono"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							required
						/>

						<Form.Control
							className="input-huertos"
							placeholder="Correo Electrónico"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>

						<Form.Control
							className="input-huertos"
							placeholder="Dirección"
							value={direccion}
							onChange={(e) => setDireccion(e.target.value)}
							required
						/>

						<Form.Control
							className="input-huertos"
							placeholder="Comuna"
							value={comuna}
							onChange={(e) => setComuna(e.target.value)}
							required
						/>

						<select className="region-selector" value={region} onChange={(e) => setRegion(e.target.value)}>
							<option selected value="region">
								Región
							</option>
							<option value="Región de Tarapacá">I Región de Tarapacá</option>
							<option value="Región de Antofagasta">II Región de Antofagasta</option>
							<option value="Región de Atacama">III Región de Atacama</option>
							<option value="Región de Coquimbo">IV Región de Coquimbo</option>
							<option value="Región de Valparaíso">V Región de Valparaíso</option>
							<option value="Región de O'Higgins">
								VI Región del Libertador Gral. Bernardo O'Higgins
							</option>
							<option value="Región del Maule">VII Región del Maule</option>
							<option value="Región del BioBío">VIII Región del BioBío</option>
							<option value="Región de la Araucanía">IX Región de la Araucanía</option>
							<option value="Región de los Lagos">X Región de los Lagos</option>
							<option value="Región de Aysén">XI Región Aysén del Gral. Carlos Ibáñez del Campo</option>
							<option value="Región de Magallanes y Antártica Chilena">
								XII Región de Magallanes y Antártica Chilena
							</option>
							<option value="Región Metropolitana">Región Metropolitana de Santiago</option>
							<option value="Región de los Ríos">XIV Región de los Ríos</option>
							<option value="Región de Arica y Parinacota">XV Región de Arica y Parinacota</option>
							<option value="Región de Ñuble">XVI Región de Ñuble</option>
						</select>
					</div>
				</div>
				<div className="terreno">
					<h3 className="h3-huertos-terreno">Terreno Disponible</h3>
					<div className="radio-huertos">
						<div className="terreno-disponible">
							<input
								type="radio"
								checked={terreno === '1 a 5 metros cuadrados'}
								value={'1 a 5 metros cuadrados'}
								onChange={(e) => {
									setTerreno(e.target.value);
								}}
							/>
							<label>1 a 5 metros cuadrados</label>
						</div>
						<div className="terreno-disponible">
							<input
								type="radio"
								checked={terreno === '6 a 20 metros cuadrados'}
								value={'6 a 20 metros cuadrados'}
								onChange={(e) => {
									setTerreno(e.target.value);
								}}
							/>
							<label>6 a 20 metros cuadrados</label>
						</div>
						<div className="terreno-disponible">
							<input
								type="radio"
								checked={terreno === '20 a 50 metros cuadrados'}
								value={'20 a 50 metros cuadrados'}
								onChange={(e) => {
									setTerreno(e.target.value);
								}}
							/>
							<label>20 a 50 metros cuadrados</label>
						</div>
						<div className="terreno-disponible">
							<input
								type="radio"
								checked={terreno === 'Más de 50 metros cuadrados'}
								value={'Más de 50 metros cuadrados'}
								onChange={(e) => {
									setTerreno(e.target.value);
								}}
							/>
							<label>Más de 50 metros cuadrados</label>
						</div>
					</div>
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
