import React, { useCallback, useContext } from 'react';
import { AuthContext } from "./AuthContext"
import { Form, Button, Card, Container } from 'react-bootstrap'
import { withRouter, Redirect } from 'react-router'
import { firebase} from '../../firebase'
import './Login.css'

const Login = ({history}) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await firebase
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
                history.push("/AdministradorFormularios");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );
   
    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/AdministradorFormularios" />;
    }
    
    return (
        <Container className="container-login">
        <Card className="card-login">
            <Card.Body className="w-553px h-519px">
                <h2 className="text-login">Ingresar</h2>     
                <Form onSubmit={handleLogin}>
                    <Form.Group>
                        <Form.Label className="text-login-label">Correo Electrónico</Form.Label>
                        <Form.Control 
                        className="login-admin-input"
                        name="email"
                        type="email" 
                        placeholder="Ingresa tu correo"
                        required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="text-login-label">Contraseña</Form.Label>
                        <Form.Control 
                        className="login-admin-input"
                        name="password"
                        type="password" 
                        placeholder="Ingresa tu contraseña"
                        required />
                    </Form.Group>
                    <div className="entrar-panel">
                    <Button className="btn-admin-login" type="submit">
                        Entrar a Panel
                    </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card> 
            </Container>
    )
}

export default withRouter(Login);
