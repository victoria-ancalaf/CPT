import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//import AOS  from 'aos'; 
//import 'aos/dist/aos.css'  // También puede utilizar <link> para estilos 





function App() {
  return (
    <div className="App">
     <header className="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll="50">
  <div className="container">
    <p className="btn btn-rose btn-round"  role="button" target="_blank">
      <strong>...</strong>
      <i className="material-icons">flight</i>
    </p>
  </div>
</header>
<section className="page-header text-center position-relative banner-section" style={{backgroundColor:"#FFFFFF"}}>
  <div className="container">
    <h1 className="title">...</h1>
    <h3>...</h3>
  </div>
</section>
   
    </div>
  );
}

export default App;
