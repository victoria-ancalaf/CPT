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
    <a className="btn btn-rose btn-round" href="https://www.visitscotland.com/" role="button" target="_blank" rel="noopener noreferrer">
      <strong>Pick Your Flight</strong> 
      <i className="material-icons">flight</i>
    </a>
  </div>
</header>

<section className="page-header text-center position-relative banner-section" style={{backgroundImage:" url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/scotland-unsplash.jpg)", height:"622px", width:"100%"}}>
  <div className="container">
    <h1 className="title">Welcome to Scotland</h1>
    <h3 className="">One of the most beautiful countries in the world...</h3>
  </div>
</section>


    </div>
  );
}

export default App;
