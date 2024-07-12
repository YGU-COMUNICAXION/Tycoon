import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../utils/renderStringHTMLtoJSX";
import Layout from "../components/layout";
import "../css/news.css";
import NoticiasRecientes from "../components/noticias-recientes";
import useWindowSize from "../hooks/useWindowSize";
import NoticiasCard from "../components/noticias-card";
import esBackground from "../images/mobile/noticias/bannerNoticiasEsp.png";
import enBackground from "../images/desktop/noticias/PORTADA-NEWS-eng..webp";
import esBackgroundDesk from "../images/desktop/noticias/portadaNoticiasDeskEsp.png";
import enBackgroundDesk from "../images/desktop/noticias/PORTADA-NEWS-eng..webp";
import HelloCateau from "../images/desktop/noticias/HK.png";
import BleachSpinOff from "../images/desktop/noticias/2023/Bleach.jpg";
import FallGuysTycoon from "../images/desktop/noticias/2022/FallGuys.jpg";
import Instagram from "../images/mobile/noticiasCard/icon-instagram.png";

const imgMap = { en: enBackground, es: esBackground };
const imgMapDesk = { en: enBackgroundDesk, es: esBackgroundDesk };

const NewsPage = () => {
  const { t } = useTranslation("news");
  const windowSize = useWindowSize();
  const { i18n } = useTranslation();

  const [lastInstaPost, setLastInstaPost] = useState([]);
  const [allInstaPost, setAllInstaPost] = useState();
  const [loading, setLoading] = useState(false);
  const newsSection = useRef();

  useEffect(() => {
    setLoading(true);
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
      setAllInstaPost(postsInstagram);
      setLoading(false);
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

  const getInstagramPostPage = async (url) => {
    try {
      let response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      let data = await response.json();
      setAllInstaPost(data);
      return true;
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };

  return (
    <Layout>
      {windowSize < 752 ? (
        <div className="MainDiv">
          <div
            className="newsFirstSection"
            style={{ backgroundImage: `url("${imgMap[i18n.language]}")` }}
          ></div>
          <div className="newsSecondSection">
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
                        <a href={e.permalink} target="_blank" rel="noreferrer">
                          <img alt="mas" src={Instagram} className="mas" />
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
                      rel="noreferrer"
                    >
                      <img alt="mas" src={Instagram} className="mas" />
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
                      rel="noreferrer"
                    >
                      <img alt="mas" src={Instagram} className="mas" />
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
                      rel="noreferrer"
                    >
                      <img alt="mas" src={Instagram} className="mas" />
                    </a>
                  </NoticiasCard>
                </>
              )}
            </NoticiasRecientes>
          </div>
        </div>
      ) : (
        <div className="MainDivDesk">
          <div
            className="newsFirstSectionDesk"
            style={{ backgroundImage: `url("${imgMapDesk[i18n.language]}")` }}
          />
          <div className="newsSecondSection">
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
                        <a href={e.permalink} target="_blank" rel="noreferrer">
                          <img alt="mas" src={Instagram} className="mas" />
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
                      rel="noreferrer"
                    >
                      <img alt="mas" src={Instagram} className="mas" />
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
                      rel="noreferrer"
                    >
                      <img alt="mas" src={Instagram} className="mas" />
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
                      rel="noreferrer"
                    >
                      <img alt="mas" src={Instagram} className="mas" />
                    </a>
                  </NoticiasCard>
                </>
              )}
            </NoticiasRecientes>
          </div>
        </div>
      )}

      <section ref={newsSection} className="newsThirdSection">
        <h2 className="sectionTitle">{t("newstitle")}</h2>

        <div className="newsSection">
          {allInstaPost &&
            allInstaPost.data.map((e, index) => {
              return (
                <NoticiasCard
                  key={index}
                  image={e.media_url}
                  title={processCaption(e.caption)}
                  date={processTimestamp(e.timestamp)}
                  loader={loading}
                >
                  <a href={e.permalink} target="_blank" rel="noreferrer">
                    <img alt="mas" src={Instagram} className="mas" />
                  </a>
                </NoticiasCard>
              );
            })}
        </div>

        {allInstaPost && (
          <div className="pagingBtns">
            {allInstaPost.paging.previous && (
              <button
                style={{ justifyContent: "center" }}
                onClick={async () => {
                  newsSection.current.scrollIntoView({ behavior: "smooth" });
                  setLoading(true);
                  await getInstagramPostPage(allInstaPost.paging.previous);
                  setLoading(false);
                }}
              >
                Atrás
              </button>
            )}

            {allInstaPost.paging.next && (
              <button
                style={{ justifyContent: "center" }}
                onClick={async () => {
                  newsSection.current.scrollIntoView({ behavior: "smooth" });
                  setLoading(true);
                  await getInstagramPostPage(allInstaPost.paging.next);
                  setLoading(false);
                }}
              >
                Siguiente
              </button>
            )}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default NewsPage;
