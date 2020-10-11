import React, { useState } from 'react';
import { firebase } from '../../firebase';
import './BancoAlimentosForm.css';

const db = firebase.firestore();

const BancoAlimentos = () => {
	const [ name, setName ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ direccion, setDireccion ] = useState('');
	const [ comuna, setComuna ] = useState('');
	const [ region, setRegion ] = useState('Región');
	const [alimento, setAlimento] = useState ('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const dateForm = new Date();
		
		db.collection('alimentos')
			.add({
				name: name,
				phone: phone,
				email: email,
				direccion: direccion,
				comuna: comuna,
				region: region,
				alimento: alimento,
				date: dateForm.toLocaleString()
			})
			.then(() => {
				alert('Enviado');
			})
			.catch((error) => {
				alert(error.message);
			});

		setName('');
		setEmail('');
	};

	return (
		<form className="form-container" onSubmit={handleSubmit}>
			<div className="input-container">
				<div className="personal-info">
					<div className="h3-banco">
						<h3>Datos personales</h3>
					</div>

					<div className="left-inputs">
						<input
							className="input-banco-name"
							placeholder="Nombre Completo"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>

						<input
							className="input-banco"
							placeholder="Teléfono"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>

						<input
							className="input-banco"
							placeholder="E-mail"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>

						<input
							className="input-banco"
							placeholder="Dirección"
							value={direccion}
							onChange={(e) => setDireccion(e.target.value)}
						/>

						<input
							className="input-banco"
							placeholder="Comuna"
							value={comuna}
							onChange={(e) => setComuna(e.target.value)}
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
							<option value="Región de O'Higgins">VI Región del Libertador Gral. Bernardo O'Higgins</option>
							<option value="Región del Maule">VII Región del Maule</option>
							<option value="Región del BioBío">VIII Región del BioBío</option>
							<option value="Región de la Araucanía">IX Región de la Araucanía</option>
							<option value="Región de los Lagos">X Región de los Lagos</option>
							<option value="Región de Aysén">XI Región Aysén del Gral. Carlos Ibáñez del Campo</option>
							<option value="Región de Magallanes y Antártica Chilena">XII Región de Magallanes y Antártica Chilena</option>
							<option value="Región Metropolitana">Región Metropolitana de Santiago</option>
							<option value="Región de los Ríos">XIV Región de los Ríos</option>
							<option value="Región de Arica y Parinacota">XV Región de Arica y Parinacota</option>
							<option value="Región de Ñuble">XVI Región de Ñuble</option>
						</select>
					</div>
				</div>
				<div className="tipo-alimento">
					<h3 className="h3-banco">Tipo de Alimentos</h3>
				<div className="check-alimento">
				<input 
				type="checkbox"
				checked={alimento}
				onChange={(e) => {setAlimento(e.target.checked)}}
				/>Alimento perecedero<br></br>refrigerado y congelado

				<input 
				type="checkbox"
				checked={alimento}
				onChange={(e) => {setAlimento(e.target.checked)}}
				/>Alimento no perecedero<br></br>(sellado)

				<input 
				type="checkbox"
				checked={alimento}
				onChange={(e) => {setAlimento(e.target.checked)}}
				/>Materias primas y productos<br></br>semielaborados
				</div>
				</div>
				<div className="end-banco">
					<button className="btn-banco-enviar" type="submit">
						Enviar
					</button>
				</div>
			</div>
		</form>
	);
};

export default BancoAlimentos;
