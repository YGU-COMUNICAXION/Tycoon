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
                <NoticiasRecientes title={renderStringHMTLtoJSX(t("relatedNews"))}/>
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
                <NoticiasRecientes title={renderStringHMTLtoJSX(t("relatedNews"))}/>
            </div>
            </>
        )}
        </Layout>
    )
}

export default EndemolPage