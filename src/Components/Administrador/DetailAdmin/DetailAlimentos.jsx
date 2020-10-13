import React from 'react'
import './DetailAlimentos.css'
import {firebase} from '../../../firebase'

const DetailAlimentos = () => {
    const [alimento,setAlimento] = React.useState([])
    React.useEffect (() =>{
        const obtenerDatos = async () => {
            try {
                const db = firebase.firestore()
                const data =await db.collection('alimentos').get()
                const arrayData =data.docs.map(doc => ({id:doc.id, ...doc.data()}))
                console.log(arrayData)
                setAlimento(arrayData)
            } catch (error) {
                console.log(error)
                
            }
            
        }
      obtenerDatos()
    }, [])
    console.log(alimento)
    return (
        <div className="row Detalle">
            
            <div className="col-md-4 contentId">
            

               <ul className="list-group">
               {
                      alimento.map (item =>(
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
                      alimento.map (item =>(
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
                              
                          </div>
                      )) 
                   }
               </ul>
            </div>
        
       
    </div>
    )
}

export default DetailAlimentos
