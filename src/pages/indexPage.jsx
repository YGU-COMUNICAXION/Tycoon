import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../utils/renderStringHTMLtoJSX";
import Layout from "../components/layout";
import "../css/home.css";
import NoticiasRecientes from "../components/noticias-recientes";
import Button from "../components/button";
import useWindowSize from "../hooks/useWindowSize";
import Oficinadesk from "../images/desktop/home/oficina.png";
import NoticiasCard from "../components/noticias-card";
import HelloCateau from "../images/desktop/noticias/HK.png";
import BleachSpinOff from "../images/desktop/noticias/2023/Bleach.jpg";
import FallGuysTycoon from "../images/desktop/noticias/2022/FallGuys.jpg";
import useGeo from "../hooks/useGeo";
import esBackground from "../images/mobile/home/bannerHomeEsp.webp";
import enBackground from "../images/mobile/home/bannerHomeEn.webp";
import esBackgroundDesk from "../images/desktop/home/bannerHomeEsp.webp";
import enBackgroundDesk from "../images/desktop/home/PORTADA-HOME-INGLES-DESKTOP.webp";
import Instagram from "../images/mobile/noticiasCard/icon-instagram.png";

const imgMap = { en: enBackground, es: esBackground };
const imgMapDesk = { en: enBackgroundDesk, es: esBackgroundDesk };

const IndexPage = () => {
  const { t } = useTranslation("home");
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const windowSize = useWindowSize();
  const geo = useGeo();

  const [lastInstaPost, setLastInstaPost] = useState([]);

  useEffect(() => {
    const fetchInstagramData = async (url) => {
      try {
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        let data = await response.json();
        return data;
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    };

    const fetchData = async () => {
      const url = `https://graph.instagram.com/me/media?fields=media_url,caption,permalink,timestamp&access_token=${process.env.GATSBY_INSTAGRAM_TOKEN}`;
      const postsInstagram = await fetchInstagramData(url);
      const last3 = postsInstagram.data.slice(0, 3);
      setLastInstaPost(last3);
    };

    fetchData();
  }, []);

  const processCaption = (caption) => {
    if (!caption) return "";
    const firstNewLine = caption.indexOf("\n");
    if (firstNewLine !== -1) {
      return caption.slice(0, firstNewLine);
    }
    return caption.length > 25 ? caption.slice(0, 25) + "..." : caption;
  };

  const processTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <Layout>
      {windowSize < 752 ? (
        <div className="MainDiv">
          <div
            className="homeFirstSection"
            style={{ backgroundImage: `url("${imgMap[i18n.language]}")` }}
          ></div>
          <div className="homeSecondSection">
            <h2 className="sectionTitle">
              {renderStringHMTLtoJSX(t("recentNews"))}
            </h2>
            <NoticiasRecientes>
              {lastInstaPost ? (
                <>
                  {lastInstaPost.map((e, index) => {
                    return (
                      <NoticiasCard
                        key={index}
                        image={e.media_url}
                        title={processCaption(e.caption)}
                        date={processTimestamp(e.timestamp)}
                      >
                        <a href={e.permalink} target="_blank">
                          <img src={Instagram} className="mas" />
                        </a>
                      </NoticiasCard>
                    );
                  })}
                </>
              ) : (
                <>
                  <NoticiasCard
                    image={HelloCateau}
                    title={t("HelloChateau")}
                    date={t("pendingDate")}
                  >
                    <a
                      href="https://www.instagram.com/p/CiIM85IDQX0/?igshid=YmMyMTA2M2Y="
                      target="_blank"
                    >
                      <img src={Instagram} className="mas" />
                    </a>
                  </NoticiasCard>
                  <NoticiasCard
                    image={BleachSpinOff}
                    title={t("BleachSpinOFF")}
                    date={t("BleachSpinDate")}
                  >
                    <a
                      href="https://www.instagram.com/p/CosowM4rij9/"
                      target="_blank"
                    >
                      <img src={Instagram} className="mas" />
                    </a>
                  </NoticiasCard>
                  <NoticiasCard
                    image={FallGuysTycoon}
                    title={t("FallGuysTycoon")}
                    date={t("FallGuysDate")}
                  >
                    <a
                      href="https://www.instagram.com/p/Cmc31sVNpE8/"
                      target="_blank"
                    >
                      <img src={Instagram} className="mas" />
                    </a>
                  </NoticiasCard>
                </>
              )}
            </NoticiasRecientes>
            <div className="secondSectionButtonDiv">
              <div className="secondSectionButton">
                <Button buttonText={t("more")} href={"/news"} />
              </div>
            </div>
          </div>
          <div className="homeThirdSection">
            <h2 className="sectionTitle">
              {renderStringHMTLtoJSX(t("newBussiness"))}
            </h2>
            <p className="regularP">{t("areyouinterested")}</p>
            <div className="thirdSectionButton">
              <Button buttonText={t("contact")} href={"/contact"} />
            </div>
          </div>
          <div className="homeFourthSection" />
        </div>
      ) : (
        <div className="MainDivDesk">
          <div
            className="homeFirstSectionDesk"
            style={{ backgroundImage: `url("${imgMapDesk[i18n.language]}")` }}
          ></div>
          <div className="homeSecondSectionDesk">
            <h2 className="sectionTitle">
              {renderStringHMTLtoJSX(t("recentNews"))}
            </h2>
            <NoticiasRecientes>
              {lastInstaPost ? (
                <>
                  {lastInstaPost.map((e, index) => {
                    return (
                      <NoticiasCard
                        key={index}
                        image={e.media_url}
                        title={processCaption(e.caption)}
                        date={processTimestamp(e.timestamp)}
                      >
                        <a href={e.permalink} target="_blank">
                          <img src={Instagram} className="mas" />
                        </a>
                      </NoticiasCard>
                    );
                  })}
                </>
              ) : (
                <>
                  <NoticiasCard
                    image={HelloCateau}
                    title={t("HelloChateau")}
                    date={t("pendingDate")}
                  >
                    <a
                      href="https://www.instagram.com/p/CiIM85IDQX0/?igshid=YmMyMTA2M2Y="
                      target="_blank"
                    >
                      <img src={Instagram} className="mas" />
                    </a>
                  </NoticiasCard>
                  <NoticiasCard
                    image={BleachSpinOff}
                    title={t("BleachSpinOFF")}
                    date={t("BleachSpinDate")}
                  >
                    <a
                      href="https://www.instagram.com/p/CosowM4rij9/"
                      target="_blank"
                    >
                      <img src={Instagram} className="mas" />
                    </a>
                  </NoticiasCard>
                  <NoticiasCard
                    image={FallGuysTycoon}
                    title={t("FallGuysTycoon")}
                    date={t("FallGuysDate")}
                  >
                    <a
                      href="https://www.instagram.com/p/Cmc31sVNpE8/"
                      target="_blank"
                    >
                      <img src={Instagram} className="mas" />
                    </a>
                  </NoticiasCard>
                </>
              )}
            </NoticiasRecientes>
            <div className="secondSectionButtonDiv">
              <div className="secondSectionButtonDesk">
                <Button buttonText={t("more")} href={"/news"} />
              </div>
            </div>
          </div>
          <div className="homeThridSectionDesk">
            <div className="homeContactDiv">
              <h2 className="sectionTitle">
                {renderStringHMTLtoJSX(t("newBussiness"))}
              </h2>
              <p className="regularP">{t("areyouinterested")}</p>
              <div className="thirdSectionButton">
                <Button buttonText={t("contact")} href={"/contact"} />
              </div>
            </div>
            <img src={Oficinadesk} className="oficinaDesk" />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default IndexPage;
