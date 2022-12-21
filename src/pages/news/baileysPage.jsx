import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../../utils/renderStringHTMLtoJSX";
import Layout from "../../components/layout";
import "../../css/news/warner.css";
import NoticiasRecientes from "../../components/noticias-recientes";
import useWindowSize from '../../hooks/useWindowSize';
import SingleNews from '../../components/singleNews';
import BalBanner from "../../images/desktop/noticias/baileys/upsBanner.png"
import Bal1 from "../../images/desktop/noticias/baileys/ups1.png"
import Bal2 from "../../images/desktop/noticias/baileys/ups2.png"
import Bal3 from "../../images/desktop/noticias/baileys/ups3.png"
import Bal4 from "../../images/desktop/noticias/baileys/ups4.png"
import Bal5 from "../../images/desktop/noticias/baileys/ups5.png"


const BaileysPage = () => {
    const { t } = useTranslation("warner");
    const windowSize = useWindowSize();

    return (
        <Layout>
        {windowSize < 752 ? (
            <> 
            <SingleNews
                backgroundImage={BalBanner}
                singleTitle={t("baTitle")}
                singleDate={renderStringHMTLtoJSX(t("baDate"))}
                sigleFirstP={renderStringHMTLtoJSX(t("baFirstP"))}
            >
                <img src={Bal1} className="amongfFirstimg"/>
                <img src={Bal2} className="amongfFirstimg"/>
                <div className='ThreeImgsContainer'>
                    <div className='topImgs'>
                        <img src={Bal3} className="imgtrio"/>
                        <img src={Bal4} className="imgtrio"/>
                    </div>
                    <img src={Bal5} className="imgtrio"/>
                </div>
                <h2 className='finalP'>{t("baSecondP")}</h2>
                <h2 className='finalP'>{t("baIG")}</h2>
                <h2 className='finalP'>{t("BAFB")}</h2>
            </SingleNews>
            <div className='singleRecent'>
                <NoticiasRecientes title={renderStringHMTLtoJSX(t("relatedNews"))}/>
            </div>
            </>
        ):(
            <>
            <SingleNews
                backgroundImage={BalBanner}
                singleTitle={t("baTitle")}
                singleDate={renderStringHMTLtoJSX(t("baDate"))}
            >
            <div className='newsDualDiv'>
                <div className='dualLeftDiv'>
                    <p className='regularP'>{renderStringHMTLtoJSX(t("baFirstP"))}</p>
                </div>
                <div className='dualRightDiv'>
                    <img src={Bal1} className="amongfFirstimgDesk"/>
                    <img src={Bal2} className="amongfFirstimgDesk"/>
                </div>
            </div>
            <div className='singleNewsContentDesk'>
                <div className='imgTrioRow'>
                    <img src={Bal3} className="imgtrioDesk"/>
                    <img src={Bal4} className="imgtrioDesk"/>
                    <img src={Bal5} className="imgtrioDesk"/>
                </div>
                <div className='finalPDiv'>
                    <p className='sigleBottomP'>{t("baSecondP")}</p>
                    <p className='sigleBottomP'>{t("baIG")}</p>
                    <p className='sigleBottomP'>{t("BAFB")}</p>
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

export default BaileysPage