import React from 'react'
import "./styles.css"
import Mas from "../../images/mobile/noticiasCard/botón-mas.png"

const NoticiasCard = ({image, title, date}) => {
  return (
    <div className='noticiaMainDiv'>
        <div className='noticiaUpperDiv'>
            <img src={image}/>
            <p className='noticiaTitle'>{title}</p>
        </div>
        <div className='noticiaUnderDiv'>
            <p className='noticiaDate'>{date}</p>
            <img src={Mas} className="mas"/>
        </div>
    </div>
  )
}
export default NoticiasCard
