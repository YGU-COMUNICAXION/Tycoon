import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../../utils/renderStringHTMLtoJSX";
import Layout from "../../components/layout";
import "../../css/news/warner.css";
import NoticiasRecientes from "../../components/noticias-recientes";
import useWindowSize from '../../hooks/useWindowSize';
import SingleNews from '../../components/singleNews';
import WarnerBanner from "../../images/desktop/noticias/warner/warnerbanner.png"
import Warner1 from "../../images/desktop/noticias/warner/warner1.png"
import Warner2 from "../../images/desktop/noticias/warner/warner2.png"
import Warner3 from "../../images/desktop/noticias/warner/warner3.png"
import Warner4 from "../../images/desktop/noticias/warner/warner4.png"
import { Link } from "gatsby";
import NoticiasCard from '../../components/noticias-card';
import Nuevo from "../../images/mobile/noticias/noticiasRecientes/nuevo.png"
import Cobra from "../../images/mobile/noticias/noticiasRecientes/cobra.png"
import Among from "../../images/desktop/noticias/noticiasRecientes/among.png"
import Mas from "../../images/mobile/noticiasCard/botón-mas.png"

const WarnerPage = () => {
    const { t } = useTranslation("warner");
    const windowSize = useWindowSize();

    return (
        <Layout>
        {windowSize < 752 ? (
            <> 
            <SingleNews
                backgroundImage={WarnerBanner}
                singleTitle={t("warnerTitle")}
                singleDate={renderStringHMTLtoJSX(t("warnerDate"))}
                sigleFirstP={renderStringHMTLtoJSX(t("warnerFirstP"))}
            >
                <img src={Warner1} className="amongfFirstimg"/>
                <div className='amongContainer'>
                    <p className='containerLight'>{t("warnerSecondP")}</p>
                    <p className='containerBold'>{t("warnerThirdP")}</p>
                </div>
                <div className='ThreeImgsContainer'>
                    <div className='topImgs'>
                        <img src={Warner2} className="imgtrio"/>
                        <img src={Warner3} className="imgtrio"/>
                    </div>
                    <img src={Warner4} className="imgtrio"/>
                </div>
            </SingleNews>
            <div className='singleRecent'>ç
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
            </>
        ):(
            <>
            <SingleNews
                backgroundImage={WarnerBanner}
                singleTitle={t("warnerTitle")}
                singleDate={renderStringHMTLtoJSX(t("warnerDate"))}
            >
            <div className='newsDualDiv'>
                <div className='dualLeftDiv'>
                    <p className='regularP'>{renderStringHMTLtoJSX(t("warnerFirstP"))}</p>
                </div>
                <div className='dualRightDiv'>
                    <img src={Warner1} className="amongfFirstimgDesk"/>
                </div>
            </div>

            <div className='singleNewsContentDesk'>
                <div className='amongContainerDesk'>
                    <p className='containerLight'>{t("warnerSecondP")}</p>
                    <p className='containerBold'>{t("warnerThirdP")}</p>
                </div>
                <div className='imgTrioRow'>
                    <img src={Warner2} className="imgtrioDesk"/>
                    <img src={Warner3} className="imgtrioDesk"/>
                    <img src={Warner4} className="imgtrioDesk"/>
                </div>
            </div>
            </SingleNews>
            <div className='singleRecentDesk'>
                <h2 className='sectionTitle'>{renderStringHMTLtoJSX(t("recentNews"))}</h2>
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

export default WarnerPage