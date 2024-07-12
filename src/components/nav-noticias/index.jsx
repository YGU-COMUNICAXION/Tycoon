import React, { useState, useEffect } from "react";
import "./styles.css";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Link } from "gatsby";
import Nav from "react-bootstrap/Nav";
import NoticiasCard from "../noticias-card";
import Cobra from "../../images/mobile/noticias/noticiasRecientes/cobra.png";
import Nuevo from "../../images/mobile/noticias/noticiasRecientes/nuevo.png";
import useWindowSize from "../../hooks/useWindowSize";
import Button from "../button";
import HelloKitty22 from "../../images/desktop/noticias/2022/HELLO-KITTY.png";
import PinkPantherLanza from "../../images/desktop/noticias/2022/COLECCION-PINK-PANTHER.png";
import PlayerasHoodies from "../../images/desktop/noticias/2022/PLAYERAS-HOODIES.png";
import PonteRosa from "../../images/desktop/noticias/2022/19-OCT.png";
import ColeccionXbox from "../../images/desktop/noticias/2022/COLECCION-XBOX.png";
import AutoExploracion from "../../images/desktop/noticias/2022/AUTOEXPLORACION.png";
import CausaRosa from "../../images/desktop/noticias/2022/CAUSAROSA.png";
import Koaj2022 from "../../images/desktop/noticias/2022/KOAJ.png";
import VianneyXbox from "../../images/desktop/noticias/2022/VIANNEY.png";
import PopeyeKOAJ from "../../images/desktop/noticias/2022/POPEYEKOAJ.png";
import ArgentinaAmong from "../../images/desktop/noticias/2022/ARG-AMONG.png";
import KaratePeru from "../../images/desktop/noticias/2022/KARATE-PERU.png";
import AmongLLega from "../../images/desktop/noticias/noticiasRecientes/among.png";
import Warner from "../../images/desktop/noticias/2021/WARNER.png";
import CaminaKitty from "../../images/desktop/noticias/2021/TENIS-HELLOKITTY.png";
import ColeccionPantera from "../../images/desktop/noticias/2020/COLECCION-EXCLUSIVA.png";
import Crayola from "../../images/desktop/noticias/2020/CRAYOLA.png";
import MasterChef from "../../images/desktop/noticias/2020/VASCONIA.png";
import TycoonDia from "../../images/desktop/noticias/2020/TYCOON-ENTERPRISES.png";
import Endemol from "../../images/desktop/noticias/2020/MASTERCHEF.png";
import ColDistroller from "../../images/desktop/noticias/2020/DISTROLLER.png";
import Balleys from "../../images/desktop/noticias/2020/UPS.png";
import Facebook from "../../images/mobile/noticiasCard/icon-facebook.png";
import Instagram from "../../images/mobile/noticiasCard/icon-instagram.png";
import Mas from "../../images/mobile/noticiasCard/botón-mas.png";
import LinkedIn from "../../images/desktop/layout/header/icon-linkedin.png";
import AnaEmilia from "../../images/desktop/noticias/2022/anaEmilia.png";
import Amarillo from "../../images/desktop/noticias/2022/pintarondeamarillo.png";
import CampañaChile from "../../images/desktop/noticias/2022/campaña360.png";
import DunkinMinions from "../../images/desktop/noticias/2022/dunkinMinion.png";
import Minione from "../../images/desktop/noticias/2022/minionsEcuador.png";
import Narutomx from "../../images/desktop/noticias/2022/coleccionNaruto.png";
import atunMinion from "../../images/desktop/noticias/2022/tunaminion.png";
import LolyColeccion from "../../images/desktop/noticias/2022/lolyintheSky.png";
import SaborHer from "../../images/desktop/noticias/2022/hersheysSabor.png";
import BebidaJurasic from "../../images/desktop/noticias/2022/bebidaRaptos.png";
import HarryWal from "../../images/desktop/noticias/2022/harryWalmart.png";
import Olive from "../../images/desktop/noticias/2022/oliveOyl.png";
import CrayolaMayo from "../../images/desktop/noticias/2022/mccromickCrayola.png";
import Tycum from "../../images/desktop/noticias/2022/tycoon32.png";
import Unwind from "../../images/desktop/noticias/2022/unwind.png";
import HaloChamp from "../../images/desktop/noticias/2022/haloChampionship.png";
import JurasicLatam from "../../images/desktop/noticias/2022/jurasicLATAM.png";
import PumaFrida from "../../images/desktop/noticias/2022/PUMAFRIDA.png";
import Fridacien from "../../images/desktop/noticias/2022/FRIDA115.png";
import AlpinaMinion from "../../images/desktop/noticias/2022/alpinaMinions.png";
import BleachPeru from "../../images/desktop/noticias/2022/BleachPeru.png";
import JurasicLanza from "../../images/desktop/noticias/2022/jurasiclanzamientos.png";
import FelicidadesCo from "../../images/desktop/noticias/2022/felicidadesCocoMelon.png";
import HelloCo from "../../images/desktop/noticias/2022/helloKittiColombia.png";
import FelicidadesGhost from "../../images/desktop/noticias/2022/felicidadesGhost.png";
import CerealHer from "../../images/desktop/noticias/2022/cerealHersheys.png";
import AnaEmiliaHBO from "../../images/desktop/noticias/2022/anaEmiliaHBO.png";
import CarreraHello from "../../images/desktop/noticias/2022/CARRERAHELLOKITTY.png";
import MagiaHarry from "../../images/desktop/noticias/2022/laMagiaHarry.png";
import HalloPara from "../../images/desktop/noticias/2022/halloParamount.png";
import BalleysMont from "../../images/desktop/noticias/2022/belleysMont.png";
import ChupaShampoo from "../../images/desktop/noticias/2022/chupachupsShampoo.png";
import TodosPodemos from "../../images/desktop/noticias/2022/todosChefs.png";
import SerieHalo from "../../images/desktop/noticias/2022/haloSerie.png";
import deathNote from "../../images/desktop/noticias/2022/deathNote.png";
import VansCrayola from "../../images/desktop/noticias/2022/vansCrayola.png";
import Vikings from "../../images/desktop/noticias/2022/vikingsValhalla.png";
import DulzuraHello from "../../images/desktop/noticias/2022/dulzuraHello.png";
import HelloCafe from "../../images/desktop/noticias/2022/helloCafe.png";

