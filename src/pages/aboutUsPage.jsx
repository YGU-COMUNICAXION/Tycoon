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


const AboutUsPage = () => {
    const { t } = useTranslation("aboutus");

    return (
        <Layout>
            <div className="MainDiv">
                <div className="contactFirstSection"/>
                <div className="contactSecondSection">
                    <p className="regularP">{renderStringHMTLtoJSX(t("contactFirstP"))}</p>
                    <p className="regularP">{t("contactSecondP")}</p>
                    <p className="regularP">{renderStringHMTLtoJSX(t("contactThirdP"))}</p>
                    <p className="regularP">{t("contactFourthP")}</p>
                </div>
                <div className="contactThirdSection">
                    <h2 className="sectionTitle">{renderStringHMTLtoJSX(t("contactWhat"))}</h2>
                    <p className="regularP">{renderStringHMTLtoJSX(t("contactFifthP"))}</p>
                    <img/>
                </div>
                <div className="contactFourthSection">
                    <h2 className="sectionTitle">{renderStringHMTLtoJSX(t("contactHow"))}</h2>
                    <p className="regularP">{t("contactSixthP")}</p>
                    <p className="regularP">{t("contactSeventhP")}</p>
                    <p className="regularP">{t("contactEighthP")}</p>
                    <p className="regularP">{t("contactNinethP")}</p>
                    <img/>
                </div>
                <div className="contactFifhtSection">
                    <img/>
                    <h2 className="sectionTitle">{renderStringHMTLtoJSX(t("contactDoYou"))}</h2>
                    <p className="regularP">{t("contactTenthP")}</p>
                    <p className="regularP">{renderStringHMTLtoJSX(t("contactEleventhP"))}</p>
                    <p className="regularP">{renderStringHMTLtoJSX(t("contactTwelfthP"))}</p>
                    <img/>
                </div>
                <div className="contactSixthSection">
                    <h2 className="sectionTitle">{renderStringHMTLtoJSX(t("contactAcknowledgments"))}</h2>
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
                    <h2 className="sectionTitle">{renderStringHMTLtoJSX(t("contactAwards2022"))}</h2>
                    <div className="reconocimientosRow">
                        <ReconocimientoCard image={Retail} firstP={t("rovio")} secondP={t("angry")}/>
                        <ReconocimientoCard image={Agent} firstP={t("elias")} secondP={t("salon")}/>
                    </div>
                    <div className="reconocimientosRow">
                        <ReconocimientoCard image={Mk} firstP={t("team")} secondP={t("globalMerch")}/>
                    </div>
                </div>
                <div className="contactSeventhSection">
                    <img/>
                    <h2 className="sectionTitle">{renderStringHMTLtoJSX(t("contactResposability"))}</h2>
                    {/* institucionesCards */}
                </div>
            </div>
        </Layout>
    )
}

export default AboutUsPage
