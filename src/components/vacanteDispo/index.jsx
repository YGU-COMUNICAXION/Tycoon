import React from 'react'
import renderStringHMTLtoJSX from "../../utils/renderStringHTMLtoJSX";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "./styles.css"

const VacanteDispo = () => {
    const { t } = useTranslation("vacates");

  return (
    <>
        <div className='vacanteDispoMainDiv'>
            <p className='vacantetitle'>{t("vacante")}</p>
            <p className='blackP'>{renderStringHMTLtoJSX(t("coordinador"))}</p>
            <p className='vacantesBlueP'>{t("requisitos")}</p>
            <ul>
                <li className='smallP'>{renderStringHMTLtoJSX(t("firstRequisito"))}</li>
                <li className='smallP'>{renderStringHMTLtoJSX(t("secondRequisito"))}</li>
                <li className='smallP'>{renderStringHMTLtoJSX(t("thirdRequisito"))}</li>
                <li className='smallP'>{renderStringHMTLtoJSX(t("fourthRequisito"))}</li>
            </ul>
            <p className='vacantesBlueP'>{t("objetivo")}</p>
            <ul>
                <li className='smallP'>{t("firstObjetivo")}</li>
                <li className='smallP'>{t("secondObjetivo")}</li>
            </ul>
            <p className='vacantesBlueP'>{t("funciones")}</p>
            <ul>
                <li className='smallP'>{t("firstFuncion")}</li>
                <li className='smallP'>{t("secondFuncion")}</li>
                <li className='smallP'>{t("thridFuncion")}</li>
                <li className='smallP'>{t("fourthFuncion")}</li>
                <li className='smallP'>{t("fifthFuncion")}</li>
                <li className='smallP'>{t("sixthFuncion")}</li>
                <li className='smallP'>{t("seventhFuncion")}</li>
                <li className='smallP'>{t("eighthFuncion")}</li>
                <li className='smallP'>{t("ninethFuncion")}</li>
                <li className='smallP'>{t("tenthFuncion")}</li>
            </ul>
            <p className='vacantesBlueP'>{t("habilidades")}</p>
            <ul>
                <li className='smallP'>{t("firstHabilidad")}</li>
                <li className='smallP'>{t("secondHabilidad")}</li>
                <li className='smallP'>{t("thirdHabilidad")}</li>
                <li className='smallP'>{t("fourthHabilidad")}</li>
                <li className='smallP'>{t("fifthHabilidad")}</li>
                <li className='smallP'>{t("sixthHabilidad")}</li>
                <li className='smallP'>{t("seventhHabilidad")}</li>
                <li className='smallP'>{t("eightHabilidad")}</li>
            </ul>
        </div>
    </>
 
  )
}

export default VacanteDispo