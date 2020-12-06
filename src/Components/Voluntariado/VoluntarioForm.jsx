import React, { useState } from 'react';
import { firebase } from '../../firebase';
import './VoluntarioForm.css';
import { Form } from 'react-bootstrap';

const db = firebase.firestore();

const VoluntarioForm = () => {
    const [ name, setName ] = useState('');
    const [ bday, setBday ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ email, setEmail ] = useState('');
    const [ comuna, setComuna ] = useState('');
    const [ cuentanos, setCuentanos ] = useState('');
    const [ disponibilidad, setDisponibilidad ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const dateForm = new Date();

        db.collection('voluntario').add({
            name: name,
            bday: bday,
			phone: phone,
			email: email,
            comuna: comuna,
            cuentanos: cuentanos,
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
        setBday('');
        setPhone('');
        setEmail('');
        setComuna('');
        setCuentanos('');
        setDisponibilidad('');
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
        <div className="input-container">
            <div className="personal-info">
                <div className="h3-voluntario">
                    <h3 >Datos personales</h3>
                </div>
                
                <div className="left-inputs">
                <Form.Control
                    className="input-voluntario-name"
                    placeholder="Nombre Completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <Form.Control
                    className="input-voluntario"
                    placeholder="Fecha de Nacimiento"
                    value={bday}
                    onChange={(e) => setBday(e.target.value)}
                    required
               />

                <Form.Control
                    className="input-voluntario"
                    placeholder="Teléfono"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
               />

                <Form.Control
                    className="input-voluntario"
                    placeholder="Correo Electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />


                <Form.Control
                    className="input-voluntario"
                    placeholder="Comuna"
                    value={comuna}
                    onChange={(e) => setComuna(e.target.value)}
                    required
                />

                <Form.Control
                    className="input-voluntario-name"
                    placeholder="Cuéntanos un poco de ti para conocerte"
                    value={cuentanos}
                    onChange={(e) => setCuentanos(e.target.value)}
                    required
                />              
            
                </div>
            </div>
            <div className="disponibilidad">
            <h3 className="h3-voluntario-disp">Disponibilidad</h3>
            <p className="p-voluntariado-disp">Nuestro equipo trabaja de <strong>Lunes a<br></br>
            Domingo</strong> de <strong>11.00</strong> a <strong>18.00 hrs.</strong></p>
            <textarea
                    className="input-voluntario-disp"
                    placeholder="Coméntanos tu disponibilidad"
                    value={disponibilidad}
                    onChange={(e) => setDisponibilidad(e.target.value)}
                />
            </div>
            <div className="end-voluntario">
                <button className="btn-voluntario-enviar" type="submit">Enviar</button>
                </div>
        </div>
        
    </form>
    );
};

export default VoluntarioForm;