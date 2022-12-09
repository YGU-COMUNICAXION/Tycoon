import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../../utils/renderStringHTMLtoJSX";
import Layout from "../components/layout";
import "../../css/news/amongus.css";
import NoticiasRecientes from "../../components/noticias-recientes";
import useWindowSize from '../../hooks/useWindowSize';

const AmongusPage = () => {
    const { t } = useTranslation("among");
    const windowSize = useWindowSize();

    return (
        <Layout>
        {windowSize < 752 ? (
            <div className='MainDiv'>
                <div/>
                <div>
                    <p>{t("")}</p>
                    <img/>
                    <div>
                        <p>{t("")}</p>
                        <p>{t("")}</p>
                    </div>
                    <p>{t("")}</p>
                    <p>{t("")}</p>
                </div>
                <NoticiasRecientes title={renderStringHMTLtoJSX(t("recentNews"))}/>
            </div>
        ):(
            <div className='MainDivDesk'>
                <div className=''/>
                <div className=''>
                    <p>{t("")}</p>
                    <div className=''>
                        <p>{t("")}</p>
                        <img/>
                    </div>
                    <div className=''>
                        <p>{t("")}</p>
                        <p>{t("")}</p>
                    </div>
                    <p>{t("")}</p>
                    <p>{t("")}</p>
                </div>
                <div className=''>
                    <NoticiasRecientes title={renderStringHMTLtoJSX(t("recentNews"))}/>
                </div>
            </div>
        )}
        </Layout>
    )
}

export default AmongusPage