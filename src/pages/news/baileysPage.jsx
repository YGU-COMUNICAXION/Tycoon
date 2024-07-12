import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../../utils/renderStringHTMLtoJSX";
import Layout from "../../components/layout";
import "../../css/news/warner.css";
import NoticiasRecientes from "../../components/noticias-recientes";
import useWindowSize from "../../hooks/useWindowSize";
import SingleNews from "../../components/singleNews";
import BalBanner from "../../images/desktop/noticias/baileys/upsBanner.png";
import Bal1 from "../../images/desktop/noticias/baileys/ups1.png";
import Bal2 from "../../images/desktop/noticias/baileys/ups2.png";
import Bal3 from "../../images/desktop/noticias/baileys/ups3.png";
import Bal4 from "../../images/desktop/noticias/baileys/ups4.png";
import Bal5 from "../../images/desktop/noticias/baileys/ups5.png";
import { Link } from "gatsby";
import NoticiasCard from "../../components/noticias-card";
import Nuevo from "../../images/mobile/noticias/noticiasRecientes/nuevo.png";
import Cobra from "../../images/mobile/noticias/noticiasRecientes/cobra.png";
import Among from "../../images/desktop/noticias/noticiasRecientes/among.png";
import Mas from "../../images/mobile/noticiasCard/botón-mas.png";

const BaileysPage = () => {
  const { t } = useTranslation("baileys");
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
            <img alt="" src={Bal1} className="amongfFirstimg" />
            <img alt="" src={Bal2} className="amongfFirstimg" />
            <div className="ThreeImgsContainer">
              <div className="topImgs">
                <img alt="" src={Bal3} className="imgtrio" />
                <img alt="" src={Bal4} className="imgtrio" />
              </div>
              <img alt="" src={Bal5} className="imgtrio" />
            </div>
            <div className="finalPDivMob">
              <h2 className="finalP">{t("baSecondP")}</h2>
              <a
                href="https://www.instagram.com/baileysmx/"
                target="_blank"
                rel="noreferrer"
              >
                <h2 className="finalP">{renderStringHMTLtoJSX(t("baIG"))}</h2>
              </a>
              <a
                href="https://www.facebook.com/BaileysMexico"
                target="_blank"
                rel="noreferrer"
              >
                <h2 className="finalP">{renderStringHMTLtoJSX(t("BAFB"))}</h2>
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
            backgroundImage={BalBanner}
            singleTitle={t("baTitle")}
            singleDate={renderStringHMTLtoJSX(t("baDate"))}
          >
            <div className="newsDualDiv">
              <div className="dualLeftDiv">
                <p className="regularP">
                  {renderStringHMTLtoJSX(t("baFirstP"))}
                </p>
              </div>
              <div className="dualRightDiv">
                <img alt="" src={Bal1} className="amongfFirstimgDesk" />
                <img alt="" src={Bal2} className="amongfFirstimgDesk" />
              </div>
            </div>
            <div className="singleNewsContentDesk">
              <div className="imgTrioRow">
                <img alt="" src={Bal3} className="imgtrioDesk" />
                <img alt="" src={Bal4} className="imgtrioDesk" />
                <img alt="" src={Bal5} className="imgtrioDesk" />
              </div>
              <div className="finalPDiv">
                <p className="sigleBottomP">{t("baSecondP")}</p>
                <a
                  href="https://www.instagram.com/baileysmx/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="sigleBottomP">
                    {renderStringHMTLtoJSX(t("baIG"))}
                  </p>
                </a>
                <a
                  href="https://www.facebook.com/BaileysMexico"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="sigleBottomP">
                    {renderStringHMTLtoJSX(t("BAFB"))}
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

export default BaileysPage;
