import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../utils/renderStringHTMLtoJSX";
import Layout from "../components/layout"
import "../css/aboutUs.css"
import ReconocimientoCard from "../components/reconocimientosCard";
import Top from "../images/mobile/reconocimientos/top20.png"
import Promarca from "../images/mobile/reconocimientos/promarca.png"
import Universal from "../images/mobile/reconocimientos/universal.png"
import Homey from "../images/mobile/reconocimientos/homey.png"
import Rovio from "../images/mobile/reconocimientos/rovio.png"
import Hall from "../images/mobile/reconocimientos/hall of fame.png"
import Merch from "../images/mobile/reconocimientos/merch.png"
import Retail from "../images/mobile/premios/best-retail.png"
import Agent from "../images/mobile/premios/best-agent.png"
import Mk from "../images/mobile/premios/best-mkt.png"
import InstitucionesCard from "../components/institucionesCard"
import Museo from "../images/mobile/instituciones/museo.png"
import Cadena from "../images/mobile/instituciones/cadena.png"
import Vivienda from "../images/mobile/instituciones/vivienda.png"
import Que from "../images/mobile/nosotros/que.png"
import Como from "../images/mobile/nosotros/como.png"


const AboutUsPage = () => {
    const { t } = useTranslation("aboutus");

    return (
        <Layout>
            <div className="MainDiv">
                <div className="aboutFirstSection"/>
                <div className="aboutSecondSection">
                    <p className="smallP">{renderStringHMTLtoJSX(t("aboutFirstP"))}</p>
                    <p className="smallP">{t("aboutSecondP")}</p>
                    <p className="smallP">{renderStringHMTLtoJSX(t("aboutThirdP"))}</p>
                    <p className="smallP">{t("aboutFourthP")}</p>
                </div>
                <div className="aboutThirdSection">
                    <h2 className="sectionTitle">{renderStringHMTLtoJSX(t("aboutWhat"))}</h2>
                    <p className="regularP">{renderStringHMTLtoJSX(t("aboutFifthP"))}</p>
                    <img src={Que} className="como"/>
                </div>
                <div className="aboutFourthSection">
                    <h2 className="sectionTitle">{renderStringHMTLtoJSX(t("aboutHow"))}</h2>
                    <p className="regularP">{t("aboutSixthP")}</p>
                    <p className="regularP">{t("aboutSeventhP")}</p>
                    <p className="regularP">{t("aboutEighthP")}</p>
                    <p className="regularP">{t("aboutNinethP")}</p>
                    <img src={Como} className="como"/>
                </div>
                <div className="aboutFifhtSection">
                    <img/>
                    <h2 className="sectionTitle">{renderStringHMTLtoJSX(t("aboutDoYou"))}</h2>
                    <p className="regularP">{t("aboutTenthP")}</p>
                    <p className="smallP">{renderStringHMTLtoJSX(t("aboutEleventhP"))}</p>
                    <p className="smallP">{renderStringHMTLtoJSX(t("aboutTwelfthP"))}</p>
                    <img/>
                </div>
                <div className="aboutSixthSection">
                    <h2 className="sectionTitle">{renderStringHMTLtoJSX(t("aboutAcknowledgments"))}</h2>
                    <div className="reconocimientosRow">
                        <ReconocimientoCard image={Top} firstP={t("global")} secondP={t("agent")}/>
                        <ReconocimientoCard image={Promarca} firstP={t("awards")} secondP={t("promarca")}/>
                    </div>
                    <div className="reconocimientosRow">
                        <ReconocimientoCard image={Universal} firstP={t("universal")} secondP={t("consumer")}/>
                        <ReconocimientoCard image={Homey} firstP={t("fox")} secondP={t("homey")}/>
                    </div>
                    <div className="reconocimientosRow">
                        <ReconocimientoCard image={Rovio} firstP={t("rovio")} secondP={t("angry")}/>
                        <ReconocimientoCard image={Hall} firstP={t("elias")} secondP={t("salon")}/>
                    </div>
                    <div className="reconocimientosRow">
                        <ReconocimientoCard image={Merch} firstP={t("team")} secondP={t("globalMerch")}/>
                    </div>
                    <h2 className="sectionTitle">{renderStringHMTLtoJSX(t("aboutAwards2022"))}</h2>
                    <div className="reconocimientosRow">
                        <ReconocimientoCard image={Retail} firstP={t("rovio")} secondP={t("angry")}/>
                        <ReconocimientoCard image={Agent} firstP={t("elias")} secondP={t("salon")}/>
                    </div>
                    <div className="reconocimientosRow">
                        <ReconocimientoCard image={Mk} firstP={t("team")} secondP={t("globalMerch")}/>
                    </div>
                </div>
                <div className="aboutSeventhSection">
                    <img/>
                    <h2 className="sectionTitle">{renderStringHMTLtoJSX(t("aboutResposability"))}</h2>
                    <InstitucionesCard image={Museo} institucionName={t("museoName")} info={t("museoInfo")}/>
                    <InstitucionesCard image={Cadena} institucionName={t("cadenaName")} info={t("cadenaInfo")}/>
                    <InstitucionesCard image={Vivienda} institucionName={t("viviendaName")} info={t("viviendaInfo")}/>
                </div>
            </div>
        </Layout>
    )
}

export default AboutUsPage
