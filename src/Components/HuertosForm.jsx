import React, { useState } from 'react';
import '../Styles/Capacitaciones.css';
import { firebase } from '../firebase';

const db = firebase.firestore();

const HuertosForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('VoluntariosHuertos').add({
            name: name,
            email: email,
            message: message,
        })
        .then (() => {
            alert("Enviado");
        })
        .catch(error => {
            alert(error.message);
        });

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <h2>Huertos</h2>

            <label>Nombre</label>
            <input 
            placeholder="Nombre" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            />

            <label>Correo Electrónico</label>
            <input 
            placeholder="Correo Electrónico" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            />

            <label>Mensaje</label>
            <textarea 
            placeholder="Mensaje" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit">Enviar Formulario</button>
        </form>
    );
};

export default HuertosForm;
