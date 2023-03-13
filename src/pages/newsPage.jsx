import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Link } from "gatsby";
import renderStringHMTLtoJSX from "../utils/renderStringHTMLtoJSX";
import Layout from "../components/layout";
import "../css/news.css"
import NoticiasRecientes from "../components/noticias-recientes"
import NoticiasNav from "../components/nav-noticias"
import useWindowSize from "../hooks/useWindowSize";
import NoticiasCard from "../components/noticias-card";
import esBackground from "../images/mobile/noticias/bannerNoticiasEsp.png"
import enBackground from "../images/desktop/noticias/PORTADA-NEWS-eng..webp"
import esBackgroundDesk from "../images/desktop/noticias/portadaNoticiasDeskEsp.png"
import enBackgroundDesk from "../images/desktop/noticias/PORTADA-NEWS-eng..webp"
import HelloCateau from "../images/desktop/noticias/HK.png"
import BleachSpinOff from "../images/desktop/noticias/2023/Bleach.jpg"
import FallGuysTycoon from "../images/desktop/noticias/2022/FallGuys.jpg"
import Instagram from "../images/mobile/noticiasCard/icon-instagram.png"

const imgMap = {en: enBackground, es: esBackground}
const imgMapDesk = {en: enBackgroundDesk, es: esBackgroundDesk}

const NewsPage = () => {
    const { t } = useTranslation("news");
    const windowSize = useWindowSize();
    const { i18n } = useTranslation();

    return (
        <Layout>
                {windowSize < 752 ? (
                    <div className="MainDiv">
                        <div className="newsFirstSection" style={{backgroundImage:`url("${imgMap[i18n.language]}")`}}></div>
                        <div className="newsSecondSection">
                            <h2 className='sectionTitle'>{renderStringHMTLtoJSX(t("recentNews"))}</h2>
                            <NoticiasRecientes>
                                <NoticiasCard image={HelloCateau} title={t("HelloChateau")} date={t("pendingDate")}>
                                    <a href='https://www.instagram.com/p/CiIM85IDQX0/?igshid=YmMyMTA2M2Y=' target="_blank">
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={BleachSpinOff} title={t("BleachSpinOFF")} date={t("BleachSpinDate")}>
                                    <a href='https://www.instagram.com/p/CosowM4rij9/' target="_blank">
                                    <img src={Instagram} className="mas"/>
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={FallGuysTycoon} title={t("FallGuysTycoon")} date={t("FallGuysDate")}>
                                    <a href='https://www.instagram.com/p/Cmc31sVNpE8/' target="_blank">
                                    <img src={Instagram} className="mas"/>
                                    </a>
                                </NoticiasCard>
                            </NoticiasRecientes>
                        </div>
                        <div className="newsThirdSection">
                            <h2 className="sectionTitle">{t("newstitle")}</h2>
                            <NoticiasNav/>
                        </div>
                    </div>
                ):(
                    <div className="MainDivDesk">
                        <div className="newsFirstSectionDesk" style={{backgroundImage:`url("${imgMapDesk[i18n.language]}")`}}/>
                        <div className="newsSecondSection">
                            <h2 className='sectionTitle'>{renderStringHMTLtoJSX(t("recentNews"))}</h2>
                            <NoticiasRecientes>
                                <NoticiasCard image={HelloCateau} title={t("HelloChateau")} date={t("pendingDate")}>
                                    <a href='https://www.instagram.com/p/CiIM85IDQX0/?igshid=YmMyMTA2M2Y=' target="_blank">
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={BleachSpinOff} title={t("BleachSpinOFF")} date={t("BleachSpinDate")}>
                                    <a href='https://www.instagram.com/p/CosowM4rij9/' target="_blank">
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={FallGuysTycoon} title={t("FallGuysTycoon")} date={t("FallGuysDate")}>
                                    <a href='https://www.instagram.com/p/Cmc31sVNpE8/' target="_blank">
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                </NoticiasCard>
                            </NoticiasRecientes>
                        </div>
                        <div className="newsThirdSection">
                            <h2 className="sectionTitle">{t("newstitle")}</h2>
                            <NoticiasNav/>
                        </div>
                    </div>
                )}

        </Layout>
    )
}

export default NewsPage
