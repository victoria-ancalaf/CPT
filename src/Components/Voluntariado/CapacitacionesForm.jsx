import React, { useState } from 'react';
import { firebase } from '../../firebase';
import './CapacitacionesForm.css'
import { Form } from 'react-bootstrap';


const db = firebase.firestore();

const CapacitacionesForm = () => {
    const [ name, setName ] = useState('');
    const [ profesion, setProfesion ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ direccion, setDireccion ] = useState('');
    const [ comuna, setComuna ] = useState('');
    const [ disponibilidad, setDisponibilidad ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const dateForm = new Date();

        db.collection('capacitaciones').add({
            name: name,
            profesion: profesion,
			phone: phone,
			email: email,
			direccion: direccion,
            comuna: comuna,
            disponibilidad: disponibilidad,
            date: dateForm.toLocaleString()
        })
        .then (() => {
            alert("Enviado");
        })
        .catch(error => {
            alert(error.message);
        });

        setName('');
        setProfesion('');
        setPhone('');
        setEmail('');
        setDireccion('');
        setComuna('');
        setDisponibilidad('');
        
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
        <div className="input-container">
            <div className="personal-info">
                <div className="h3-capacitaciones">
                    <h3 >Datos personales</h3>
                </div>
                
                <div className="left-inputs">
                <Form.Control
                    className="input-capacitaciones-name"
                    placeholder="Nombre Completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
               />

                <Form.Control
                    className="input-capacitaciones-name"
                    placeholder="Profesión/Oficio"
                    value={profesion}
                    onChange={(e) => setProfesion(e.target.value)}
                    required
                />

                <Form.Control
                    className="input-capacitaciones"
                    placeholder="Teléfono"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />

                <Form.Control
                    className="input-capacitaciones"
                    placeholder="Correo Electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <Form.Control
                    className="input-capacitaciones"
                    placeholder="Dirección"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    required
                />

                <Form.Control
                    className="input-capacitaciones"
                    placeholder="Comuna"
                    value={comuna}
                    onChange={(e) => setComuna(e.target.value)}
                    required
                />

              
            
                </div>
            </div>
            <div className="disponibilidad">
            <h3 className="h3-capacitaciones-disp">Disponibilidad</h3>
            <p className="p-capacitaciones-disp">Nuestro equipo trabaja de <strong>Lunes a<br></br>
            Domingo</strong> de <strong>11.00</strong> a <strong>18.00 hrs.</strong></p>
            <textarea
                    className="input-capacitaciones-disp"
                    placeholder="Coméntanos tu disponibilidad"
                    value={disponibilidad}
                    onChange={(e) => setDisponibilidad(e.target.value)}
                />
            </div>
            <div className="end-capacitaciones">
                <button className="btn-capacitaciones-enviar" type="submit">Enviar</button>
                </div>
        </div>
        
    </form>
    );
};

export default CapacitacionesForm;
