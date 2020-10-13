import React from 'react'
import './DatosAdmin.css'

const DatosAdmin = () => {
    return (
        <div className="containerDatosAdmin mt-5 mb-2">
       
        <div className="row">
            <div className="col-md-6">
               <h1> datos del administrador </h1>
               <ul className="list-group">
                   <li>Nombre</li>
                   <li>foto</li>
                   
               </ul>
            </div>
            <div className="col-md-6">
                
                <h1>Foto administrador</h1>
            </div>
        </div>
        
    </div>
    )
}

export default DatosAdmin
