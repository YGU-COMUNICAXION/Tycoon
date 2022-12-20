import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../../utils/renderStringHTMLtoJSX";
import Layout from "../../components/layout";
import "../../css/news/cobra.css";
import NoticiasRecientes from "../../components/noticias-recientes";
import useWindowSize from '../../hooks/useWindowSize';
import SingleNews from '../../components/singleNews';
import CobraBanner from "../../images/desktop/noticias/cobra/bannercobra.png"
import cobra1 from "../../images/desktop/noticias/cobra/foto1.png"
import cobra2 from "../../images/desktop/noticias/cobra/foto2.png"
import cobra3 from "../../images/desktop/noticias/cobra/foto3.png"
import cobra4 from "../../images/desktop/noticias/cobra/foto4.png"


const CobraPage = () => {
    const { t } = useTranslation("cobra");
    const windowSize = useWindowSize();

    return (
        <Layout>
        {windowSize < 752 ? (
            <>
            <SingleNews
                backgroundImage={CobraBanner}
                singleTitle={t("cobraTitle")}
                singleDate={renderStringHMTLtoJSX(t("cobraDate"))}
                sigleFirstP={renderStringHMTLtoJSX(t("cobraFirstP"))}
            >
                <img src={cobra1} className="amongfFirstimg"/>
                <div className='ThreeImgsContainer'>
                    <div className='topImgs'>
                        <img src={cobra2} className="imgtrio"/>
                        <img src={cobra3} className="imgtrio"/>
                    </div>
                    <img src={cobra4} className="imgtrio"/>
                </div>
                <h2 className='finalP'>{t("cobraFinalP")}</h2>

            </SingleNews>
            <div className='singleRecent'>
                <NoticiasRecientes title={renderStringHMTLtoJSX(t("relatedNews"))}/>
            </div>
            </>
        ):(
            <>
            <SingleNews
                backgroundImage={CobraBanner}
                singleTitle={t("cobraTitle")}
                singleDate={renderStringHMTLtoJSX(t("cobraDate"))}
            >
            <div className='newsDualDiv'>
                <div className='dualLeftDiv'>
                    <p className='regularP'>{renderStringHMTLtoJSX(t("cobraFirstP"))}</p>
                </div>
                <div className='dualRightDiv'>
                    <img src={cobra1} className="amongfFirstimgDesk"/>
                </div>
            </div>
            <div className='singleNewsContentDesk'>
                <div className='imgTrioRow'>
                    <img src={cobra2} className="imgtrioDesk"/>
                    <img src={cobra3} className="imgtrioDesk"/>
                    <img src={cobra4} className="imgtrioDesk"/>
                </div>
                <div className='finalPDiv'>
                    <p className='sigleBottomP'>{t("cobraFinalP")}</p>
                    <p className='sigleBottomP'>{t("cobraFinalP2")}</p>
                    <p className='sigleBottomP'>{t("cobraFinalP3")}</p>
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