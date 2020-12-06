import React from 'react';
import Main from '../src/Views/Main'
import About from '../src/Views/About'
import Howtohelp from '../src/Views/Howtohelp'
import Action2030 from '../src/Views/Action2030'
import Partners from '../src/Views/Partners'
import Contact from '../src/Views/Contact'
import Administrador from '../src/Views/Administrador'
import ViewFormAdministrador from '../src/Views/ViewFormAdministrador';
import { AuthProvider } from '../src/Components/Administrador/AuthContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from './Components/Administrador/PrivateRoute';
import Transparency from '../src/Views/Transparency';



function App() {
  return (
    <AuthProvider>
    <Router>
      <Switch>
      <Route exact path="/">
        <Main />
        </Route>
        <PrivateRoute exact path="/AdministradorFormularios" component={ViewFormAdministrador} />
        <Route path="/Administrador">
         <Administrador />
        </Route>
        <Route path="/Contacto">
         <Contact />
        </Route>
        <Route path="/PortalColaboradores">
         <Partners />
        </Route>
        <Route path="/Transparencia">
         <Transparency />
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
