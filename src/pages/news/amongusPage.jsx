import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../../utils/renderStringHTMLtoJSX";
import Layout from "../../components/layout";
import "../../css/news/amongus.css";
import NoticiasRecientes from "../../components/noticias-recientes";
import useWindowSize from '../../hooks/useWindowSize';
import SingleNews from '../../components/singleNews';

const AmongusPage = () => {
    const { t } = useTranslation("among");
    const windowSize = useWindowSize();

    return (
        <Layout>
        {windowSize < 752 ? (
            <>
            <SingleNews>
                <img/>
                <div>
                    <p className='smallP'></p>
                    <p className=''></p>
                </div>
                <p className='smallP'></p>
                <p className='smallP'></p>
                <p className=''></p>
            </SingleNews>
            <NoticiasRecientes/>
            </>
        ):(
            <SingleNews>

            </SingleNews>
        )}
        </Layout>
    )
}

export default AmongusPage