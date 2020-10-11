import React from 'react'
import {firebase} from '../../firebase'

const FormulariosDonaciones = () => {
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

    return (
        <div className="container mt-5 mb-2">
            <div className="row">
                <div className="col-md-6">
                   <h1> Listar Formularios Huertos</h1>
                   <ul className="list-group">
                       {
                          huerto.map (item =>(
                              <li className="list-group-item" key={item.id}>
                                  <li>Nombre: {item.name}  {item.lastName} </li>    
                                  <li>E-mail: {item.email}</li>
                                  <li>Telefono: {item.phone}</li>
                                  <li>Direccion: {item.direccion} {item.comuna}</li>
                                  <li>Mensaje: {item.message}</li>  
                              </li>
                          )) 
                       }
                   </ul>
                </div>
                <div className="col-md-6">
                    <button onClick={() => firebase.auth().signOut()}>Sign out</button>
                    <h1>no se que poner aqui</h1>
                </div>
            </div>
            
        </div>
    )
}

export default FormulariosDonaciones

