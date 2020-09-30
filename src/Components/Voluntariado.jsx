import React from 'react'
import Training from '../Components/Training'
import Huertos from '../Components/Huertos'
import BancoAlimentos from '../Components/BancoAlimentos'
import DonarTalento from '../Components/DonarTalento'
import '../Styles/Training.css';



const Voluntariado = () => {
  return (
    <div className="voluntariado-container">
      <Huertos />
      <Training />
      <BancoAlimentos />
      <DonarTalento />

    </div>
  )
}

export default Voluntariado
