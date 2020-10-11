import React from 'react';
import Main from '../src/Views/Main'
import About from '../src/Views/About'
import Howtohelp from '../src/Views/Howtohelp'
import Action2030 from '../src/Views/Action2030'
import Partners from '../src/Views/Partners'
import Contact from '../src/Views/Contact'
import Administrador from '../src/Views/Administrador'
import Forms from '../src/Views/Forms'
import ViewFormAdministrador from '../src/Views/ViewFormAdministrador';
import ForgotPassword from '../src/Components/Administrador/ForgotPassword'
import { AuthProvider } from '../src/Components/Administrador/AuthContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from './Components/Administrador/PrivateRoute';



function App() {
  return (
    <AuthProvider>
    <Router>
      <Switch>
      <Route exact path="/">
        <Main />
        </Route>
      <Route path="/Formularios">
         <Forms />
        </Route>
        <PrivateRoute exact path="/AdministradorFormularios" component={ViewFormAdministrador} />
        <Route path="/Recuperar-contrasena">
         <ForgotPassword />
        </Route>
        <Route path="/Administrador">
         <Administrador />
        </Route>
        <Route path="/Contacto">
         <Contact />
        </Route>
        <Route path="/PortalColaboradores">
         <Partners />
        </Route>
        <Route path="/Accion2030">
         <Action2030 />
        </Route>
        <Route path="/ComoAyudar">
         <Howtohelp />
        </Route>
        <Route path="/Nosotros">
        <About />
        </Route>
       
      </Switch>
  </Router>
  </AuthProvider>
  );
}

export default App;
