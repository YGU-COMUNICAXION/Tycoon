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
import AmongSecondImgMob from "../../images/desktop/noticias/amongus/contenedorMob.png"
import AmongSecondImgDesk from "../../images/desktop/noticias/amongus/contenedor.png"


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