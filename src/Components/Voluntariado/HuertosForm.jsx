import React, { useState } from 'react';
import './HuertosForm.css';
import { firebase } from '../../firebase';

const db = firebase.firestore();

const HuertosForm = () => {
	const [ name, setName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ direccion, setDireccion ] = useState('');
	const [ comuna, setComuna ] = useState('');
	const [ message, setMessage ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		db
			.collection('VoluntariosHuertos')
			.add({
				name: name,
				lastName: lastName,
				phone: phone,
				email: email,
				direccion: direccion,
				comuna: comuna,
				message: message
			})
			.then(() => {
				alert('Enviado');
			})
			.catch((error) => {
				alert(error.message);
			});

		setName('');
		setEmail('');
		setMessage('');
	};

	return (
		<form className="form-container" onSubmit={handleSubmit}>
			<div className="input-container">
				<div className="personal-info">
                    <div className="h3-huertos">
                        <h3 >Datos personales</h3>
                    </div>
					
                    <div className="left-inputs">
					<input
						className="input-huertos"
						placeholder="Nombre"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>

					<input
						className="input-huertos"
						placeholder="Apellidos"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
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

					<textarea placeholder="Región" value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                </div>
				<div className="terreno">
                <h3 className="h3-huertos">Terreno Disponible</h3>
                </div>
			</div>
			<button type="submit">Enviar Formulario</button>
		</form>
	);
};

export default HuertosForm;
