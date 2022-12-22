import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../utils/renderStringHTMLtoJSX";
import Layout from "../components/layout";
import "../css/news.css"
import NoticiasRecientes from "../components/noticias-recientes"
import NoticiasNav from "../components/nav-noticias"
import useWindowSize from "../hooks/useWindowSize";

const NewsPage = () => {
    const { t } = useTranslation("news");
    const windowSize = useWindowSize();

    return (
        <Layout>
                {windowSize < 752 ? (
                    <div className="MainDiv">
                        <div className="newsFirstSection"></div>
                        <div className="newsSecondSection">
                            <h2 className='sectionTitle'>{renderStringHMTLtoJSX(t("recentNews"))}</h2>
                            <NoticiasRecientes title={renderStringHMTLtoJSX(t("recentNews"))}/>
                        </div>
                        <div className="newsThirdSection">
                            <h2 className="sectionTitle">{t("newstitle")}</h2>
                            <NoticiasNav/>
                        </div>
                    </div>
                ):(
                    <div className="MainDivDesk">
                        <div className="newsFirstSectionDesk"/>
                        <div className="newsSecondSection">
                            <h2 className='sectionTitle'>{renderStringHMTLtoJSX(t("recentNews"))}</h2>
                            <NoticiasRecientes title={renderStringHMTLtoJSX(t("recentNews"))}/>
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