function NewsNav() {
  const [active, setActive] = useState(1);
  const { t } = useTranslation("news");
  const windowSize = useWindowSize();
  const [page2, setPage2] = useState("nada");
  const [page3, setPage3] = useState("nada");
  const [page4, setPage4] = useState("nada");
  const [page5, setPage5] = useState("nada");
  const [page6, setPage6] = useState("nada");
  const [page7, setPage7] = useState("nada");
  const [page8, setPage8] = useState("nada");
  const [page9, setPage9] = useState("nada");

  return (
    <div className="noticiasPageMainDiv">
      <Nav fill variant="tabs" activeKey={active}>
        <Nav.Item
          onClick={() => {
            setActive(1);
            setPage2("nada");
            setPage3("nada");
            setPage4("nada");
            setPage5("nada");
            setPage6("nada");
            setPage7("nada");
            setPage8("nada");
            setPage9("nada");
          }}
        >
          <Nav.Link eventKey="link-1">2022</Nav.Link>
        </Nav.Item>
        <div className="navDivisor" />
        <Nav.Item
          onClick={() => {
            setActive(2);
            setPage2("nada");
            setPage3("nada");
            setPage4("nada");
            setPage5("nada");
            setPage6("nada");
            setPage7("nada");
            setPage8("nada");
            setPage9("nada");
          }}
        >
          <Nav.Link eventKey="link-2">2021</Nav.Link>
        </Nav.Item>
        <div className="navDivisor" />
        <Nav.Item
          onClick={() => {
            setActive(3);
            setPage2("nada");
            setPage3("nada");
            setPage4("nada");
            setPage5("nada");
            setPage6("nada");
            setPage7("nada");
            setPage8("nada");
            setPage9("nada");
          }}
        >
          <Nav.Link eventKey="link-3">2020</Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="noticiasGrid">
        {windowSize < 752 ? (
          <>
            {active === 1 && (
              <>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={HelloKitty22}
                    title={t("HelloKitty22")}
                    date={t("HelloKitty22DATE")}
                  >
                    <a
                      href="https://www.facebook.com/100064083333464/posts/pfbid0vXAWbR918VjZR4coGjXEbxMS3kfvySZFoPWTBm3T3mckNRw5YrHgiBDSznB5MCdnl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CkbdKUMO-42/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-hellokitty-activity-6993283708149497856-uG9N?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                  <NoticiasCard
                    image={PinkPantherLanza}
                    title={t("PinkPantherLanza")}
                    date={t("PinkPantherLanzaDATE")}
                  >
                    <a
                      href="https://www.facebook.com/100064083333464/posts/pfbid0ectJotQH3qpCZFJkWcmTSVWdajv5s6jz5vZft7uYfrvVVWnUDDMPJUEQ5Ke5iRbvl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CkRD3zMt5hU/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={PlayerasHoodies}
                    title={t("PlayerasHoodies")}
                    date={t("PlayerasHoodiesDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02ZPcDHrbyXz46CXuikfuitPb1U8HQNKTJ3La7QBM9EiKLxasmjXSuouYqniaU1Y6Ul/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CkG5rWKJCYd/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={PonteRosa}
                    title={t("PonteRosa")}
                    date={t("PonteRosaDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0scYXYVpyjAvPNYNG9mmKYRzYZeA1gLiouyDpUTZvjGxmXEZhC1MafCjMADcoXrVZl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Cj6Aj_rt081/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_favordetocar-pinkpanther-fundaciaejncima-activity-6988617406994599936-WkQb?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={ColeccionXbox}
                    title={t("ColeccionXbox")}
                    date={t("ColeccionXboxDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02FuhemXHSPg6JJqbDp8hfUTK866ABVWcDZtVujLNhdM8hJTxr76zxEPpiRJgcnhHNl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Cj091b0MQ-N/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={AutoExploracion}
                    title={t("AutoExploracion")}
                    date={t("AutoExploracionDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02bGvjUj6NqGnyrtvVgHp7Vuq1o2SaeQzGNuShZBxQqSS9BEovSfVwXg2z98b943ewl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Cj08sXFsdm8/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
              </>
            )}
            {page2 === "unodos" && (
              <>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={CausaRosa}
                    title={t("CausaRosa")}
                    date={t("CausaRosaDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0voSJdcbRTYiKMAUyNrVS1gJN9wAgXV8uvD2mhNyxoAHbbLFw5qt9WjeyxaM1zTrXl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CjtZI8VvU8A/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={Koaj2022}
                    title={t("Koaj2022")}
                    date={t("Koaj2022DATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02yMXQFD7etkTzjP5kWpwE7LNk8d355qBWtVMsgep9rFJzMtotJX92zuLcDjFrgR7cl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Cji82XAshXd/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={VianneyXbox}
                    title={t("VianneyXbox")}
                    date={t("VianneyXboxDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0NvjCWrSY1ybW7pns6rGbjzCyNrszV9fUAD2Q2DPyeBTMAWypnsTfQeuNyfLohdqRl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CjRH5j3MNvr/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={PopeyeKOAJ}
                    title={t("PopeyeKOAJ")}
                    date={t("PopeyeKOAJDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0x5GDQco52ykd7PgKBgKUYVxYUJL9eKGEWQvJLdnuLfd3WH2Fjsgx7dW4Lym732efl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Cif_nHCvpXU/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={ArgentinaAmong}
                    title={t("ArgentinaAmong")}
                    date={t("ArgentinaAmongDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0WsvU6ignXFqB7QHd6EVob3ZhrV65W6BCfXYcqfNBKzrUrHkzGhcAgFNTssdu7Sd7l/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Cia2AwToL5V/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={KaratePeru}
                    title={t("KaratePeru")}
                    date={t("KaratePeruDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0gywiEEbS9p53AK1jj26coJUEVT6eeBjcUH5ZgREyKBjYDRhEYiuHew5Qtp3FyiqWl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CiTHoQ7pR51/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
              </>
            )}
            {page3 === "unotres" && (
              <>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={AnaEmilia}
                    title={t("AnaEmilia")}
                    date={t("AnaEmiliaDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02WzFnqFZYwLKp9au4cGHcjwCCuyXKyAVFLw8jLGTBynyzDGFqAL3pixbPBa4rHqbql/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CiQMiwYO5Si/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={Amarillo}
                    title={t("Amarillo")}
                    date={t("AmarilloDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0CvVfg5XwbAEXTHDqLnGZE1vYkkLv99tu4S5ZzVPabXyKvuKoTQKbECuKriFdBG2xl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CiI0dwWIcps/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={CampañaChile}
                    title={t("CampañaChile")}
                    date={t("CampañaChileDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02uTTdqgpBAsPsQbgka4jTgRpcqQo8L9TgjBvRBcsw26KW7TyTDuWPNytxsSj1TnK4l/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CiBGEcrsTSN/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-minions-activity-6978739835985391616-RcLY?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                  <NoticiasCard
                    image={DunkinMinions}
                    title={t("DunkinMinions")}
                    date={t("DunkinMinionsDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02p66sTt4iPYcwDVuNDeavt6wqKM87gwaWCNyZPSfk8RUBb5k7Mgm2rutewV8hXFq7l/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Ch78fQNNZjM/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-licensing-activity-6973340365248430080-Z8Mp?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={Minione}
                    title={t("Minione")}
                    date={t("MinioneDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0LhyCBucFU8htReKK5VP6ZnoxKPwdev8oWU4TCAEmyWUhzNDzb3G39iAhFZq9ArsYl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Ch2y5xbIdOJ/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={Narutomx}
                    title={t("Narutomx")}
                    date={t("NarutomxDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02DV3CHFYcp4Hqz2U83cVs6w4bccEEoZkX8LpVdhYydyjq6ssyvQ4xs18GXfkFbZpCl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/ChvEgZtpnko/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
              </>
            )}
            {page4 === "unocuatro" && (
              <>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={atunMinion}
                    title={t("atunMinion")}
                    date={t("atunMinionDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid06SNjJ6E8HWWWRjMzYh84Pds2QbBGXKnFqW3kEW5Nn65vaEyqRdA88fy1d6KEfSiKl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Chp66T3pdDc/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-minions-activity-6970414912565059585-L0mr?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                  <NoticiasCard
                    image={LolyColeccion}
                    title={t("LolyColeccion")}
                    date={t("LolyColeccionDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0QB2TNFiSSEtcBHBQyzUUYcezomTiTKWeCX1T4oYBc9uvVsjnW9bPoSoPnP8R7BeXl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/ChkPYUVOMlq/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-lolyintheskyxbt21-activity-6968715080104361984-Wz5M?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={SaborHer}
                    title={t("SaborHer")}
                    date={t("SaborHerDATE")}
                  >
                    <a href="" target="_blank" rel="noreferrer">
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/ChF4WdJljwa/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-hersheys-activity-6965444258740785152-y7Ae?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                  <NoticiasCard
                    image={BebidaJurasic}
                    title={t("BebidaJurasic")}
                    date={t("BebidaJurasicDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0sjkaose6zuRekeKrZczt4NiyYRfgR7rTapXvzBUxr9dQtXmBcRrxwpesVNTBuVmUl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/ChBQhWkhaFb/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-raptor-activity-6963916254524956672-kYIc?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={HarryWal}
                    title={t("HarryWal")}
                    date={t("HarryWalDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0TEGpDx1ZLtFkLRvm1v6P1nA337Jhj228Two3HvoJ73G7HPcNCaTWhFLukvvtXjMml/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Cg4_zWLPT5G/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-harrypotter-activity-6963212677556924416-REuw?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                  <NoticiasCard
                    image={Olive}
                    title={t("Olive")}
                    date={t("OliveDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02tuTk7YKJzqM8Rb8Hit4dPmHHViiJvHmVR9y4wpMXSoWxPZ8w1bKazYK1T6h5q9JRl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Cg0YjH7MAch/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-oliveoyl-activity-6961002306821656577-ZD09?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                </div>
              </>
            )}
            {page5 === "unocinco" && (
              <>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={CrayolaMayo}
                    title={t("CrayolaMayo")}
                    date={t("CrayolaMayoDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0mSfRXbCdJTFnznD9EGesSgf8j6CCtYU47MM4HNxkvYPBg7NjxefTrruFtEv3b9qcl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CgkZctwvdgV/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-crayola-activity-6958832365204905984-LQaO?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                  <NoticiasCard
                    image={Tycum}
                    title={t("Tycum")}
                    date={t("TycumDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02mi4V2wigmUmBDvmQZ6Qjw7bc9319t5x3JPAvARhMH5CCjEcq9BkfEaKLWQkQe4sZl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CgfCCLLOWk-/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoon-soytycoon-licensing-activity-6957757894230487040-ZRJR?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={Unwind}
                    title={t("Unwind")}
                    date={t("UnwindDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0299du4i9Rhmdr6m2LsHA2NwpYNYKq7AXRDnMabPnJBaHFBUfC8CPewRjj2ct2g8V1l/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CgcysEmMMGE/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-pinkpanther-activity-6957440739194671104-gw6r?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                  <NoticiasCard
                    image={HaloChamp}
                    title={t("HaloChamp")}
                    date={t("HaloChampDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02NDt9sqGfNfxNRmLUaSMVek3b8w7uVvRuUAAiJZnG1rso1jRF3R89STx4sr6icqFnl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CgVhDKxu1uI/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={JurasicLatam}
                    title={t("JurasicLatam")}
                    date={t("JurasicLatamDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02rEiBF8DZfBvXmqWDxQKuCn1J8AqXgCua2C7XSRKMvwdhfcHkg7jZkQaewiz7zGvbl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CgCkrT-O9vw/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={PumaFrida}
                    title={t("PumaFrida")}
                    date={t("PumaFridaDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02txX6qDSzzRqhTDL9THS5xsDhwyJSrsDhTEjKa6G3BAMN5RR1KmTptKcYMvjat7Sxl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Cf4yo7WNv9Z/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-hersheys-activity-6952378119513133057-J9zH?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                </div>
              </>
            )}
            {page6 === "unoseis" && (
              <>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={Fridacien}
                    title={t("Fridacien")}
                    date={t("FridacienDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02ucCNTuC9SUptvohM2XGxjhaDuaMvUhnfPeUP6p7LNjGbwmBNgVSRMUg3UZiTxcTXl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CfsAUlfuebs/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={AlpinaMinion}
                    title={t("AlpinaMinion")}
                    date={t("AlpinaMinionDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02XbkQF7rJewDmgDTxvWz1FPPPv7HVRe2Fs8UC8vDhmxNapsVVALuy1KdVMuitRCCVl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CfP8-jtJCIp/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={BleachPeru}
                    title={t("BleachPeru")}
                    date={t("BleachPeruDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0QxZnZXoMjEMjuQ88RXfDLcjKgf947gKnJGN5RJyJ2THJs5YoPnYp3vCTTuLxHuaWl/?mibextid=cr9u03               "
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CfAgM9KsEjz/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={JurasicLanza}
                    title={t("JurasicLanza")}
                    date={t("JurasicLanzaDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02c2wSBdteoemHEFKYznUdtT3wxE7J8JwibaraGoV7cfPW82cSYiVDgEVMdNmfpUu3l/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Ce7Wn56O3cV/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={FelicidadesCo}
                    title={t("FelicidadesCo")}
                    date={t("FelicidadesCoDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0yvBQcGKXkRRoZdFu393VmpA5ghSxqXXW5xPmVLSuzeb7bb43rDdKudc5ScX1sAZAl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CezoOlOp-V4/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-cocomelon-activity-6942529816524992512-1XV4?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                  <NoticiasCard
                    image={HelloCo}
                    title={t("HelloCo")}
                    date={t("HelloCoDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0aX2T4Ub94Pzn8yx1zrK3Gr8P2ijCoANknCgK2roWTiERvcKnfEvrLqCgS2NySbkvl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CeoRqO2OSN2/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
              </>
            )}
            {page7 === "unosiete" && (
              <>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={FelicidadesGhost}
                    title={t("FelicidadesGhost")}
                    date={t("FelicidadesGhostDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0iRvhc5z84vuZdNX9cgF89aauaGxPJEBbtHPRc9YHiajXsXxigqXwT3F2HE9b19q8l/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CejpNG0tJUt/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-ghostbusters-activity-6942126811824762880-5gOz?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                  <NoticiasCard
                    image={CerealHer}
                    title={t("CerealHer")}
                    date={t("CerealHerDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0vgtFfTJwkj9p7wi7ZGFLSfUNkEkWH8HcJoKKMb5SJBRnrUhGtUR9qhpUvwAVz2odl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CeCtsodvuz_/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={AnaEmiliaHBO}
                    title={t("AnaEmiliaHBO")}
                    date={t("AnaEmiliaHBODATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02VPyRoET6JV7BUQ5czw3qfXqU23prsK3HZ8VZhLA1QfR3b857JYziBGvg7n6iSNhHl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Cd6_T0Zrx90/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={CarreraHello}
                    title={t("CarreraHello")}
                    date={t("CarreraHelloDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02Dt5i41o4hTxkG3CoYWKH14xbUDbVKdB2yfgwf6Wu9fhgMGPCzJdNhpEVTow97yB9l/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Cdq-IhcOBt9/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={MagiaHarry}
                    title={t("MagiaHarry")}
                    date={t("MagiaHarryDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid06yHJdSpM1k77tNti5Rz7pQYnpJ8aQgQiU96gZvmuHDNiTdkqjSg444cGEXpNbhTGl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CdeqkZ5BXbT/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={HalloPara}
                    title={t("HalloPara")}
                    date={t("HalloParaDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02t1Ufu54b6LKEnE1uBA6umDmdcvCs8BKQqfRfbBK2vbSrxxdsufrxV3FRmmn6aEgHl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CdWSOe9O9Gu/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
              </>
            )}
            {page8 === "unoocho" && (
              <>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={BalleysMont}
                    title={t("BalleysMont")}
                    date={t("BalleysMontDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid033P1tgWjokTUnmCfDLBbYKAan7CUC1Z2j3HHX8Rew4AAyr2aM373gNqeX2wtreiE4l/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Cc6nccBLHD_/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={ChupaShampoo}
                    title={t("ChupaShampoo")}
                    date={t("ChupaShampooDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02bAGM8N48CgrA2iyzyLVAP6C29QqoyisBR1UsnGLPp3K9JyNy9F4uvqXVBHTFW1Mbl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CcZAhX-BqTN/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-chupachups-activity-6922954450013741056-H8EU?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={TodosPodemos}
                    title={t("TodosPodemos")}
                    date={t("TodosPodemosDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0V4Y18P1NV823pzDJmmzcvWv6QjGWJVrBFmjGuSusB3DkZWHTJjPa4TSSSjuAx4rNl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CcOtVq_MHxo/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-masterchef-activity-6919768243876319233-WNUK?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                  <NoticiasCard
                    image={SerieHalo}
                    title={t("SerieHalo")}
                    date={t("SerieHaloDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0gZvDStC7kSWHeJiG27YAE4d8cYcNVdLDF99vziv5MBdge6prXtaRSqx22VCy1s3Pl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CbiqF7iMi4W/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={deathNote}
                    title={t("deathNote")}
                    date={t("deathNoteDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0HyWKB58NFD2qQ63GGe2Tsjy1E8wBJWr8ATJqBF11Q39fPtxPXJSkmLgmZapqTAJcl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CbYCT3SBvqn/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={VansCrayola}
                    title={t("VansCrayola")}
                    date={t("VansCrayolaDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0NoQqJWWjf4GRmBAaz2wQsDfUfTmpLjvLPVYrcCWsxn3bFTJqoqv4FVb2TZCuai1ml/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CbOHKaYJPba/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
              </>
            )}
            {page9 === "unonueve" && (
              <>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={Vikings}
                    title={t("Vikings")}
                    date={t("VikingsDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid037osu3BsjGnFHsu2TSMhcbSnnneKxAuRZA7oRWs6wADh7kmRvA9swjuK8RV9wYBAel/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CbIcAirvKK-/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={DulzuraHello}
                    title={t("DulzuraHello")}
                    date={t("DulzuraHelloDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0eWDvTXN2R9YiHAs6qQ2fBicyjd9s2oHqD7C1EDfncyYQfDh3ttvaAHrU7SZ7qLBGl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CZuyU7DlF8H/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={HelloCafe}
                    title={t("HelloCafe")}
                    date={t("HelloCafeDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid037yNzn4BDt4MMPCrvZTdpyjnr3H3h9F5VyHqAV3K2FYLEmCNBKi3Cn3QhXoQrRLBml/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CZkMUC1MFVV/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
              </>
            )}
            {page2 === "nada" && active === 1 ? (
              <div
                className="verMasButtonDivMob"
                onClick={() => setPage2("unodos")}
              >
                <Button buttonText={t("seeMore")} />
              </div>
            ) : null}
            {page2 === "unodos" && active === 1 && page3 === "nada" ? (
              <div
                className="verMasButtonDivMob"
                onClick={() => setPage3("unotres")}
              >
                <Button buttonText={t("seeMore")} />
              </div>
            ) : null}
            {page3 === "unotres" && active === 1 && page4 === "nada" ? (
              <div
                className="verMasButtonDivMob"
                onClick={() => setPage4("unocuatro")}
              >
                <Button buttonText={t("seeMore")} />
              </div>
            ) : null}
            {page4 === "unocuatro" && active === 1 && page5 === "nada" ? (
              <div
                className="verMasButtonDivMob"
                onClick={() => setPage5("unocinco")}
              >
                <Button buttonText={t("seeMore")} />
              </div>
            ) : null}
            {page5 === "unocinco" && active === 1 && page6 === "nada" ? (
              <div
                className="verMasButtonDivMob"
                onClick={() => setPage6("unoseis")}
              >
                <Button buttonText={t("seeMore")} />
              </div>
            ) : null}
            {page6 === "unoseis" && active === 1 && page7 === "nada" ? (
              <div
                className="verMasButtonDivMob"
                onClick={() => setPage7("unosiete")}
              >
                <Button buttonText={t("seeMore")} />
              </div>
            ) : null}
            {page7 === "unosiete" && active === 1 && page8 === "nada" ? (
              <div
                className="verMasButtonDivMob"
                onClick={() => setPage8("unoocho")}
              >
                <Button buttonText={t("seeMore")} />
              </div>
            ) : null}
            {page8 === "unoocho" && active === 1 && page9 === "nada" ? (
              <div
                className="verMasButtonDivMob"
                onClick={() => setPage9("unonueve")}
              >
                <Button buttonText={t("seeMore")} />
              </div>
            ) : null}
            {active === 2 && (
              <>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={Nuevo}
                    title={t("Nuevo")}
                    date={t("newDate")}
                  >
                    <Link to="/news/newintycoon">
                      <img alt="" src={Mas} className="mas" />
                    </Link>
                  </NoticiasCard>
                  <NoticiasCard
                    image={Cobra}
                    title={t("Cobra")}
                    date={t("cobraDate")}
                  >
                    <Link to="/news/cobrakai">
                      <img alt="" src={Mas} className="mas" />
                    </Link>
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={AmongLLega}
                    title={t("AmongLLega")}
                    date={t("amongDate")}
                  >
                    <Link to="/news/amongus">
                      <img alt="" src={Mas} className="mas" />
                    </Link>
                  </NoticiasCard>
                  <NoticiasCard
                    image={Warner}
                    title={t("Warner")}
                    date={t("WarnerDATE")}
                  >
                    <Link to="/news/warnerbros">
                      <img alt="" src={Mas} className="mas" />
                    </Link>
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={CaminaKitty}
                    title={t("CaminaKitty")}
                    date={t("CaminaKittyDATE")}
                  >
                    <Link to="/news/caminaEntreNubes">
                      <img alt="" src={Mas} className="mas" />
                    </Link>
                  </NoticiasCard>
                </div>
              </>
            )}
            {active === 3 && (
              <>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={ColeccionPantera}
                    title={t("ColeccionPantera")}
                    date={t("ColeccionPanteraDATE")}
                  >
                    <Link to="/news/c&a">
                      <img alt="" src={Mas} className="mas" />
                    </Link>
                  </NoticiasCard>
                  <NoticiasCard
                    image={Crayola}
                    title={t("Crayola")}
                    date={t("CrayolaDATE")}
                  >
                    <Link to="/news/iconicaPromocion">
                      <img alt="" src={Mas} className="mas" />
                    </Link>
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={MasterChef}
                    title={t("MasterChef")}
                    date={t("MasterChefDATE")}
                  >
                    <Link to="/news/vasconia">
                      <img alt="" src={Mas} className="mas" />
                    </Link>
                  </NoticiasCard>
                  <NoticiasCard
                    image={TycoonDia}
                    title={t("TycoonDia")}
                    date={t("TycoonDiaDATE")}
                  >
                    <Link to="/news/unDiaSinMujeres">
                      <img alt="" src={Mas} className="mas" />
                    </Link>
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={Endemol}
                    title={t("Endemol")}
                    date={t("EndemolDATE")}
                  >
                    <Link to="/news/endemol">
                      <img alt="" src={Mas} className="mas" />
                    </Link>
                  </NoticiasCard>
                  <NoticiasCard
                    image={ColDistroller}
                    title={t("ColDistroller")}
                    date={t("ColDistrollerDATE")}
                  >
                    <Link to="/news/colombia">
                      <img alt="" src={Mas} className="mas" />
                    </Link>
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={Balleys}
                    title={"Balleys"}
                    date={t("BalleysDATE")}
                  >
                    <Link to="/news/baileys">
                      <img alt="" src={Mas} className="mas" />
                    </Link>
                  </NoticiasCard>
                </div>
              </>
            )}
          </>
        ) : (
          <>
            {active === 1 && (
              <>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={HelloKitty22}
                    title={t("HelloKitty22")}
                    date={t("HelloKitty22DATE")}
                  >
                    <a
                      href="https://www.facebook.com/100064083333464/posts/pfbid0vXAWbR918VjZR4coGjXEbxMS3kfvySZFoPWTBm3T3mckNRw5YrHgiBDSznB5MCdnl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CkbdKUMO-42/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-hellokitty-activity-6993283708149497856-uG9N?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                  <NoticiasCard
                    image={PinkPantherLanza}
                    title={t("PinkPantherLanza")}
                    date={t("PinkPantherLanzaDATE")}
                  >
                    <a
                      href="https://www.facebook.com/100064083333464/posts/pfbid0ectJotQH3qpCZFJkWcmTSVWdajv5s6jz5vZft7uYfrvVVWnUDDMPJUEQ5Ke5iRbvl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CkRD3zMt5hU/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={PlayerasHoodies}
                    title={t("PlayerasHoodies")}
                    date={t("PlayerasHoodiesDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02ZPcDHrbyXz46CXuikfuitPb1U8HQNKTJ3La7QBM9EiKLxasmjXSuouYqniaU1Y6Ul/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CkG5rWKJCYd/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={PonteRosa}
                    title={t("PonteRosa")}
                    date={t("PonteRosaDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0scYXYVpyjAvPNYNG9mmKYRzYZeA1gLiouyDpUTZvjGxmXEZhC1MafCjMADcoXrVZl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Cj6Aj_rt081/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_favordetocar-pinkpanther-fundaciaejncima-activity-6988617406994599936-WkQb?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                  <NoticiasCard
                    image={ColeccionXbox}
                    title={t("ColeccionXbox")}
                    date={t("ColeccionXboxDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02FuhemXHSPg6JJqbDp8hfUTK866ABVWcDZtVujLNhdM8hJTxr76zxEPpiRJgcnhHNl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Cj091b0MQ-N/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={AutoExploracion}
                    title={t("AutoExploracion")}
                    date={t("AutoExploracionDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02bGvjUj6NqGnyrtvVgHp7Vuq1o2SaeQzGNuShZBxQqSS9BEovSfVwXg2z98b943ewl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Cj08sXFsdm8/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
              </>
            )}
            {page2 === "unodos" && (
              <>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={CausaRosa}
                    title={t("CausaRosa")}
                    date={t("CausaRosaDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0voSJdcbRTYiKMAUyNrVS1gJN9wAgXV8uvD2mhNyxoAHbbLFw5qt9WjeyxaM1zTrXl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CjtZI8VvU8A/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={Koaj2022}
                    title={t("Koaj2022")}
                    date={t("Koaj2022DATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02yMXQFD7etkTzjP5kWpwE7LNk8d355qBWtVMsgep9rFJzMtotJX92zuLcDjFrgR7cl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Cji82XAshXd/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={VianneyXbox}
                    title={t("VianneyXbox")}
                    date={t("VianneyXboxDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0NvjCWrSY1ybW7pns6rGbjzCyNrszV9fUAD2Q2DPyeBTMAWypnsTfQeuNyfLohdqRl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CjRH5j3MNvr/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={PopeyeKOAJ}
                    title={t("PopeyeKOAJ")}
                    date={t("PopeyeKOAJDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0x5GDQco52ykd7PgKBgKUYVxYUJL9eKGEWQvJLdnuLfd3WH2Fjsgx7dW4Lym732efl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Cif_nHCvpXU/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={ArgentinaAmong}
                    title={t("ArgentinaAmong")}
                    date={t("ArgentinaAmongDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0WsvU6ignXFqB7QHd6EVob3ZhrV65W6BCfXYcqfNBKzrUrHkzGhcAgFNTssdu7Sd7l/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Cia2AwToL5V/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={KaratePeru}
                    title={t("KaratePeru")}
                    date={t("KaratePeruDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0gywiEEbS9p53AK1jj26coJUEVT6eeBjcUH5ZgREyKBjYDRhEYiuHew5Qtp3FyiqWl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CiTHoQ7pR51/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
              </>
            )}
            {page3 === "unotres" && (
              <>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={AnaEmilia}
                    title={t("AnaEmilia")}
                    date={t("AnaEmiliaDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02WzFnqFZYwLKp9au4cGHcjwCCuyXKyAVFLw8jLGTBynyzDGFqAL3pixbPBa4rHqbql/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CiQMiwYO5Si/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={Amarillo}
                    title={t("Amarillo")}
                    date={t("AmarilloDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0CvVfg5XwbAEXTHDqLnGZE1vYkkLv99tu4S5ZzVPabXyKvuKoTQKbECuKriFdBG2xl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CiI0dwWIcps/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={CampañaChile}
                    title={t("CampañaChile")}
                    date={t("CampañaChileDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02uTTdqgpBAsPsQbgka4jTgRpcqQo8L9TgjBvRBcsw26KW7TyTDuWPNytxsSj1TnK4l/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CiBGEcrsTSN/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-minions-activity-6978739835985391616-RcLY?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={DunkinMinions}
                    title={t("DunkinMinions")}
                    date={t("DunkinMinionsDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02p66sTt4iPYcwDVuNDeavt6wqKM87gwaWCNyZPSfk8RUBb5k7Mgm2rutewV8hXFq7l/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Ch78fQNNZjM/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-licensing-activity-6973340365248430080-Z8Mp?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                  <NoticiasCard
                    image={Minione}
                    title={t("Minione")}
                    date={t("MinioneDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0LhyCBucFU8htReKK5VP6ZnoxKPwdev8oWU4TCAEmyWUhzNDzb3G39iAhFZq9ArsYl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Ch2y5xbIdOJ/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={Narutomx}
                    title={t("Narutomx")}
                    date={t("NarutomxDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02DV3CHFYcp4Hqz2U83cVs6w4bccEEoZkX8LpVdhYydyjq6ssyvQ4xs18GXfkFbZpCl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/ChvEgZtpnko/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
              </>
            )}
            {page4 === "unocuatro" && (
              <>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={atunMinion}
                    title={t("atunMinion")}
                    date={t("atunMinionDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid06SNjJ6E8HWWWRjMzYh84Pds2QbBGXKnFqW3kEW5Nn65vaEyqRdA88fy1d6KEfSiKl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Chp66T3pdDc/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-minions-activity-6970414912565059585-L0mr?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                  <NoticiasCard
                    image={LolyColeccion}
                    title={t("LolyColeccion")}
                    date={t("LolyColeccionDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0QB2TNFiSSEtcBHBQyzUUYcezomTiTKWeCX1T4oYBc9uvVsjnW9bPoSoPnP8R7BeXl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/ChkPYUVOMlq/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-lolyintheskyxbt21-activity-6968715080104361984-Wz5M?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                  <NoticiasCard
                    image={SaborHer}
                    title={t("SaborHer")}
                    date={t("SaborHerDATE")}
                  >
                    <a href="" target="_blank" rel="noreferrer">
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/ChF4WdJljwa/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-hersheys-activity-6965444258740785152-y7Ae?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={BebidaJurasic}
                    title={t("BebidaJurasic")}
                    date={t("BebidaJurasicDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0sjkaose6zuRekeKrZczt4NiyYRfgR7rTapXvzBUxr9dQtXmBcRrxwpesVNTBuVmUl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/ChBQhWkhaFb/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-raptor-activity-6963916254524956672-kYIc?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                  <NoticiasCard
                    image={HarryWal}
                    title={t("HarryWal")}
                    date={t("HarryWalDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0TEGpDx1ZLtFkLRvm1v6P1nA337Jhj228Two3HvoJ73G7HPcNCaTWhFLukvvtXjMml/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Cg4_zWLPT5G/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-harrypotter-activity-6963212677556924416-REuw?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                  <NoticiasCard
                    image={Olive}
                    title={t("Olive")}
                    date={t("OliveDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02tuTk7YKJzqM8Rb8Hit4dPmHHViiJvHmVR9y4wpMXSoWxPZ8w1bKazYK1T6h5q9JRl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Cg0YjH7MAch/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-oliveoyl-activity-6961002306821656577-ZD09?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                </div>
              </>
            )}
            {page5 === "unocinco" && (
              <>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={CrayolaMayo}
                    title={t("CrayolaMayo")}
                    date={t("CrayolaMayoDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0mSfRXbCdJTFnznD9EGesSgf8j6CCtYU47MM4HNxkvYPBg7NjxefTrruFtEv3b9qcl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CgkZctwvdgV/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-crayola-activity-6958832365204905984-LQaO?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                  <NoticiasCard
                    image={Tycum}
                    title={t("Tycum")}
                    date={t("TycumDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02mi4V2wigmUmBDvmQZ6Qjw7bc9319t5x3JPAvARhMH5CCjEcq9BkfEaKLWQkQe4sZl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CgfCCLLOWk-/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoon-soytycoon-licensing-activity-6957757894230487040-ZRJR?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                  <NoticiasCard
                    image={Unwind}
                    title={t("Unwind")}
                    date={t("UnwindDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0299du4i9Rhmdr6m2LsHA2NwpYNYKq7AXRDnMabPnJBaHFBUfC8CPewRjj2ct2g8V1l/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CgcysEmMMGE/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-pinkpanther-activity-6957440739194671104-gw6r?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={HaloChamp}
                    title={t("HaloChamp")}
                    date={t("HaloChampDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02NDt9sqGfNfxNRmLUaSMVek3b8w7uVvRuUAAiJZnG1rso1jRF3R89STx4sr6icqFnl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CgVhDKxu1uI/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={JurasicLatam}
                    title={t("JurasicLatam")}
                    date={t("JurasicLatamDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02rEiBF8DZfBvXmqWDxQKuCn1J8AqXgCua2C7XSRKMvwdhfcHkg7jZkQaewiz7zGvbl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CgCkrT-O9vw/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={PumaFrida}
                    title={t("PumaFrida")}
                    date={t("PumaFridaDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02txX6qDSzzRqhTDL9THS5xsDhwyJSrsDhTEjKa6G3BAMN5RR1KmTptKcYMvjat7Sxl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Cf4yo7WNv9Z/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-hersheys-activity-6952378119513133057-J9zH?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                </div>
              </>
            )}
            {page6 === "unoseis" && (
              <>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={Fridacien}
                    title={t("Fridacien")}
                    date={t("FridacienDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02ucCNTuC9SUptvohM2XGxjhaDuaMvUhnfPeUP6p7LNjGbwmBNgVSRMUg3UZiTxcTXl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CfsAUlfuebs/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={AlpinaMinion}
                    title={t("AlpinaMinion")}
                    date={t("AlpinaMinionDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02XbkQF7rJewDmgDTxvWz1FPPPv7HVRe2Fs8UC8vDhmxNapsVVALuy1KdVMuitRCCVl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CfP8-jtJCIp/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={BleachPeru}
                    title={t("BleachPeru")}
                    date={t("BleachPeruDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0QxZnZXoMjEMjuQ88RXfDLcjKgf947gKnJGN5RJyJ2THJs5YoPnYp3vCTTuLxHuaWl/?mibextid=cr9u03               "
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CfAgM9KsEjz/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={JurasicLanza}
                    title={t("JurasicLanza")}
                    date={t("JurasicLanzaDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02c2wSBdteoemHEFKYznUdtT3wxE7J8JwibaraGoV7cfPW82cSYiVDgEVMdNmfpUu3l/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Ce7Wn56O3cV/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={FelicidadesCo}
                    title={t("FelicidadesCo")}
                    date={t("FelicidadesCoDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0yvBQcGKXkRRoZdFu393VmpA5ghSxqXXW5xPmVLSuzeb7bb43rDdKudc5ScX1sAZAl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CezoOlOp-V4/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-cocomelon-activity-6942529816524992512-1XV4?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                  <NoticiasCard
                    image={HelloCo}
                    title={t("HelloCo")}
                    date={t("HelloCoDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0aX2T4Ub94Pzn8yx1zrK3Gr8P2ijCoANknCgK2roWTiERvcKnfEvrLqCgS2NySbkvl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CeoRqO2OSN2/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
              </>
            )}
            {page7 === "unosiete" && (
              <>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={FelicidadesGhost}
                    title={t("FelicidadesGhost")}
                    date={t("FelicidadesGhostDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0iRvhc5z84vuZdNX9cgF89aauaGxPJEBbtHPRc9YHiajXsXxigqXwT3F2HE9b19q8l/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CejpNG0tJUt/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-ghostbusters-activity-6942126811824762880-5gOz?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                  <NoticiasCard
                    image={CerealHer}
                    title={t("CerealHer")}
                    date={t("CerealHerDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0vgtFfTJwkj9p7wi7ZGFLSfUNkEkWH8HcJoKKMb5SJBRnrUhGtUR9qhpUvwAVz2odl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CeCtsodvuz_/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={AnaEmiliaHBO}
                    title={t("AnaEmiliaHBO")}
                    date={t("AnaEmiliaHBODATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02VPyRoET6JV7BUQ5czw3qfXqU23prsK3HZ8VZhLA1QfR3b857JYziBGvg7n6iSNhHl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Cd6_T0Zrx90/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={CarreraHello}
                    title={t("CarreraHello")}
                    date={t("CarreraHelloDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02Dt5i41o4hTxkG3CoYWKH14xbUDbVKdB2yfgwf6Wu9fhgMGPCzJdNhpEVTow97yB9l/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Cdq-IhcOBt9/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={MagiaHarry}
                    title={t("MagiaHarry")}
                    date={t("MagiaHarryDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid06yHJdSpM1k77tNti5Rz7pQYnpJ8aQgQiU96gZvmuHDNiTdkqjSg444cGEXpNbhTGl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CdeqkZ5BXbT/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={HalloPara}
                    title={t("HalloPara")}
                    date={t("HalloParaDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02t1Ufu54b6LKEnE1uBA6umDmdcvCs8BKQqfRfbBK2vbSrxxdsufrxV3FRmmn6aEgHl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CdWSOe9O9Gu/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
              </>
            )}
            {page8 === "unoocho" && (
              <>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={BalleysMont}
                    title={t("BalleysMont")}
                    date={t("BalleysMontDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid033P1tgWjokTUnmCfDLBbYKAan7CUC1Z2j3HHX8Rew4AAyr2aM373gNqeX2wtreiE4l/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/Cc6nccBLHD_/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={ChupaShampoo}
                    title={t("ChupaShampoo")}
                    date={t("ChupaShampooDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid02bAGM8N48CgrA2iyzyLVAP6C29QqoyisBR1UsnGLPp3K9JyNy9F4uvqXVBHTFW1Mbl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CcZAhX-BqTN/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-chupachups-activity-6922954450013741056-H8EU?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                  <NoticiasCard
                    image={TodosPodemos}
                    title={t("TodosPodemos")}
                    date={t("TodosPodemosDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0V4Y18P1NV823pzDJmmzcvWv6QjGWJVrBFmjGuSusB3DkZWHTJjPa4TSSSjuAx4rNl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CcOtVq_MHxo/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    <a
                      href="https://www.linkedin.com/posts/tycoon-enterprises_tycoonenterprises-licenciasdemarcas-masterchef-activity-6919768243876319233-WNUK?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={LinkedIn} className="mas" />
                    </a>
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={SerieHalo}
                    title={t("SerieHalo")}
                    date={t("SerieHaloDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0gZvDStC7kSWHeJiG27YAE4d8cYcNVdLDF99vziv5MBdge6prXtaRSqx22VCy1s3Pl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CbiqF7iMi4W/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={deathNote}
                    title={t("deathNote")}
                    date={t("deathNoteDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0HyWKB58NFD2qQ63GGe2Tsjy1E8wBJWr8ATJqBF11Q39fPtxPXJSkmLgmZapqTAJcl/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CbYCT3SBvqn/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                  <NoticiasCard
                    image={VansCrayola}
                    title={t("VansCrayola")}
                    date={t("VansCrayolaDATE")}
                  >
                    <a
                      href="https://www.facebook.com/1826204927637891/posts/pfbid0NoQqJWWjf4GRmBAaz2wQsDfUfTmpLjvLPVYrcCWsxn3bFTJqoqv4FVb2TZCuai1ml/?mibextid=cr9u03"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Facebook} className="mas" />
                    </a>
                    <a
                      href="https://www.instagram.com/p/CbOHKaYJPba/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img alt="" src={Instagram} className="mas" />
                    </a>
                    {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                  </NoticiasCard>
                </div>
              </>
            )}
            {page9 === "unonueve" && (
              <div className="noticiasRow">
                <NoticiasCard
                  image={Vikings}
                  title={t("Vikings")}
                  date={t("VikingsDATE")}
                >
                  <a
                    href="https://www.facebook.com/1826204927637891/posts/pfbid037osu3BsjGnFHsu2TSMhcbSnnneKxAuRZA7oRWs6wADh7kmRvA9swjuK8RV9wYBAel/?mibextid=cr9u03"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img alt="" src={Facebook} className="mas" />
                  </a>
                  <a
                    href="https://www.instagram.com/p/CbIcAirvKK-/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img alt="" src={Instagram} className="mas" />
                  </a>
                  {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                </NoticiasCard>
                <NoticiasCard
                  image={DulzuraHello}
                  title={t("DulzuraHello")}
                  date={t("DulzuraHelloDATE")}
                >
                  <a
                    href="https://www.facebook.com/1826204927637891/posts/pfbid0eWDvTXN2R9YiHAs6qQ2fBicyjd9s2oHqD7C1EDfncyYQfDh3ttvaAHrU7SZ7qLBGl/?mibextid=cr9u03"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img alt="" src={Facebook} className="mas" />
                  </a>
                  <a
                    href="https://www.instagram.com/p/CZuyU7DlF8H/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img alt="" src={Instagram} className="mas" />
                  </a>
                  {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                </NoticiasCard>
                <NoticiasCard
                  image={HelloCafe}
                  title={t("HelloCafe")}
                  date={t("HelloCafeDATE")}
                >
                  <a
                    href="https://www.facebook.com/1826204927637891/posts/pfbid037yNzn4BDt4MMPCrvZTdpyjnr3H3h9F5VyHqAV3K2FYLEmCNBKi3Cn3QhXoQrRLBml/?mibextid=cr9u03"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img alt="" src={Facebook} className="mas" />
                  </a>
                  <a
                    href="https://www.instagram.com/p/CZkMUC1MFVV/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img alt="" src={Instagram} className="mas" />
                  </a>
                  {/* <a href='' target="_blank" rel="noreferrer">
                                        <img alt="" src={LinkedIn} className="mas"/>       
                                    </a> */}
                </NoticiasCard>
              </div>
            )}
            {page2 === "nada" && active === 1 ? (
              <div
                className="verMasButtonDiv"
                onClick={() => setPage2("unodos")}
              >
                <Button buttonText={t("seeMore")} />
              </div>
            ) : null}
            {page2 === "unodos" && active === 1 && page3 === "nada" ? (
              <div
                className="verMasButtonDiv"
                onClick={() => setPage3("unotres")}
              >
                <Button buttonText={t("seeMore")} />
              </div>
            ) : null}
            {page3 === "unotres" && active === 1 && page4 === "nada" ? (
              <div
                className="verMasButtonDiv"
                onClick={() => setPage4("unocuatro")}
              >
                <Button buttonText={t("seeMore")} />
              </div>
            ) : null}
            {page4 === "unocuatro" && active === 1 && page5 === "nada" ? (
              <div
                className="verMasButtonDiv"
                onClick={() => setPage5("unocinco")}
              >
                <Button buttonText={t("seeMore")} />
              </div>
            ) : null}
            {page5 === "unocinco" && active === 1 && page6 === "nada" ? (
              <div
                className="verMasButtonDiv"
                onClick={() => setPage6("unoseis")}
              >
                <Button buttonText={t("seeMore")} />
              </div>
            ) : null}
            {page6 === "unoseis" && active === 1 && page7 === "nada" ? (
              <div
                className="verMasButtonDiv"
                onClick={() => setPage7("unosiete")}
              >
                <Button buttonText={t("seeMore")} />
              </div>
            ) : null}
            {page7 === "unosiete" && active === 1 && page8 === "nada" ? (
              <div
                className="verMasButtonDiv"
                onClick={() => setPage8("unoocho")}
              >
                <Button buttonText={t("seeMore")} />
              </div>
            ) : null}
            {page8 === "unoocho" && active === 1 && page9 === "nada" ? (
              <div
                className="verMasButtonDiv"
                onClick={() => setPage9("unonueve")}
              >
                <Button buttonText={t("seeMore")} />
              </div>
            ) : null}
            {active === 2 && (
              <>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={Nuevo}
                    title={t("new")}
                    date={t("newDate")}
                  >
                    <Link to="/news/newintycoon">
                      <img alt="" src={Mas} className="mas" />
                    </Link>
                  </NoticiasCard>
                  <NoticiasCard
                    image={Cobra}
                    title={t("cobra")}
                    date={t("cobraDate")}
                  >
                    <Link to="/news/cobrakai">
                      <img alt="" src={Mas} className="mas" />
                    </Link>
                  </NoticiasCard>
                  <NoticiasCard
                    image={AmongLLega}
                    title={t("among")}
                    date={t("amongDate")}
                  >
                    <Link to="/news/amongus">
                      <img alt="" src={Mas} className="mas" />
                    </Link>
                  </NoticiasCard>
                </div>
                <div className="noticiasRowSingle">
                  <NoticiasCard
                    image={Warner}
                    title={t("Warner")}
                    date={t("WarnerDATE")}
                  >
                    <Link to="/news/warnerbros">
                      <img alt="" src={Mas} className="mas" />
                    </Link>
                  </NoticiasCard>
                  <NoticiasCard
                    image={CaminaKitty}
                    title={t("CaminaKitty")}
                    date={t("CaminaKittyDATE")}
                  >
                    <Link to="/news/caminaEntreNubes">
                      <img alt="" src={Mas} className="mas" />
                    </Link>
                  </NoticiasCard>
                </div>
              </>
            )}
            {active === 3 && (
              <>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={ColeccionPantera}
                    title={t("ColeccionPantera")}
                    date={t("ColeccionPanteraDATE")}
                  >
                    <Link to="/news/c&a">
                      <img alt="" src={Mas} className="mas" />
                    </Link>
                  </NoticiasCard>
                  <NoticiasCard
                    image={Crayola}
                    title={t("Crayola")}
                    date={t("CrayolaDATE")}
                  >
                    <Link to="/news/iconicaPromocion">
                      <img alt="" src={Mas} className="mas" />
                    </Link>
                  </NoticiasCard>
                  <NoticiasCard
                    image={MasterChef}
                    title={t("MasterChef")}
                    date={t("MasterChefDATE")}
                  >
                    <Link to="/news/vasconia">
                      <img alt="" src={Mas} className="mas" />
                    </Link>
                  </NoticiasCard>
                </div>
                <div className="noticiasRow">
                  <NoticiasCard
                    image={TycoonDia}
                    title={t("TycoonDia")}
                    date={t("TycoonDiaDATE")}
                  >
                    <Link to="/news/unDiaSinMujeres">
                      <img alt="" src={Mas} className="mas" />
                    </Link>
                  </NoticiasCard>
                  <NoticiasCard
                    image={Endemol}
                    title={t("Endemol")}
                    date={t("EndemolDATE")}
                  >
                    <Link to="/news/endemol">
                      <img alt="" src={Mas} className="mas" />
                    </Link>
                  </NoticiasCard>
                  <NoticiasCard
                    image={ColDistroller}
                    title={t("ColDistroller")}
                    date={t("ColDistrollerDATE")}
                  >
                    <Link to="/news/colombia">
                      <img alt="" src={Mas} className="mas" />
                    </Link>
                  </NoticiasCard>
                </div>
                <div className="noticiasRowSingle">
                  <NoticiasCard
                    image={Balleys}
                    title={t("Balleys")}
                    date={t("BalleysDATE")}
                  >
                    <Link to="/news/baileys">
                      <img alt="" src={Mas} className="mas" />
                    </Link>
                  </NoticiasCard>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default NewsNav;
