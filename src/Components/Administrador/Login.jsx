import React, { useCallback, useContext } from 'react';
import { AuthContext } from "./AuthContext"
import { Form, Button, Card, Container } from 'react-bootstrap'
import { withRouter, Redirect } from 'react-router'
import { firebase} from '../../firebase'


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
        <Container 
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight:"100vh"}}>
                <div className="w-100" style={{ maxWidth: "400px"}}>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Ingresar</h2>     
                <Form onSubmit={handleLogin}>
                    <Form.Group>
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control 
                        name="email"
                        type="email" 
                        placeholder="Ingrese email"
                        required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control 
                        name="password"
                        type="password" 
                        placeholder="Ingrese contraseña"
                        required />
                    </Form.Group>
                    <Button  className="w-100" type="submit">
                        Entrar a Panel
                        </Button>
                </Form>
                <div className="w-100 text-center mt-3">
            {/* <Link to="/Recuperar-contrasena">Forgot Password?</Link> */}
          </div>
            </Card.Body>
        </Card> 
        </div>
            </Container>
    )
}

export default withRouter(Login);
