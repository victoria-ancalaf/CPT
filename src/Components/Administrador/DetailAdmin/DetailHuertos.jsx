import React from 'react'
import {firebase} from '../../../firebase'
import './DetailHuertos.css'


const DetailHuertos = () => {

    const [huerto,setHuerto] = React.useState([])
    React.useEffect (() =>{
        const obtenerDatos = async () => {
            try {
                const db = firebase.firestore()
                const data =await db.collection('VoluntariosHuertos').get()
                const arrayData =data.docs.map(doc => ({id:doc.id, ...doc.data()}))
                console.log(arrayData)
                setHuerto(arrayData)
            } catch (error) {
                console.log(error)
                
            }
            
        }
      obtenerDatos()
    }, [])
    console.log(huerto)
   
    
    return (
     
        
       
        <div className="row Detalle">
            
            <div className="col-md-4 contentId">
            

               <ul className="list-group">
               {
                      huerto.map (item =>(
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
                      huerto.map (item =>(
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
                              <li>Terreno Disponible: {item.terreno}</li>  
                          </div>
                      )) 
                   }
               </ul>
            </div>
        
       
    </div>
    )
}

export default DetailHuertos;
