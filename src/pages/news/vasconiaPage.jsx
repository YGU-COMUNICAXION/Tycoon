import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../../utils/renderStringHTMLtoJSX";
import Layout from "../../components/layout";
import "../../css/news/vasconia.css";
import NoticiasRecientes from "../../components/noticias-recientes";
import useWindowSize from '../../hooks/useWindowSize';
import SingleNews from '../../components/singleNews';
import VascBanner from "../../images/desktop/noticias/vasconia/vasconiaBanner.png"
import Vasc1 from "../../images/desktop/noticias/vasconia/ vasconia1.png"
import Vasc2 from "../../images/desktop/noticias/vasconia/vasconia2.png"
import Vasc3 from "../../images/desktop/noticias/vasconia/vasconia3.png"
import Vasc4 from "../../images/desktop/noticias/vasconia/vasconia4.png"
import Vasc5 from "../../images/desktop/noticias/vasconia/vasconia5.png"
import Vasc6 from "../../images/desktop/noticias/vasconia/vasconia6.png"
import { Link } from "gatsby";
import NoticiasCard from '../../components/noticias-card';
import Nuevo from "../../images/mobile/noticias/noticiasRecientes/nuevo.png"
import Cobra from "../../images/mobile/noticias/noticiasRecientes/cobra.png"
import Among from "../../images/desktop/noticias/noticiasRecientes/among.png"
import Mas from "../../images/mobile/noticiasCard/botón-mas.png"


const VasconiaPage = () => {
    const { t } = useTranslation("vasconia");
    const windowSize = useWindowSize();

    return (
        <Layout>
        {windowSize < 752 ? (
            <>
            <SingleNews
                backgroundImage={VascBanner}
                singleTitle={t("vascTitle")}
                singleDate={renderStringHMTLtoJSX(t("vascDate"))}
                sigleFirstP={renderStringHMTLtoJSX(t("vascFirstP"))}
            >
                <img src={Vasc1} className="amongfFirstimg"/>
                <div className='pantherContainer'>
                    <p className='containerLight'>{t("vascSecondP")}</p>
                    <p className='containerBold'>{t("vascThirdP")}</p>
                </div>
                <div className='titleImagesDiv'>
                    <h1 className='sigleLeftTitle'>{renderStringHMTLtoJSX(t("vascSubTitle"))}</h1>
                    <p className='regularP'>{renderStringHMTLtoJSX(t("vascFourthP"))}</p>
                    <div className='fullWidthWrapper'>
                        <img src={Vasc2} className="fullWidthImg"/>
                        <img src={Vasc3} className="fullWidthImg"/>
                        <img src={Vasc4} className="fullWidthImg"/>
                        <img src={Vasc5} className="fullWidthImg"/>
                    </div>
                </div>
                <p className='finalLightP'>{renderStringHMTLtoJSX(t("vascFifthP"))}</p>
                <img src={Vasc6} className="amongfFirstimg"/>
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
                backgroundImage={VascBanner}
                singleTitle={t("vascTitle")}
                singleDate={renderStringHMTLtoJSX(t("vascDate"))}
            >
            <div className='newsDualDiv'>
                <div className='dualLeftDiv'>
                    <p className='regularP'>{renderStringHMTLtoJSX(t("vascFirstP"))}</p>
                </div>
                <div className='dualRightDiv'>
                    <img src={Vasc1} className="amongfFirstimgDesk"/>
                </div>
            </div>
            <div className='singleNewsContentDesk'>
                <div className='pantherContainerDesk'>
                    <p className='containerLight'>{t("vascSecondP")}</p>
                    <p className='containerBold'>{t("vascThirdP")}</p>
                </div>
                <div className='titleImagesDiv'>
                    <div className='leftAlignDiv'>
                        <h1 className='sigleLeftTitleDesk'>{renderStringHMTLtoJSX(t("vascSubTitle"))}</h1>
                    </div>
                    <p className='regularP'>{renderStringHMTLtoJSX(t("vascFourthP"))}</p>
                    <div className='imageGroup'>
                        <img src={Vasc2} className="fullWidthImg"/>
                        <img src={Vasc3} className="fullWidthImg"/>
                        <img src={Vasc4} className="fullWidthImg"/>
                        <img src={Vasc5} className="fullWidthImg"/>
                    </div>    
                </div>
                <p className='finalLightPDesk'>{renderStringHMTLtoJSX(t("vascFifthP"))}</p>
                <img src={Vasc6} className="vascSingleBigImg"/>
                {/* <div className='finalPDiv'>
                    <p className='sigleBottomP'>{t("cobraFinalP")}</p>
                </div> */}
                
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

export default VasconiaPage