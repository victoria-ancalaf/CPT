import React from 'react';
import Main from '../src/Views/Main'
import About from '../src/Views/About'
import Howtohelp from '../src/Views/Howtohelp'
import Action2030 from '../src/Views/Action2030'
import Partners from '../src/Views/Partners'
import Contact from '../src/Views/Contact'
import Administrator from '../src/Views/Administrator'
import Forms from '../src/Views/Forms'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ViewFormAdministrador from '../src/Views/ViewFormAdministrador';



function App() {
  return (
    <Router>
      <Switch>
      <Route path="/Formularios">
         <Forms />
        </Route>
        <Route path="/Administrador">
         <Administrator />
        </Route>
        <Route path="/AdministradorFormularios">
         <ViewFormAdministrador />
        </Route>
        <Route path="/Contacto">
         <Contact />
        </Route>
       {/* <Route path="/PortalColaboradores">*/}
       <Route path="/MainPortalColaboradores">
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
        <Route exact path="/">
        <Main />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
