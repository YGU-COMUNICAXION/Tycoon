import React from 'react'
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../../utils/renderStringHTMLtoJSX";
import Layout from "../../components/layout";
import "../../css/news/newIn.css";
import NoticiasRecientes from "../../components/noticias-recientes";
import useWindowSize from '../../hooks/useWindowSize';
import SingleNews from '../../components/singleNews';
import NewBanner from "../../images/desktop/noticias/nuevoen/nuevoBanner.png"
import NewBannerDesk from "../../images/desktop/noticias/nuevoen/nuevoBannerDesk.png"
import firstImg from "../../images/desktop/noticias/nuevoen/nuevoFirst.png"
import SecondImg from "../../images/desktop/noticias/nuevoen/nuevoSecond.png"
import { Link } from "gatsby";
import NoticiasCard from '../../components/noticias-card';
import CaminaKitty from "../../images/desktop/noticias/2021/TENIS-HELLOKITTY.png"
import Cobra from "../../images/mobile/noticias/noticiasRecientes/cobra.png"
import Among from "../../images/mobile/noticias/noticiasRecientes/among.png"
import Mas from "../../images/mobile/noticiasCard/botón-mas.png"


const NewintycoonPage = () => {
  const { t } = useTranslation("newIn");
  const windowSize = useWindowSize();

  return (
    <Layout>
      {windowSize < 752 ? (
        <>
        <SingleNews
          backgroundImage={NewBanner}
          singleTitle={t("newTitle")}
          singleDate={renderStringHMTLtoJSX(t("newDate"))}
          sigleFirstP={renderStringHMTLtoJSX(t("newFirstP"))}
        >
          <div className='subTitleDiv'>
            <h2 className='blueSubtitle'>{t("newFirstSubTitle")}</h2>
          </div>
          <p className='regularP'>{renderStringHMTLtoJSX(t("newSecondP"))}</p>
          <img src={firstImg} className="amongfFirstimg"/>
          <div className='subTitleDiv'>
            <h2 className='blueSubtitle'>{t("newSeconSubtitle")}</h2>
          </div>
          <p className='regularP'>{renderStringHMTLtoJSX(t("newThirdP"))}</p>
          <img src={SecondImg} className="amongfFirstimg"/>
          <div className=''></div>
          <div className='videoContainer'>
            <iframe
            src="https://www.youtube.com/embed/JpbnNpfeeOo" 
            frameborder="0" allowfullscreen
            />
            <iframe
            src="https://www.youtube.com/embed/ohHYABXMqUQ" 
            frameborder="0" allowfullscreen
            />
          </div>
          <Link to="/brands">
            <h2 className='finalP'>{renderStringHMTLtoJSX(t("newFourthP"))}</h2>
          </Link>
          </SingleNews>
          <div className='singleRecent'>
                <NoticiasRecientes>
                   <NoticiasCard image={Among} title={t("among")} date={t("amongDate2")}>
                        <Link to='/news/among-us'>
                            <img src={Mas} className="mas"/>
                        </Link>
                    </NoticiasCard>
                    <NoticiasCard image={Cobra} title={t("cobra")} date={t("cobraDate")}>
                        <Link to='/news/cobra-kai'>
                            <img src={Mas} className="mas"/>
                        </Link>
                    </NoticiasCard>
                    <NoticiasCard image={CaminaKitty} title={t("CaminaKitty")} date={t("CaminaKittyDATE")}>
                        <Link to="/news/camina-entre-nubes">
                            <img src={Mas} className="mas"/>
                        </Link>
                    </NoticiasCard>
                </NoticiasRecientes>
          </div>
        </>
      ):(
        <>
          <SingleNews
            backgroundImage={NewBannerDesk}
            singleTitle={t("newTitle")}
            singleDate={renderStringHMTLtoJSX(t("newDate"))}
          >
            <div className='singleNewsContentDesk'>
                <div className='newsDualCenterDiv'>
                    <div className='dualLeftDiv'>
                        <p className='regularP'>{renderStringHMTLtoJSX(t("newFirstP"))}</p>
                    </div>
                    <div className='dualRightDiv'>
                        {/* <img src={AmongFirstImg} className="amongfFirstimgDesk"/> */}
                    </div>
                </div> 
                <div className='newsDualCenterDiv'>
                  <div className='dualLeftDiv'>
                      <h2 className='blueSubtitle'>{t("newFirstSubTitle")}</h2>
                      <p className='regularP'>{renderStringHMTLtoJSX(t("newSecondP"))}</p>
                  </div>
                  <div className='dualRightDiv'>
                      <img src={firstImg} className="amongfFirstimgDesk"/>
                  </div> 
                </div>
                <div className='newsDualCenterDiv'>
                  <div className='dualLeftDiv'>
                      <h2 className='blueSubtitle'>{t("newSeconSubtitle")}</h2>
                      <p className='regularP'>{renderStringHMTLtoJSX(t("newSecondP"))}</p>
                  </div>
                  <div className='dualRightDiv'>
                      <img src={SecondImg} className="amongfFirstimgDesk"/>
                  </div> 
                </div>
                <div className='videoContainerDesk'>
                  <iframe
                  src="https://www.youtube.com/embed/JpbnNpfeeOo" 
                  frameborder="0" allowfullscreen
                  />
                  <iframe
                  src="https://www.youtube.com/embed/ohHYABXMqUQ" 
                  frameborder="0" allowfullscreen
                  />
                </div>
                <div className='finalPDiv'>
                  <Link to="/brands">
                    <p className='sigleBottomP'>{renderStringHMTLtoJSX(t("newFourthP"))}</p>
                  </Link>
                </div>
            </div> 
          </SingleNews>
          <div className='singleRecentDesk'>
                <NoticiasRecientes>
                    <NoticiasCard image={Among} title={t("among")} date={t("amongDate2")}>
                        <Link to='/news/among-us'>
                            <img src={Mas} className="mas"/>
                        </Link>
                    </NoticiasCard>
                    <NoticiasCard image={Cobra} title={t("cobra")} date={t("cobraDate2")}>
                        <Link to='/news/cobra-kai'>
                            <img src={Mas} className="mas"/>
                        </Link>
                    </NoticiasCard>
                    <NoticiasCard image={CaminaKitty} title={t("CaminaKitty")} date={t("CaminaKittyDATE")}>
                        <Link to="/news/camina-entre-nubes">
                            <img src={Mas} className="mas"/>
                        </Link>
                    </NoticiasCard>
                </NoticiasRecientes>
          </div>
        </>

      )}
    </Layout>
  )
}

export default NewintycoonPage