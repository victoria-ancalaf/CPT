import React from 'react'
import Login from '../Components/Administrador/Login'
import Navbar from '../../src/Components/Navbar/Navbar'
import '../Styles/Administrador.css'


const Administrador = () => {
    return (
        <div className="administrador-container">
            <Navbar />
            <div className="admin-left-right">
            <div className="admin-left">
                <p className="admin-text">
                    Bienvenido a <strong>Panel de<br></br>
                    Administración</strong>
                </p>
            </div>
            <div className="admin-right">
                <Login />
            </div>
            </div>
        </div>
    )
}

export default Administrador

