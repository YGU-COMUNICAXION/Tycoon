import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../../utils/renderStringHTMLtoJSX";
import Layout from "../../components/layout";
import "../../css/news/amongus.css";
import NoticiasRecientes from "../../components/noticias-recientes";
import useWindowSize from "../../hooks/useWindowSize";
import SingleNews from "../../components/singleNews";
import AmongBanner from "../../images/desktop/noticias/amongus/bannerAmongus.png";
import AmongFirstImg from "../../images/desktop/noticias/amongus/fotoAmongus.png";
import AmongFirstImgMob from "../../images/desktop/noticias/amongus/fotoAmongusMob.png";
import { Link } from "gatsby";
import NoticiasCard from "../../components/noticias-card";
import Nuevo from "../../images/mobile/noticias/noticiasRecientes/nuevo.png";
import Cobra from "../../images/mobile/noticias/noticiasRecientes/cobra.png";
import CaminaKitty from "../../images/desktop/noticias/2021/TENIS-HELLOKITTY.png";
import Mas from "../../images/mobile/noticiasCard/botón-mas.png";

const AmongusPage = () => {
  const { t } = useTranslation("among");
  const windowSize = useWindowSize();

  return (
    <Layout>
      {windowSize < 752 ? (
        <>
          <SingleNews
            backgroundImage={AmongBanner}
            singleTitle={t("amongTitle")}
            singleDate={renderStringHMTLtoJSX(t("amongDate"))}
            sigleFirstP={renderStringHMTLtoJSX(t("amongFirstP"))}
          >
            <img alt="" src={AmongFirstImgMob} className="amongfFirstimg" />
            <div className="amongContainer">
              <p className="containerLight">{t("amongSecondP")}</p>
              <p className="containerBold">{t("amongThirdP")}</p>
            </div>
            <p className="regularP">{t("amongFourthP")}</p>
            <p className="regularP">{t("amongFifthP")}</p>
            <p className="sigleBottomP">{t("amongSixthP")}</p>
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
                image={CaminaKitty}
                title={t("CaminaKitty")}
                date={t("CaminaKittyDATE")}
              >
                <Link to="/news/camina-entre-nubes">
                  <img alt="" src={Mas} className="mas" />
                </Link>
              </NoticiasCard>
            </NoticiasRecientes>
          </div>
        </>
      ) : (
        <>
          <SingleNews
            backgroundImage={AmongBanner}
            singleTitle={t("amongTitle")}
            singleDate={renderStringHMTLtoJSX(t("amongDate"))}
          >
            <div className="newsDualDiv">
              <div className="dualLeftDiv">
                <p className="regularP">
                  {renderStringHMTLtoJSX(t("amongFirstP"))}
                </p>
              </div>
              <div className="dualRightDiv">
                <img
                  alt=""
                  src={AmongFirstImg}
                  className="amongfFirstimgDesk"
                />
              </div>
            </div>
            <div className="singleNewsContentDesk">
              <div className="amongContainerDesk">
                <p className="containerLight">{t("amongSecondP")}</p>
                <p className="containerBold">{t("amongThirdP")}</p>
              </div>
              <div className="fourthPContainer">
                <p className="regularP">{t("amongFourthP")}</p>
              </div>
              <p className="sigleBottomP">{t("amongSixthP")}</p>
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
                image={CaminaKitty}
                title={t("CaminaKitty")}
                date={t("CaminaKittyDATE")}
              >
                <Link to="/news/camina-entre-nubes">
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

export default AmongusPage;
