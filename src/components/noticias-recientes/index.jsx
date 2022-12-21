import React from 'react'
import "./styles.css"
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../../utils/renderStringHTMLtoJSX";
import NoticiasCard from '../noticias-card'
import Nuevo from "../../images/mobile/noticias/noticiasRecientes/nuevo.png"
import Cobra from "../../images/mobile/noticias/noticiasRecientes/cobra.png"
import Among from "../../images/mobile/noticias/noticiasRecientes/among.png"
import useWindowSize from '../../hooks/useWindowSize';
import NuevoDesk from "../../images/desktop/noticias/noticiasRecientes/nuevo.png"
import CobraDesk from "../../images/desktop/noticias/noticiasRecientes/cobra.png"
import AmongDesk from "../../images/desktop/noticias/noticiasRecientes/among.png"
import Mas from "../../images/mobile/noticiasCard/botón-mas.png"

const NoticiasRecientes = () => {
  const { t } = useTranslation("news");
  const windowSize = useWindowSize();

  return (
    <div className='noticiasRecientesMainDiv'>
    
        {windowSize < 752 ? (
          <div className='noticiasRecientesDiv'>
            <NoticiasCard image={Nuevo} title={t("new")} date={t("newDate")}>
              {/* <img src={Mas} className="mas"/> */}
            </NoticiasCard>
            <NoticiasCard image={Cobra} title={t("cobra")} date={t("cobraDate")}>
              {/* <img src={Mas} className="mas"/> */}
            </NoticiasCard>
            <NoticiasCard image={Among} title={t("among")} date={t("amongDate")}>
              {/* <img src={Mas} className="mas"/> */}
            </NoticiasCard>
          </div>
        ):(
          <div className='noticiasRecientesDivDesk'>
          <NoticiasCard image={Nuevo} title={t("new")} date={t("newDate")}>
              {/* <img src={Mas} className="mas"/> */}
            </NoticiasCard>
            <NoticiasCard image={Cobra} title={t("cobra")} date={t("cobraDate")}>
              {/* <img src={Mas} className="mas"/> */}
            </NoticiasCard>
            <NoticiasCard image={Among} title={t("among")} date={t("amongDate")}>
              {/* <img src={Mas} className="mas"/> */}
            </NoticiasCard>
          </div>
        )}
    </div>
  )
}
export default NoticiasRecientes
