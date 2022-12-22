import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../../utils/renderStringHTMLtoJSX";
import Layout from "../../components/layout";
import "../../css/news/warner.css";
import NoticiasRecientes from "../../components/noticias-recientes";
import useWindowSize from '../../hooks/useWindowSize';
import SingleNews from '../../components/singleNews';
import ColBanner from "../../images/desktop/noticias/colombia/colombiaBanner.png"
import Col1 from "../../images/desktop/noticias/colombia/colombia1.png"
import Col2 from "../../images/desktop/noticias/colombia/colombia2.png"
import Col3 from "../../images/desktop/noticias/colombia/colombia3.png"
import Col4 from "../../images/desktop/noticias/colombia/colombia4.png"
import Col5 from "../../images/desktop/noticias/colombia/colombia5.png"


const ColPage = () => {
    const { t } = useTranslation("warner");
    const windowSize = useWindowSize();

    return (
        <Layout>
        {windowSize < 752 ? (
            <> 
            <SingleNews
                backgroundImage={ColBanner}
                singleTitle={t("colTitle")}
                singleDate={renderStringHMTLtoJSX(t("colDate"))}
                sigleFirstP={renderStringHMTLtoJSX(t("colFirstP"))}
            >
                <img src={Col1} className="amongfFirstimg"/>
                <img src={Col2} className="amongfFirstimg"/>
                <div className='ThreeImgsContainer'>
                    <div className='topImgs'>
                        <img src={Col3} className="imgtrio"/>
                        <img src={Col4} className="imgtrio"/>
                    </div>
                    <img src={Col5} className="imgtrio"/>
                </div>
                <h2 className='finalP'>{t("colSecondP")}</h2>
                <h2 className='finalP'>{t("colIG")}</h2>
                <h2 className='finalP'>{t("colFB")}</h2>
                <h2 className='finalP'>{t("colThirdP")}</h2>
            </SingleNews>
            <div className='singleRecent'>
                <NoticiasRecientes title={renderStringHMTLtoJSX(t("relatedNews"))}/>
            </div>
            </>
        ):(
            <>
            <SingleNews
                backgroundImage={ColBanner}
                singleTitle={t("colTitle")}
                singleDate={renderStringHMTLtoJSX(t("colDate"))}
            >
            <div className='newsDualDiv'>
                <div className='dualLeftDiv'>
                    <p className='regularP'>{renderStringHMTLtoJSX(t("colFirstP"))}</p>
                </div>
                <div className='dualRightDiv'>
                    <img src={Col1} className="amongfFirstimgDesk"/>
                    <img src={Col2} className="amongfFirstimgDesk"/>
                </div>
            </div>
            <div className='singleNewsContentDesk'>
                <div className='imgTrioRow'>
                    <img src={Col3} className="imgtrioDesk"/>
                    <img src={Col4} className="imgtrioDesk"/>
                    <img src={Col5} className="imgtrioDesk"/>
                </div>
                <div className='finalPDiv'>
                    <p className='sigleBottomP'>{t("colSecondP")}</p>
                    <a href='https://www.instagram.com/almacenesbrissa/' target="_blank">
                        <p className='sigleBottomP'>{t("colIG")}</p>
                    </a>
                    <a href='https://www.facebook.com/almacenesbrissa' target="_blank">
                        <p className='sigleBottomP'>{t("colFB")}</p>
                    </a>
                    <a target="_blank">
                        <p className='sigleBottomP'>{t("colThirdP")}</p>
                    </a>
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

export default ColPage