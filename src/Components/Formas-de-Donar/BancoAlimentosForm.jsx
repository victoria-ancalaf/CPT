import React, { useState } from 'react';
import { firebase } from '../../firebase';
import './BancoAlimentosForm.css';
import { Form } from 'react-bootstrap';

const db = firebase.firestore();

const BancoAlimentos = () => {
	const [ name, setName ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ direccion, setDireccion ] = useState('');
	const [ comuna, setComuna ] = useState('');
	const [ region, setRegion ] = useState('Región');
	const [alimento, setAlimento] = useState ({perecedero: false, noPerecedero: false, materiaPrima: false});
	

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
		setPhone('');
		setEmail('');
		setDireccion('');
		setComuna('');
		


		
	};

	const handleChange = (e) => {
			const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
			setAlimento({
				...alimento,
				[e.target.name]: value
			});
	}

	return (
		<form className="form-container" onSubmit={handleSubmit}>
			<div className="input-container">
				<div className="personal-info">
					<div className="h3-banco">
						<h3>Datos personales</h3>
					</div>

					<div className="left-inputs">
						<Form.Control
							className="input-banco-name"
							placeholder="Nombre Completo"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>

						<Form.Control
							className="input-banco"
							placeholder="Teléfono"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							required
						/>

						<Form.Control
							className="input-banco"
							placeholder="Correo Electrónico"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>

						<Form.Control
							className="input-banco"
							placeholder="Dirección"
							value={direccion}
							onChange={(e) => setDireccion(e.target.value)}
							required
						/>

						<Form.Control
							className="input-banco"
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
					<h3 className="h3-banco-disp">Tipo de Alimentos</h3>
				<div className="check-alimento">
					<div className="alimento-checkbox">
				<input 
				type="checkbox"
				name="perecedero"
				checked={alimento.perecedero}
				onChange={handleChange}
				/> 
				<label>Alimento perecedero<br></br>refrigerado y congelado</label>
				</div>
				<div className="alimento-checkbox">
				<input 
				type="checkbox"
				name="noPerecedero"
				checked={alimento.noPerecedero}
				onChange={handleChange}
				/> 
				<label>Alimento no perecedero<br></br>(sellado)</label>
				</div>
				<div className="alimento-checkbox">
				<input 
				type="checkbox"
				name="materiaPrima"
				checked={alimento.materiaPrima}
				onChange={handleChange}
				/>
				<label>Materias primas y productos<br></br>semielaborados</label>
				</div>
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
