import React from 'react'
import './DatosAdmin.css'
import imagenAdmin from '../../../img/imagenAdmin.jpg'

const DatosAdmin = () => {
    return (
        <div className="containerDatosAdmin">
       
        <div className="row">
            <div className="col-md-6">
               <p className="nombreAdmin">Rafael Rincón</p>
               <p className="cargoAdmin">Administrador</p>
               <p className="mailAdmin">@rafa.rincon</p>

             
            </div>
            <div className="col-md-6">
                
            <img className="imagenAdmin"
            src={imagenAdmin}
            alt="FotoImagen"
          />
            </div>
        </div>
        
    </div>
    )
}

export default DatosAdmin
