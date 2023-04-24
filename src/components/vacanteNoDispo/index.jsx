import React from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import renderStringHMTLtoJSX from "../../utils/renderStringHTMLtoJSX";
import { useTranslation } from "gatsby-plugin-react-i18next";
import BlueFace from "../../images/vacantes/blueFace.png"
import "./styles.css"

const VacanteNoDispo = () => {
    const { t } = useTranslation("vacates");
    const windowSize = useWindowSize();

  return (
    <>
    {windowSize < 752 ? (
        <div className='vacanteNoDispoMainDiv'>
            <img className='blueFace' src={BlueFace}/>
            <p className='smallP'>{t("noVacanteFirstP")}</p>
            <p className='smallP'>{t("noVacanteSecondP")}</p>
        </div>
    ):(
        <div className='vacanteNoDispoMainDivDesk'>
            <img className='blueFace' src={BlueFace}/>
            <div className='nodispoRightDiv'>
                <p className='smallP'>{t("noVacanteFirstP")}</p>
                <p className='smallP'>{t("noVacanteSecondP")}</p>
                <p className='smallP' style={{ textAlign:"left"}}>{renderStringHMTLtoJSX(t("ofrecemos"))}</p>
                <p className='vacantesBlueP'>{t("envianostuCv")}</p>
                <a href='mailto:angelica.pelagio@tycoon.mx'>
                    <p className='vacantesBlueP'>{t("angelicacorreo")}</p>
                </a>
                <p className='blueTitleDesk'>{t("muchoexito")}</p>
            </div>

        </div>
    )}   
    </>
 
  )
}

export default VacanteNoDispo