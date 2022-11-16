import React from 'react'
import "./styles.css"
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../../utils/renderStringHTMLtoJSX";
import NoticiasCard from '../noticias-card'
import Nuevo from "../../images/mobile/noticias/noticiasRecientes/nuevo.png"
import Cobra from "../../images/mobile/noticias/noticiasRecientes/cobra.png"
import Among from "../../images/mobile/noticias/noticiasRecientes/among.png"

const NoticiasRecientes = ({title}) => {
  const { t } = useTranslation("news");


  return (
    <div className='noticiasRecientesMainDiv'>
        <h2 className='sectionTitle'>{title}</h2>
        <div className='noticiasRecientesDiv'>
            <NoticiasCard image={Nuevo} title={t("new")} date={t("newDate")}/>
            <NoticiasCard image={Cobra} title={t("cobra")} date={t("cobraDate")}/>
            <NoticiasCard image={Among} title={t("among")} date={t("amongDate")}/>
        </div>
    </div>
  )
}
export default NoticiasRecientes
