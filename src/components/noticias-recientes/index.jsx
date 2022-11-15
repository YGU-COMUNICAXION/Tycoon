import React from 'react'
import "./styles.css"
import NoticiasCard from '../noticias-card'
import Nuevo from "../../images/mobile/noticias/noticiasRecientes/nuevo.png"
import Cobra from "../../images/mobile/noticias/noticiasRecientes/cobra.png"


const NoticiasRecientes = ({title}) => {
  return (
    <div className='noticiasRecientesMainDiv'>
        <h2 className='sectionTitle'>{title}</h2>
        <div className='noticiasRecientesDiv'>
            <NoticiasCard image={Nuevo} title={"¡NUEVO EN TYCOON! Blippi y Cocomelon."} date={"04 de Junio  ·  2021"}/>
            <NoticiasCard image={Cobra} title={"Cobra Kai tiene su primera Fashion Collab de la mano de Prima Volta."} date={"07 de Mayo  ·  2021"}/>
            <NoticiasCard image={Cobra} title={"Cobra Kai tiene su primera Fashion Collab de la mano de Prima Volta."} date={"07 de Mayo  ·  2021"}/>
        </div>
    </div>
  )
}
export default NoticiasRecientes
