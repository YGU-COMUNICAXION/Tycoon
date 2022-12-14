import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../../utils/renderStringHTMLtoJSX";
import Layout from "../../components/layout";
import "../../css/news/amongus.css";
import NoticiasRecientes from "../../components/noticias-recientes";
import useWindowSize from '../../hooks/useWindowSize';
import SingleNews from '../../components/singleNews';
import AmongBanner from "../../images/desktop/noticias/amongus/bannerAmongus.png"
import AmongFirstImg from "../../images/desktop/noticias/amongus/fotoAmongus.png"
import AmongFirstImgMob from "../../images/desktop/noticias/amongus/fotoAmongusMob.png"
import AmongSecondImgMob from "../../images/desktop/noticias/amongus/contenedorMob.png"
import AmongSecondImgDesk from "../../images/desktop/noticias/amongus/contenedor.png"

const AmongusPage = () => {
    const { t } = useTranslation("among");
    const windowSize = useWindowSize();

    return (
        <Layout>
        {windowSize < 752 ? (
            <>
            <SingleNews
                backgroundImage={AmongBanner}
                singleTitle={t("amongTitle")}
                singleDate={renderStringHMTLtoJSX(t("amongDate"))}
                sigleFirstP={renderStringHMTLtoJSX(t("amongFirstP"))}
            >
                <img src={AmongFirstImgMob} className="amongfFirstimg"/>
                <div className='amongContainer'>
                    <p className='containerLight'>{t("amongSecondP")}</p>
                    <p className='containerBold'>{t("amongThirdP")}</p>
                </div>
                <p className='regularP'>{t("amongFourthP")}</p>
                <p className='regularP'>{t("amongFifthP")}</p>
                <p className='sigleBottomP'>{t("amongSixthP")}</p>
            </SingleNews>
            <div className='singleRecent'>
                <NoticiasRecientes title={renderStringHMTLtoJSX(t("relatedNews"))}/>
            </div>
            </>
        ):(
            <>
            <SingleNews
                backgroundImage={AmongBanner}
                singleTitle={t("amongTitle")}
                singleDate={renderStringHMTLtoJSX(t("amongDate"))}
            >
            <div className='newsDualDiv'>
                <div className='dualLeftDiv'>
                    <p className='regularP'>{renderStringHMTLtoJSX(t("amongFirstP"))}</p>
                </div>
                <div className='dualRightDiv'>
                    <img src={AmongFirstImg} className="amongfFirstimgDesk"/>
                </div>
            </div>
            <div className='singleNewsContentDesk'>
                <div className='amongContainerDesk'>
                    <p className='containerLight'>{t("amongSecondP")}</p>
                    <p className='containerBold'>{t("amongThirdP")}</p>
                </div>
                <div className='fourthPContainer'>
                    <p className='regularP'>{t("amongFourthP")}</p>
                </div>
                <p className='sigleBottomP'>{t("amongSixthP")}</p>
            </div>

            </SingleNews>
            <div className='singleRecentDesk'>
                <NoticiasRecientes title={renderStringHMTLtoJSX(t("relatedNews"))}/>
            </div>
            </>
        )}
        </Layout>
    )
}

export default AmongusPage