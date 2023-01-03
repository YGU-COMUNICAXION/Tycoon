import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../../utils/renderStringHTMLtoJSX";
import Layout from "../../components/layout";
import "../../css/news/iconic.css";
import NoticiasRecientes from "../../components/noticias-recientes";
import useWindowSize from '../../hooks/useWindowSize';
import SingleNews from '../../components/singleNews';
import iconicBanner from "../../images/desktop/noticias/iconic/iconicBanner.png"
import iconic1 from "../../images/desktop/noticias/iconic/iconic1.png"
import iconic2 from "../../images/desktop/noticias/iconic/iconic2.png"
import iconic3 from "../../images/desktop/noticias/iconic/iconic3.png"
import iconic4 from "../../images/desktop/noticias/iconic/iconic4.png"
import iconic5 from "../../images/desktop/noticias/iconic/iconic5.png"
import iconic6 from "../../images/desktop/noticias/iconic/iconic6.png"
import iconic7 from "../../images/desktop/noticias/iconic/iconic7.png"
import iconic8 from "../../images/desktop/noticias/iconic/iconic8.png"
import iconic9 from "../../images/desktop/noticias/iconic/iconic9.png"
import iconic10 from "../../images/desktop/noticias/iconic/iconic10.png"
import iconic11 from "../../images/desktop/noticias/iconic/iconic11.png"
import iconic12 from "../../images/desktop/noticias/iconic/iconic12.png"
import iconic13 from "../../images/desktop/noticias/iconic/iconic13.png"
import { Link } from "gatsby";
import NoticiasCard from '../../components/noticias-card';
import Nuevo from "../../images/mobile/noticias/noticiasRecientes/nuevo.png"
import Cobra from "../../images/mobile/noticias/noticiasRecientes/cobra.png"
import Among from "../../images/desktop/noticias/noticiasRecientes/among.png"
import Mas from "../../images/mobile/noticiasCard/botón-mas.png"


const CobraPage = () => {
    const { t } = useTranslation("iconic");
    const windowSize = useWindowSize();

    return (
        <Layout>
        {windowSize < 752 ? (
            <>
            <SingleNews
                backgroundImage={iconicBanner}
                singleTitle={t("iconicTitle")}
                singleDate={renderStringHMTLtoJSX(t("iconicDate"))}
                sigleFirstP={renderStringHMTLtoJSX(t("iconicFirstP"))}
            >
                <div className='titleImagesDiv'>
                    <h1 className='sigleNtitle'>{t("iconicSubtitle")}</h1>
                    <div className='imgDuo'>
                        <img src={iconic1} className="fullWidthImg"/>
                        <img src={iconic2} className="fullWidthImg"/>
                    </div>
                    <div className='imgDuo'>
                        <img src={iconic3} className="fullWidthImg"/>
                        <img src={iconic4} className="fullWidthImg"/>
                    </div>
                    <div className='imgDuo'>
                        <img src={iconic5} className="fullWidthImg"/>
                        <img src={iconic6} className="fullWidthImg"/>
                    </div>
                    <div className='imgDuo'>
                        <img src={iconic7} className="fullWidthImg"/>
                        <img src={iconic8} className="fullWidthImg"/>
                    </div>
                    <div className='imgDuo'>
                        <img src={iconic9} className="fullWidthImg"/>
                        <img src={iconic10} className="fullWidthImg"/>
                    </div>
                    <div className='imgDuo'>
                        <img src={iconic11} className="fullWidthImg"/>
                        <img src={iconic12} className="fullWidthImg"/>
                    </div>
                </div>
                <div className='titleImagesDiv'>
                    <h1 className='sigleNtitle'>{t("iconicSecondSubtitle")}</h1>
                    <img src={iconic13} className="amongfFirstimg"/>
                </div>
            </SingleNews>
            <div className='singleRecent'>
                <NoticiasRecientes>
                    <NoticiasCard image={Nuevo} title={t("new")} date={t("newDate2")}>
                        <Link to='/news/newintycoon'>
                            <img src={Mas} className="mas"/>
                        </Link>
                    </NoticiasCard>
                    <NoticiasCard image={Cobra} title={t("cobra")} date={t("cobraDate2")}>
                        <Link to='/news/cobrakai'>
                            <img src={Mas} className="mas"/>
                        </Link>
                    </NoticiasCard>
                    <NoticiasCard image={Among} title={t("among")} date={t("amongDate2")}>
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
                backgroundImage={iconicBanner}
                singleTitle={t("iconicTitle")}
                singleDate={renderStringHMTLtoJSX(t("iconicDate"))}
            >
            <div className='singleNewsContentDesk'>
                <div className='fullWidthPDiv'>
                    <p className='regularP'>{renderStringHMTLtoJSX(t("iconicFirstP"))}</p>
                </div>
                <div className='titleImagesDiv'>
                    <h1 className='sigleNtitleDesk'>{t("caSubTitle")}</h1>
                    <div className='imageGroup'>
                        <div className='imgTrio'>
                            <img src={iconic1} className="fullWidthImg"/>
                            <img src={iconic2} className="fullWidthImg"/>
                            <img src={iconic3} className="fullWidthImg"/>
                        </div>
                        <div className='imgTrio'>
                            <img src={iconic4} className="fullWidthImg"/>
                            <img src={iconic5} className="fullWidthImg"/>
                            <img src={iconic6} className="fullWidthImg"/>
                        </div>
                        <div className='imgTrio'>
                            <img src={iconic7} className="fullWidthImg"/>
                            <img src={iconic8} className="fullWidthImg"/>
                            <img src={iconic9} className="fullWidthImg"/>
                        </div>
                        <div className='imgTrio'>
                            <img src={iconic10} className="fullWidthImg"/>
                            <img src={iconic11} className="fullWidthImg"/>
                            <img src={iconic12} className="fullWidthImg"/>
                        </div>
                    </div>
                </div>
                <div className='titleImagesDiv'>
                    <h1 className='sigleNtitleDesk'>{t("iconicSecondSubtitle")}</h1>
                    <div className='imageGroup'>
                        <img src={iconic13} className="amongfFirstimgDesk"/>

                    </div>
                </div>                
            </div>
            </SingleNews>
            <div className='singleRecentDesk'>
                <NoticiasRecientes>
                    <NoticiasCard image={Nuevo} title={t("new")} date={t("newDate2")}>
                        <Link to='/news/newintycoon'>
                            <img src={Mas} className="mas"/>
                        </Link>
                    </NoticiasCard>
                    <NoticiasCard image={Cobra} title={t("cobra")} date={t("cobraDate2")}>
                        <Link to='/news/cobrakai'>
                            <img src={Mas} className="mas"/>
                        </Link>
                    </NoticiasCard>
                    <NoticiasCard image={Among} title={t("among")} date={t("amongDate2")}>
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