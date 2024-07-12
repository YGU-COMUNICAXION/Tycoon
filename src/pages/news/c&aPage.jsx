import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../../utils/renderStringHTMLtoJSX";
import Layout from "../../components/layout";
import "../../css/news/ca.css";
import NoticiasRecientes from "../../components/noticias-recientes";
import useWindowSize from "../../hooks/useWindowSize";
import SingleNews from "../../components/singleNews";
import CaBanner from "../../images/desktop/noticias/c&a/caBanner.webp";
import Ca1 from "../../images/desktop/noticias/c&a/ca1.png";
import Ca2 from "../../images/desktop/noticias/c&a/ca2.png";
import Ca3 from "../../images/desktop/noticias/c&a/ca3.png";
import Ca4 from "../../images/desktop/noticias/c&a/ca4.png";
import Ca5 from "../../images/desktop/noticias/c&a/ca5.png";
import Ca6 from "../../images/desktop/noticias/c&a/ca6.png";
import { Link } from "gatsby";
import NoticiasCard from "../../components/noticias-card";
import Nuevo from "../../images/mobile/noticias/noticiasRecientes/nuevo.png";
import Cobra from "../../images/mobile/noticias/noticiasRecientes/cobra.png";
import Among from "../../images/desktop/noticias/noticiasRecientes/among.png";
import Mas from "../../images/mobile/noticiasCard/botón-mas.png";

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
            <img alt="" src={Ca1} className="amongfFirstimg" />
            <div className="pantherContainer">
              <p className="containerLight">{t("caSecondP")}</p>
              <p className="containerBold">{t("caThirdP")}</p>
            </div>
            <div className="titleImagesDiv">
              <h1 className="sigleNtitle">{t("caSubTitle")}</h1>
              <img alt="" src={Ca2} className="fullWidthImg" />
              <img alt="" src={Ca3} className="fullWidthImg" />
              <img alt="" src={Ca4} className="fullWidthImg" />
            </div>
            <div className="titleImagesDiv">
              <h1 className="sigleNtitle">{t("caSecondSubTitle")}</h1>
              <img alt="" src={Ca5} className="fullWidthImg" />
              <img alt="" src={Ca6} className="fullWidthImg" />
            </div>
            <p className="finalLightP">{t("caFinalLightP")}</p>
            <div className="finalPDivMob">
              <h2 className="finalP">{t("caColeccion")}</h2>
              <a
                href="https://www.cyamoda.com"
                target="_blank"
                rel="noreferrer"
              >
                <h2 className="finalP">{renderStringHMTLtoJSX(t("caModa"))}</h2>
              </a>
              <h2 className="finalP">{t("caFundacion")}</h2>
              <a
                href="https://www.cimafundacion.org/"
                target="_blank"
                rel="noreferrer"
              >
                <h2 className="finalP">
                  {renderStringHMTLtoJSX(t("caFundOrg"))}
                </h2>
              </a>
            </div>
          </SingleNews>
          <div className="singleRecent">
            <NoticiasRecientes>
              <NoticiasCard image={Nuevo} title={t("new")} date={t("newDate")}>
                <Link to="/news/nuevo-en-tycoon">
                  <img alt="" src={Mas} className="mas" />
                </Link>
              </NoticiasCard>
              <NoticiasCard
                image={Cobra}
                title={t("cobra")}
                date={t("cobraDate")}
              >
                <Link to="/news/cobra-kai">
                  <img alt="" src={Mas} className="mas" />
                </Link>
              </NoticiasCard>
              <NoticiasCard
                image={Among}
                title={t("among")}
                date={t("amongDate")}
              >
                <Link to="/news/among-us">
                  <img alt="" src={Mas} className="mas" />
                </Link>
              </NoticiasCard>
            </NoticiasRecientes>
          </div>
        </>
      ) : (
        <>
          <SingleNews
            backgroundImage={CaBanner}
            singleTitle={t("caTitle")}
            singleDate={renderStringHMTLtoJSX(t("caDate"))}
          >
            <div className="newsDualDiv">
              <div className="dualLeftDiv">
                <p className="regularP">
                  {renderStringHMTLtoJSX(t("cobraFirstP"))}
                </p>
              </div>
              <div className="dualRightDiv">
                <img alt="" src={Ca1} className="amongfFirstimgDesk" />
              </div>
            </div>
            <div className="singleNewsContentDesk">
              <div className="pantherContainerDesk">
                <p className="containerLight">{t("amongSecondP")}</p>
                <p className="containerBold">{t("amongThirdP")}</p>
              </div>
              <div className="titleImagesDiv">
                <h1 className="sigleNtitleDesk">{t("caSubTitle")}</h1>
                <div className="imageGroup">
                  <img alt="" src={Ca2} className="fullWidthImg" />
                  <img alt="" src={Ca3} className="fullWidthImg" />
                  <img alt="" src={Ca4} className="fullWidthImg" />
                </div>
              </div>
              <div className="titleImagesDiv">
                <h1 className="sigleNtitleDesk">{t("caSecondSubTitle")}</h1>
                <div className="imageGroup">
                  <img alt="" src={Ca5} className="fullWidthImg" />
                  <img alt="" src={Ca6} className="fullWidthImg" />
                </div>
              </div>
              <p className="finalLightPDesk">{t("caFinalLightP")}</p>
              <div className="finalPDiv">
                <p className="sigleBottomP">{t("caColeccion")}</p>
                <a
                  href="https://www.cyamoda.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="sigleBottomP">
                    {renderStringHMTLtoJSX(t("caModa"))}
                  </p>
                </a>
                <p className="sigleBottomP">{t("caFundacion")}</p>
                <a
                  href="https://www.cimafundacion.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="sigleBottomP">
                    {renderStringHMTLtoJSX(t("caFundOrg"))}
                  </p>
                </a>
              </div>
            </div>
          </SingleNews>
          <div className="singleRecentDesk">
            <NoticiasRecientes>
              <NoticiasCard image={Nuevo} title={t("new")} date={t("newDate")}>
                <Link to="/news/nuevo-en-tycoon">
                  <img alt="" src={Mas} className="mas" />
                </Link>
              </NoticiasCard>
              <NoticiasCard
                image={Cobra}
                title={t("cobra")}
                date={t("cobraDate")}
              >
                <Link to="/news/cobra-kai">
                  <img alt="" src={Mas} className="mas" />
                </Link>
              </NoticiasCard>
              <NoticiasCard
                image={Among}
                title={t("among")}
                date={t("amongDate")}
              >
                <Link to="/news/among-us">
                  <img alt="" src={Mas} className="mas" />
                </Link>
              </NoticiasCard>
            </NoticiasRecientes>
          </div>
        </>
      )}
    </Layout>
  );
};

export default CobraPage;
