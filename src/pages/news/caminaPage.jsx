import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../../utils/renderStringHTMLtoJSX";
import Layout from "../../components/layout";
import "../../css/news/cobra.css";
import NoticiasRecientes from "../../components/noticias-recientes";
import useWindowSize from '../../hooks/useWindowSize';
import SingleNews from '../../components/singleNews';
import CaminaBanner from "../../images/desktop/noticias/camina/caminaBanner.png";
import Camina1 from "../../images/desktop/noticias/camina/camina1.png";
import Camina2 from "../../images/desktop/noticias/camina/camina2.png";
import { Link } from "gatsby";
import NoticiasCard from '../../components/noticias-card';
import Nuevo from "../../images/mobile/noticias/noticiasRecientes/nuevo.png"
import Cobra from "../../images/mobile/noticias/noticiasRecientes/cobra.png"
import Among from "../../images/desktop/noticias/noticiasRecientes/among.png"
import Mas from "../../images/mobile/noticiasCard/botón-mas.png"



const CobraPage = () => {
    const { t } = useTranslation("camina");
    const windowSize = useWindowSize();

    return (
        <Layout>
        {windowSize < 752 ? (
            <>
            <SingleNews
                backgroundImage={CaminaBanner}
                singleTitle={t("caminaTitle")}
                singleDate={renderStringHMTLtoJSX(t("caminaDate"))}
                sigleFirstP={renderStringHMTLtoJSX(t("caminaFirstP"))}
            >
                <img src={Camina1} className="amongfFirstimg"/>
                <img src={Camina2} className="amongfFirstimg"/>
                <div className='finalPDivMob'>
                    <a href='https://www.lolyinthesky.com.mx/' target="_blank">
                        <h2 className='finalP'>{renderStringHMTLtoJSX(t("caminaFinalP"))}</h2>
                    </a>
                </div>
            </SingleNews>
            <div className='singleRecent'>
                <NoticiasRecientes>
                    <NoticiasCard image={Nuevo} title={t("new")} date={t("newDate")}>
                        <Link to='/news/newintycoon'>
                            <img src={Mas} className="mas"/>
                        </Link>
                    </NoticiasCard>
                    <NoticiasCard image={Cobra} title={t("cobra")} date={t("cobraDate")}>
                        <Link to='/news/cobrakai'>
                            <img src={Mas} className="mas"/>
                        </Link>
                    </NoticiasCard>
                    <NoticiasCard image={Among} title={t("among")} date={t("amongDate")}>
                        <Link to='/news/amongus'>
                            <img src={Mas} className="mas"/>
                        </Link>
                    </NoticiasCard>
                </NoticiasRecientes>
            </div>
            </>
        ):(
            <>
            <SingleNews
                backgroundImage={CaminaBanner}
                singleTitle={t("caminaTitle")}
                singleDate={renderStringHMTLtoJSX(t("caminaDate"))}
            >
            <div className='newsDualDiv'>
                <div className='dualLeftDiv'>
                    <p className='regularP'>{renderStringHMTLtoJSX(t("caminaFirstP"))}</p>
                </div>
                <div className='dualRightDiv'>
                <img src={Camina1} className="amongfFirstimg"/>
                <img src={Camina2} className="amongfFirstimg"/>
            </div>
            </div>
            <div className='singleNewsContentDesk'>
                <div className='finalPDiv'>
                    <a href='https://www.lolyinthesky.com.mx/' target="_blank">
                        <p className='sigleBottomP'>{renderStringHMTLtoJSX(t("caminaFinalP"))}</p>
                    </a>
                </div>
            </div>
            </SingleNews>
            <div className='singleRecentDesk'>
                <NoticiasRecientes>
                    <NoticiasCard image={Nuevo} title={t("new")} date={t("newDate")}>
                        <Link to='/news/newintycoon'>
                            <img src={Mas} className="mas"/>
                        </Link>
                    </NoticiasCard>
                    <NoticiasCard image={Cobra} title={t("cobra")} date={t("cobraDate")}>
                        <Link to='/news/cobrakai'>
                            <img src={Mas} className="mas"/>
                        </Link>
                    </NoticiasCard>
                    <NoticiasCard image={Among} title={t("among")} date={t("amongDate")}>
                        <Link to='/news/amongus'>
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

export default CobraPage