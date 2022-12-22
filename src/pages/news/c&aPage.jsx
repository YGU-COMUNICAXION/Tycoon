import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../../utils/renderStringHTMLtoJSX";
import Layout from "../../components/layout";
import "../../css/news/ca.css";
import NoticiasRecientes from "../../components/noticias-recientes";
import useWindowSize from '../../hooks/useWindowSize';
import SingleNews from '../../components/singleNews';
import CaBanner from "../../images/desktop/noticias/c&a/caBanner.png"
import Ca1 from "../../images/desktop/noticias/c&a/ca1.png"
import Ca2 from "../../images/desktop/noticias/c&a/ca2.png"
import Ca3 from "../../images/desktop/noticias/c&a/ca3.png"
import Ca4 from "../../images/desktop/noticias/c&a/ca4.png"
import Ca5 from "../../images/desktop/noticias/c&a/ca5.png"
import Ca6 from "../../images/desktop/noticias/c&a/ca6.png"

const CobraPage = () => {
    const { t } = useTranslation("ca");
    const windowSize = useWindowSize();

    return (
        <Layout>
        {windowSize < 752 ? (
            <>
            <SingleNews
                backgroundImage={CaBanner}
                singleTitle={t("caTitle")}
                singleDate={renderStringHMTLtoJSX(t("caDate"))}
                sigleFirstP={renderStringHMTLtoJSX(t("caFirstP"))}
            >
                <img src={Ca1} className="amongfFirstimg"/>
                <div className='pantherContainer'>
                    <p className='containerLight'>{t("caSecondP")}</p>
                    <p className='containerBold'>{t("caThirdP")}</p>
                </div>
                <div className='titleImagesDiv'>
                    <h1 className='sigleNtitle'>{t("caSubTitle")}</h1>
                    <img src={Ca2} className="fullWidthImg"/>
                    <img src={Ca3} className="fullWidthImg"/>
                    <img src={Ca4} className="fullWidthImg"/>
                </div>
                <div className='titleImagesDiv'>
                    <h1 className='sigleNtitle'>{t("caSecondSubTitle")}</h1>
                    <img src={Ca5} className="fullWidthImg"/>
                    <img src={Ca6} className="fullWidthImg"/>
                </div>
                <p className='finalLightP'>{t("caFinalLightP")}</p>
                <h2 className='finalP'>{t("caFinalP")}</h2>

            </SingleNews>
            <div className='singleRecent'>
                <NoticiasRecientes title={renderStringHMTLtoJSX(t("relatedNews"))}/>
            </div>
            </>
        ):(
            <>
            <SingleNews
                backgroundImage={CaBanner}
                singleTitle={t("caTitle")}
                singleDate={renderStringHMTLtoJSX(t("caDate"))}
            >
            <div className='newsDualDiv'>
                <div className='dualLeftDiv'>
                    <p className='regularP'>{renderStringHMTLtoJSX(t("cobraFirstP"))}</p>
                </div>
                <div className='dualRightDiv'>
                    <img src={Ca1} className="amongfFirstimgDesk"/>
                </div>
            </div>
            <div className='singleNewsContentDesk'>
                <div className='pantherContainerDesk'>
                    <p className='containerLight'>{t("amongSecondP")}</p>
                    <p className='containerBold'>{t("amongThirdP")}</p>
                </div>
                <div className='titleImagesDiv'>
                    <h1 className='sigleNtitleDesk'>{t("caSubTitle")}</h1>
                    <div className='imageGroup'>
                        <img src={Ca2} className="fullWidthImg"/>
                        <img src={Ca3} className="fullWidthImg"/>
                        <img src={Ca4} className="fullWidthImg"/>
                    </div>    
                </div>
                <div className='titleImagesDiv'>
                    <h1 className='sigleNtitleDesk'>{t("caSecondSubTitle")}</h1>
                    <div className='imageGroup'>
                        <img src={Ca5} className="fullWidthImg"/>
                        <img src={Ca6} className="fullWidthImg"/>
                    </div>
                </div>
                <p className='finalLightPDesk'>{t("caFinalLightP")}</p>
                <div className='finalPDiv'>
                    <p className='sigleBottomP'>{t("cobraFinalP")}</p>
                </div>
                
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

export default CobraPage