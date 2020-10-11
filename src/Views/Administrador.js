import React from 'react'
import Login from '../Components/Administrador/Login'
import { Container } from 'react-bootstrap'


const Administrador = () => {
    return (
        <div>
            
            <Container 
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight:"100vh"}}>
                <div className="w-100" style={{ maxWidth: "400px"}}>
                <Login />
                </div>
            </Container>
           
        </div>
    )
}

export default Administrador

