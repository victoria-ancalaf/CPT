import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import AOS  from 'aos'; 
//import 'aos/dist/aos.css';  // También puede utilizar <link> para estilos 
import Carrusel from '../src/Components/Carrusel'
import Voluntariado from './Components/Voluntariado';
import Operaciones from './Components/Operaciones';
import Graficos from './Components/Graficos';


function App() {
  return (
    <div className="App">
     <header className="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll="50">
  <div className="container">
    <a className="btn btn-rose btn-round" href="https://www.visitscotland.com/" role="button" target="_blank" rel="noopener noreferrer">
      <strong>Pick Your Flight</strong> 
      <i className="material-icons">flight</i>
    </a>
  </div>
</header>

{/*componentes del Routing*/}
<Carrusel/>
<Voluntariado/>
<Operaciones/>
<Graficos/>








    </div>





  );
}

export default App;
