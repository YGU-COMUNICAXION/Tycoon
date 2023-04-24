import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/layout";
import "../css/vacantes.css"
import renderStringHMTLtoJSX from "../utils/renderStringHTMLtoJSX";
import useWindowSize from "../hooks/useWindowSize";
import VacanteDispo from "../components/vacanteDispo"
import SinVacante from "../components/vacanteNoDispo"

const VacantesPage = () => {
    const { t } = useTranslation("vacates");
    const windowSize = useWindowSize();

  return (
    <Layout>
    {windowSize < 752 ? (
        <div className="MainDiv">
            <div className='vacantesFirstSection'>
                <h2 className='blueTitle'>{t("vacantesTitle")}</h2>
                <h2 className='blueSubtitle'>{t("vacantesSubtitle")} </h2>
                <p className='estaen'>{t("estaEnBusqueda")}</p>
                {/* <SinVacante/> */}
                <VacanteDispo/>
                <p className='smallP' style={{ textAlign:"center"}}>{renderStringHMTLtoJSX(t("ofrecemos"))}</p>
                <p className='vacantesBlueP'>{t("envianostuCv")}</p>
                <a href='mailto:angelica.pelagio@tycoon.mx'>
                    <p className='vacantesBlueP'>{t("angelicacorreo")}</p>
                </a>
                <p className='blueTitle'>{t("muchoexito")}</p>

            </div>
        </div>

    ):(
        <div className="MainDivDesk">
            <div className='vacantesFirstSectionDesk'>
                <h2 className='blueTitle'>{t("vacantesTitle")}</h2>
                <h2 className='blueSubtitle'>{t("vacantesSubtitle")} </h2>
                <p className='estaen'>{t("estaEnBusqueda")}</p>
                {/* <SinVacante/> */}
                <VacanteDispo/>

            </div>
        </div>
    )}
    </Layout>
  )
}

export default VacantesPage