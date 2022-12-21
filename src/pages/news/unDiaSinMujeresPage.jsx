import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../../utils/renderStringHTMLtoJSX";
import Layout from "../../components/layout";
import "../../css/news/warner.css";
import NoticiasRecientes from "../../components/noticias-recientes";
import useWindowSize from '../../hooks/useWindowSize';
import SingleNews from '../../components/singleNews';
import BalBanner from "../../images/desktop/noticias/dia/diaBanner.png"
import Dia1 from "../../images/desktop/noticias/dia/dia1.png"

const DiaPage = () => {
    const { t } = useTranslation("warner");
    const windowSize = useWindowSize();

    return (
        <Layout>
        {windowSize < 752 ? (
            <> 
            <SingleNews
                backgroundImage={BalBanner}
                singleTitle={t("diaTitle")}
                singleDate={renderStringHMTLtoJSX(t("diaDate"))}
                sigleFirstP={renderStringHMTLtoJSX(t("diaFirstP"))}
            >
                <img src={Dia1} className="amongfFirstimg"/>
            </SingleNews>
            <div className='singleRecent'>
                <NoticiasRecientes title={renderStringHMTLtoJSX(t("relatedNews"))}/>
            </div>
            </>
        ):(
            <>
            <SingleNews
                backgroundImage={BalBanner}
                singleTitle={t("diaTitle")}
                singleDate={renderStringHMTLtoJSX(t("diaDate"))}
            >
            <div className='newsDualDiv'>
                <div className='dualLeftDiv'>
                    <p className='regularP'>{renderStringHMTLtoJSX(t("diaFirstP"))}</p>
                </div>
                <div className='dualRightDiv'>
                    <img src={Dia1} className="amongfFirstimgDesk"/>
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

export default DiaPage