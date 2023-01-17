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
import Nuevo from "../images/mobile/noticias/noticiasRecientes/nuevo.png"
import Cobra from "../images/mobile/noticias/noticiasRecientes/cobra.png"
import Among from "../images/mobile/noticias/noticiasRecientes/among.png"
import Mas from "../images/mobile/noticiasCard/botón-mas.png"
import esBackground from "../images/mobile/noticias/bannerNoticiasEsp.png"
import enBackground from "../images/desktop/noticias/PORTADA-NEWS -eng..png"
import esBackgroundDesk from "../images/desktop/noticias/portadaNoticiasDeskEsp.png"
import enBackgroundDesk from "../images/desktop/noticias/PORTADA-NEWS -eng..png"

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
                                <NoticiasCard image={Nuevo} title={t("new")} date={t("newDate")}>
                                    <Link to='/news/nuevo-en-tycoon'>
                                        <img src={Mas} className="mas"/>
                                    </Link>
                                </NoticiasCard>
                                <NoticiasCard image={Cobra} title={t("cobra")} date={t("cobraDate")}>
                                    <Link to='/news/cobra-kai'>
                                        <img src={Mas} className="mas"/>
                                    </Link>
                                </NoticiasCard>
                                <NoticiasCard image={Among} title={t("among")} date={t("amongDate")}>
                                    <Link to='/news/among-us'>
                                        <img src={Mas} className="mas"/>
                                    </Link>
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
                                <NoticiasCard image={Nuevo} title={t("new")} date={t("newDate")}>
                                    <Link to='/news/nuevo-en-tycoon'>
                                        <img src={Mas} className="mas"/>
                                    </Link>
                                </NoticiasCard>
                                <NoticiasCard image={Cobra} title={t("cobra")} date={t("cobraDate")}>
                                    <Link to='/news/cobra-kai'>
                                        <img src={Mas} className="mas"/>
                                    </Link>
                                </NoticiasCard>
                                <NoticiasCard image={Among} title={t("among")} date={t("amongDate")}>
                                    <Link to='/news/among-us'>
                                        <img src={Mas} className="mas"/>
                                    </Link>
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
