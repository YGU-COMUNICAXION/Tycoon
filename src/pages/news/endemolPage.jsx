import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../../utils/renderStringHTMLtoJSX";
import Layout from "../../components/layout";
import "../../css/news/endemol.css";
import NoticiasRecientes from "../../components/noticias-recientes";
import useWindowSize from '../../hooks/useWindowSize';
import SingleNews from '../../components/singleNews';
import endemolBanner from "../../images/desktop/noticias/endemol/endemolBanner.png"
import endemol1 from "../../images/desktop/noticias/endemol/endemol1.png"
import endemol2 from "../../images/desktop/noticias/endemol/endemol2.png"
import { Link } from "gatsby";
import NoticiasCard from '../../components/noticias-card';
import Nuevo from "../../images/mobile/noticias/noticiasRecientes/nuevo.png"
import Cobra from "../../images/mobile/noticias/noticiasRecientes/cobra.png"
import Among from "../../images/desktop/noticias/noticiasRecientes/among.png"
import Mas from "../../images/mobile/noticiasCard/botón-mas.png"

const EndemolPage = () => {
    const { t } = useTranslation("endemol");
    const windowSize = useWindowSize();

    return (
        <Layout>
        {windowSize < 752 ? (
            <>
            <SingleNews
                backgroundImage={endemolBanner}
                singleTitle={t("endemolTitle")}
                singleDate={renderStringHMTLtoJSX(t("endemolDate"))}
                sigleFirstP={renderStringHMTLtoJSX(t("endemolFirstP"))}
            >
                <img src={endemol1} className="amongfFirstimg"/>
                <img src={endemol2} className="amongfFirstimg"/>
                <div className='endemolContainer'>
                    <p className='containerLight'>{t("endemolSecondP")}</p>
                    <p className='containerBold'>{t("endemolThirdP")}</p>
                </div>
                <div className='endemolSecondContainer'>
                    <p className='containerLight'>{t("endemolFourthP")}</p>
                    <p className='containerBold'>{t("endemolFifthP")}</p>
                </div>
            </SingleNews>
            <div className='singleRecent'>
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
            </>
        ):(
            <>
            <SingleNews
                backgroundImage={endemolBanner}
                singleTitle={t("endemolTitle")}
                singleDate={renderStringHMTLtoJSX(t("endemolDate"))}
            >
            <div className='newsDualDiv'>
                <div className='dualLeftDiv'>
                    <p className='regularP'>{renderStringHMTLtoJSX(t("endemolFirstP"))}</p>
                </div>
                <div className='dualRightDiv'>
                    <img src={endemol1} className="endemolFirstimgDesk"/>
                    <img src={endemol2} className="endemolFirstimgDesk"/>
                </div>
            </div>
            <div className='singleNewsContentDesk'>
                <div className='amongContainerDesk'>
                    <p className='containerLight'>{t("endemolSecondP")}</p>
                    <p className='containerBold'>{t("endemolThirdP")}</p>
                </div>
                <div className='amongContainerDesk'>
                    <p className='containerLight'>{t("endemolFourthP")}</p>
                    <p className='containerBold'>{t("endemolFifthP")}</p>
                </div>                     
            </div>
            </SingleNews>
            <div className='singleRecentDesk'>
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
            </>
        )}
        </Layout>
    )
}

export default EndemolPage