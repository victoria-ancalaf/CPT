import React, { useState } from 'react';
import { firebase } from '../../firebase';
import './VoluntarioForm.css';

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

        db.collection('voluntario').add({
            name: name,
            bday: bday,
			phone: phone,
			email: email,
            comuna: comuna,
            cuentanos: cuentanos,
            disponibilidad: disponibilidad
        })
        .then (() => {
            alert("Enviado");
        })
        .catch(error => {
            alert(error.message);
        });

        setName('');
        setEmail('');
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
        <div className="input-container">
            <div className="personal-info">
                <div className="h3-voluntario">
                    <h3 >Datos personales</h3>
                </div>
                
                <div className="left-inputs">
                <input
                    className="input-voluntario-name"
                    placeholder="Nombre Completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="date"
                    className="input-voluntario-bday"
                    placeholder="Fecha de Nacimiento"
                    value={bday}
                    onChange={(e) => setBday(e.target.value)}
                />

                <input
                    className="input-voluntario"
                    placeholder="Teléfono"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <input
                    className="input-voluntario"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />


                <input
                    className="input-voluntario"
                    placeholder="Comuna"
                    value={comuna}
                    onChange={(e) => setComuna(e.target.value)}
                />

                <input
                    className="input-voluntario-name"
                    placeholder="Cuéntanos un poco de ti para conocerte"
                    value={cuentanos}
                    onChange={(e) => setCuentanos(e.target.value)}
                />              
            
                </div>
            </div>
            <div className="disponibilidad">
            <h3 className="h3-voluntario">Disponibilidad</h3>
            <p>Nuestro equipo trabaja de <strong>Lunes a<br></br>
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