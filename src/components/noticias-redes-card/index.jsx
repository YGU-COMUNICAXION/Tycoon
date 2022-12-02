import React from 'react'
import "./styles.css"
import Mas from "../../images/mobile/noticiasCard/botón-mas.png"
import Facebook from "../../images/mobile/noticiasCard/icon-facebook.png"
import Instagram from "../../images/mobile/noticiasCard/icon-instagram.png"

const NoticiasCard = ({image, title, date}) => {
  return (
    <div className='noticiaMainDiv'>
        <div className='noticiaUpperDiv'>
            <img src={image}/>
            <p className='noticiaTitle'>{title}</p>
        </div>
        <div className='noticiaUnderDiv'>
            <p className='noticiaDate'>{date}</p>
            <div className='noticiaIconsRow'>
              <img src={Facebook} className="mas"/>
              <img src={Instagram} className="mas"/>
            </div>
        </div>
    </div>
  )
}
export default NoticiasCard
