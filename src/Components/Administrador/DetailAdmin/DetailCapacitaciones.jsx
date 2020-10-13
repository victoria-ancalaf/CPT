import React from 'react'
import './DetailCapacitaciones.css'
import {firebase} from '../../../firebase'
const DetailCapacitaciones = () => {
    const [capacitaciones,setcapacitaciones] = React.useState([])
        React.useEffect (() =>{
            const obtenerDatos = async () => {
                try {
                    const db = firebase.firestore()
                    const data =await db.collection('capacitaciones').get()
                    const arrayData =data.docs.map(doc => ({id:doc.id, ...doc.data()}))
                    console.log(arrayData)
                    setcapacitaciones(arrayData)
                } catch (error) {
                    console.log(error)
                    
                }
                
            }
          obtenerDatos()
        }, [])
        console.log(capacitaciones)
    return (
        
        <div className="row Detalle">
            
        <div className="col-md-4 contentId">
        

           <ul className="list-group">
           {
                  capacitaciones.map (item =>(
                      <div className="list-group-item celdaId" key={item.id}>
                          <li>Id # : {item.id}   </li>    
                         
                      </div>
                  )) 
               }
           </ul>

          
        </div>


        <div className="col-md-8 ">
            
      
           <ul className="list-group">
               {
                  capacitaciones.map (item =>(
                      <div className="list-group-item contenDatos" key={item.id}>
                          <li> ID # {item.id}</li>
                          <li>{item.date}</li>
                          <li>ID Formulario:#{item.id}</li>
                          <li>Nombre Completo:{item.name}</li>   
                          <li>Telefono: {item.phone}</li> 
                          <li>E-mail: {item.email}</li>
                          <li>Direccion: {item.direccion}</li>
                          <li>Comuna: {item.comuna}</li>
                          <li>Region: {item.region}</li>
                          <li>Profesion/Oficio: {item.profesion}</li>
                          <li>Disponibilidad Horario: {item.disponibilidad}</li>
                          
                      </div>
                  )) 
               }
           </ul>
        </div>
    
   
</div>
    )
}

export default DetailCapacitaciones
