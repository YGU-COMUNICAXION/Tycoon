import React, { useState } from "react";
import Catalogo from "../../../CatalogoBrandsDesktop";
import styled from "styled-components";
import { Link } from "gatsby";
import { Nav } from "react-bootstrap";
import "./styles_marcas.css";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Acer from "../../images/brands_desktop/acer_desktop.png"
import Fifa from "../../images/brands_desktop/fifa_desktop.png"
import MasterChef from "../../images/brands_desktop/masterchef_desktop.png"
import Pepsico from "../../images/brands_desktop/pepsico_desktop.png"
import Among from "../../images/brands_desktop/among_desktop.png"
import Bluey from "../../images/brands_desktop/bluey_desktop.png"
import FallGuys from "../../images/brands_desktop/fall_guys_desktop.png"
import Kodak from "../../images/brands_desktop/kodak_desktop.png"
import Mgm from "../../images/brands_desktop/mgm_desktop.png"
import Microsoft from "../../images/brands_desktop/microsoft_desktop.png"
import Moonbug from "../../images/brands_desktop/moonbug_desktop.png"
import Pusheen from "../../images/brands_desktop/pusheen_desktop.png"
import Samri from "../../images/brands_desktop/samri_desktop.png"
import Sony from "../../images/brands_desktop/sony_desktop.png"
import Viz from "../../images/brands_desktop/viz_desktop.png"
import Wb from "../../images/brands_desktop/wb_desktop.png"
import Abg1 from "../../images/brands_desktop/abg1_desktop.png"
import Abg2 from "../../images/brands_desktop/abg2_desktop.png"
import Barcelona from "../../images/brands_desktop/barcelona_desktop.png"
import Paris from "../../images/brands_desktop/paris_desktop.png"
import ChupaChups from "../../images/brands_desktop/chupachups_desktop.png"
import Crayola from "../../images/brands_desktop/crayola_desktop.png"
import Hersheys from "../../images/brands_desktop/hersheys_desktop.png"
import Kellogs from "../../images/brands_desktop/kellogs_desktop.png"
import Playmobil from "../../images/brands_desktop/playmobil_desktop.png"
import AnaEmilia from "../../images/brands_desktop/ana_emilia_desktop.png"
import Bt21 from "../../images/brands_desktop/bt21_desktop.png"
import CareBears from "../../images/brands_desktop/care_bears_desktop.png"
import DinoRanch from "../../images/brands_desktop/dinoranch_desktop.png"
import Gears from "../../images/brands_desktop/gears_desktop.png"
import KingFeatures from "../../images/brands_desktop/king_features_desktop.png"
import FreeFire from "../../images/brands_desktop/free_fire_desktop.png"
import Activision from "../../images/brands_desktop/activision_desktop.png"
import AthenticGames from "../../images/brands_desktop/authentic_games_desktop.png"
import Hasbro from "../../images/brands_desktop/hasbro_desktop.png"
import Mundobita from "../../images/brands_desktop/mundobita_desktop.png"
import Pkxd from "../../images/brands_desktop/pkxd_desktop.png"
import Pubg from "../../images/brands_desktop/pubg_desktop.png"
import Apex from "../../images/brands_desktop/apex_desktop.png"
import Frida from "../../images/brands_desktop/frida_desktop.png"
import Head from "../../images/brands_desktop/head_desktop.png"
import Panam from "../../images/brands_desktop/panam_desktop.png"
import Warner from "../../images/brands_desktop/warner.png"
import Universal from "../../images/brands_desktop/universal_desktop.png"
import Distroller from "../../images/brands_desktop/distroller_desktop.png"

const StyledNavMarcas = styled.div`
  .nav {
    width: 100% !important;
    display: flex !important;
    margin: 42px auto 66px;
  }
  .wrapper__buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10px;
    margin: 0 auto;
    margin-top: 60px;
    max-width: 700px;
    button {
      border: 0.5px solid black;
      font-family: "B SemiBold";
      font-style: normal;
      font-size: 11px;
      height: 30px;
      letter-spacing: 0.02em;
      color: #051c2c;
      cursor: pointer;
      background-color: white;
      :active {
        background-color: #0093d7;
        color: white;
      }
      :hover {
        background-color: #0093d7;
        color: black;
      }
      :first-child {
        border-radius: 0px 0 0 4px;
      }
      :last-child {
        border-radius: 0 0 4px 0;
      }
    }
    .level_one {
      display: flex;
      .active {
        background: #0093d7;
        color: white;
      }
      button {
        width: 25%;
        :first-child {
          border-radius: 4px 0 0 0;
        }
        :last-child {
          border-radius: 0 4px 0 0;
        }

        :nth-child(3) {
          width: 55%;
        }
      }
    }
    .level_two {
      display: flex;
      .active {
        background: #0093d7;
        color: white;
      }
      button {
        width: 25%;
      }
    }
  }
  .order_image {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-bottom: 100px;
    .images_per_row {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: center;
      width: 332px;
      img {
        width: 156px;
        padding: 5px;
      }
    }
  }
  .select_category {
    padding: 0 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: "B SemiBold";
    margin: 42px auto 0px;
    font-size: 12px;
    max-width: 500px;
    hr {
      height: 20px;
      border: 0.5px solid black;
    }
    p{
      cursor: pointer;
    }
  }
  @media (min-width: 330px) {
    .wrapper__buttons {
      max-width: 330px;
    }
  }
  @media (min-width: 360px) {
    .wrapper__buttons {
      max-width: 500px;
    }
  }
  @media only screen and (min-width: 370px){
    .button {
      font-size: 12px;
    }
  }
  @media (min-width: 752px) {
    .wrapper__buttons{
      margin-top: 45px;
    }
    .select_category {
      margin-top: 45px auto 0px;
    }
    .order_image {
      margin-top: 45px;
      .images_per_row {
        width: 772px;
        img {
          width: 178px;
          padding: 5px;
        }
      }
    }
  }
  @media (min-width: 1200px) {
    .select_category {
      font-size: 15px;
    }
    .wrapper__buttons {
      display: flex;
      flex-direction: row;
      width: 100%;
      .level_one {
        display: flex;
        align-items: center;
        button {
          padding: 10px 30px 10px 30px;
          width: 20%;
          height: 50px;
          font-size: 24px;
          :nth-child(3) {
            width: 400px;
          }
          :first-child {
            border-radius: 4px 0 0 4px;
          }
          :last-child {
            border-radius: 0px;
          }
        }
      }
      .level_two {
        display: flex;
        align-items: center;
        button {
          padding: 10px 30px 10px 30px;
          width: 30%;
          height: 50px;
          font-size: 24px;
          :first-child {
            border-radius: 0px 0px 0px 0px;
          }
          :last-child {
            border-radius: 0px 4px 4px 0px;
          }
        }
      }
    }
    .order_image {
      .images_per_row {
        width: 1070px;
        img {
          width: 256px;
          padding: 5px;
        }
      }
    }
  }

  @media (min-width: 1400px) {
    .wrapper__buttons {
      margin-top: 100px
    }
    .select_category {
      font-size: 22px;
      max-width: 800px;
      margin-top: 100px;
    }
    .order_image {
      margin-top: 100px;
      .images_per_row {
        width: 1310px;
        img {
          width: 316px;
          padding: 5px;
        }
      }
    }
  }
  @media (min-width: 1600px) {
    .order_image {
      margin: 100px auto 200px;
      max-width: 1400px;
    }
  }
  @media (min-width: 2000px) {
    .wrapper__buttons {
      margin-top: 115px
    }
    .select_category {
      margin-top: 115px;
    }
    .order_image {
      margin-top: 115px;
    }
  }
`;

export default function NavMarcas() {
  const { t } = useTranslation("brands");

  const [show, setShow] = useState(4);
  const [info, setInfo] = useState("all");
  return (
    <StyledNavMarcas>
      <div className="wrapper__buttons">
        <div className="level_one">
          <button
            style={{ background: show === 4 ? "#0081C3" : "white" , color: show === 4 ? "white" : "black"}}
            onClick={() => setShow(4)}
          >
            {t("arg")}
          </button>
          <button
            style={{ background: show === 8 ? "#0093d7" : "white" , color: show === 8 ? "white" : "black" }}
            onClick={() => setShow(8)}
          >
            {t("bra")}
          </button>
          <button
            style={{ background: show === 7 ? "#0093d7" : "white" , color: show === 7 ? "white" : "black"}}
            onClick={() => setShow(7)}
          >
            {t("centro")}
          </button>
          <button
            style={{ background: show === 5 ? "#0093d7" : "white" , color: show === 5 ? "white" : "black" }}
            onClick={() => setShow(5)}
          >
            {t("chi")}
          </button>
        </div>
        <div className="level_two">
          <button
            style={{ background: show === 2 ? "#0093d7" : "white" , color: show === 2 ? "white" : "black"}}
            onClick={() => setShow(2)}
          >
            {t("col")}
          </button>
          <button
            style={{ background: show === 3 ? "#0093d7" : "white" , color: show === 3 ? "white" : "black"}}
            onClick={() => setShow(3)}
          >
            {t("ecu")}
          </button>
          <button
            style={{ background: show === 1 ? "#0093d7" : "white" , color: show === 1 ? "white" : "black"}}
            onClick={() => setShow(1)}
          >
            {t("mex")}
          </button>
          <button
            style={{ background: show === 6 ? "#0093d7" : "white" , color: show === 6 ? "white" : "black"}}
            onClick={() => setShow(6)}
          >
            {t("peru")}
          </button>
        </div>
      </div>
      <div className="select_category">
        <p
          style={{ color: info === "all" ? "#0081C3" : "black" }}
          onClick={() => setInfo("all")}
        >
          {t("All")}
        </p>
        <hr />
        <p
          style={{ color: info === "corporativas" ? "#0081C3" : "black" }}
          onClick={() => setInfo("corporativas")}
        >
          {t("corp")}
        </p>
        <hr />
        <p
          style={{ color: info === "entretenimiento" ? "#0081C3" : "black" }}
          onClick={() => setInfo("entretenimiento")}
        >
          {t("entretenimiento")}
        </p>
        <hr />
        <p
          style={{ color: info === "estilo" ? "#0081C3" : "black" }}
          onClick={() => setInfo("estilo")}
        >
          {t("estilo")}
        </p>
        <hr />
        <p
          style={{ color: info === "deportivas" ? "#0081C3" : "black" }}
          onClick={() => setInfo("deportivas")}
        >
          {t("depor")}
        </p>
      </div>

      <div className="order_image">
        {/* ARGENTINA SECTIONS */}

        {show === 4 && info === "corporativas" ? (
          <div className="images_per_row">
            {/* {Catalogo[0].argentina.corporativas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link>
              <img src={Acer} alt=""/>
            </Link>
            <Link>
              <img src={Fifa} alt=""/> 
            </Link>
            <Link>
              <img src={Hersheys} alt=""/>
            </Link>
            <Link>
              <img src={MasterChef} alt=""/>
            </Link>
            <Link>
              <img src={Pepsico} alt=""/>
            </Link>
          </div>
        ) : show === 4 && info === "entretenimiento" ? (
          <div className="images_per_row">
            {/* {Catalogo[0].argentina.entretenimiento.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link>
              <img src={Among} alt=""/>
            </Link>
            <Link>
              <img src={Bluey} alt=""/>
            </Link>
            <Link>
              <img src={Kodak} alt=""/>
            </Link>
            <Link>
              <img src={FallGuys} alt=""/> 
            </Link>
            <Link>
              <img src={Mgm} alt=""/>
            </Link>
            <Link>
              <img src={Microsoft} alt=""/>
            </Link>
            <Link>
              <img src={Moonbug} alt=""/>
            </Link>
            <Link>
              <img src={Pusheen} alt=""/>
            </Link>
            <Link>
              <img src={Samri} alt=""/>
            </Link>
            <Link>
              <img src={Sony} alt=""/>
            </Link>
            <Link>
              <img src={Viz} alt=""/>
            </Link>
            <Link>
              <img src={Wb} alt=""/>
            </Link>
          </div>
        ) : show === 4 && info === "estilo" ? (
          <div className="images_per_row">
            {/* {Catalogo[0].argentina.estilo.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link>
              <img src={Abg1} alt=""/>
            </Link>
            <Link>
              <img src={Abg2} alt=""/>
            </Link>
          </div>
        ) : show === 4 && info === "deportivas" ? (
          <div className="images_per_row">
            {/* {Catalogo[0].argentina.deportivas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link>
              <img src={Fifa} alt=""/> 
            </Link>
            <Link>
              <img src={Barcelona} alt=""/>
            </Link>
            <Link>
              <img src={Paris} alt=""/>
            </Link>
          </div>
        ) : show === 4 && info === "all" ? (
          <div className="images_per_row">
            {/* {Catalogo[0].argentina.all.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="/">
              <img src={Abg1} alt=""/>
            </Link>
            <Link>
              <img src={Abg2} alt=""/>
            </Link>
            <Link>
              <img src={Acer} alt=""/>
            </Link>
            <Link>
              <img src={Among} alt=""/>
            </Link>
            <Link>
              <img src={Bluey} alt=""/>
            </Link>
            <Link>
              <img src={FallGuys} alt=""/>
            </Link>
            <Link>
              <img src={Fifa} alt=""/> 
            </Link>
            <Link>
              <img src={Barcelona} alt=""/>
            </Link>
            <Link>
              <img src={Hersheys} alt=""/>
            </Link>
            <Link>
              <img src={Kodak} alt=""/>
            </Link>
            <Link>
              <img src={MasterChef} alt=""/>
            </Link>
            <Link>
              <img src={Mgm} alt=""/>
            </Link>
            <Link>
              <img src={Microsoft} alt=""/>
            </Link>
            <Link>
              <img src={Moonbug} alt=""/>
            </Link>
            <Link>
              <img src={Paris} alt=""/>
            </Link>
            <Link>
              <img src={Pepsico} alt=""/>
            </Link>
            <Link>
              <img src={Pusheen} alt=""/>
            </Link>
            <Link>
              <img src={Samri} alt=""/>
            </Link>
            <Link>
              <img src={Sony} alt=""/>
            </Link>
            <Link>
              <img src={Viz} alt=""/>
            </Link>
            <Link>
              <img src={Wb} alt=""/>
            </Link>
          </div>
        ) : null}

        {/* MEXICO SECTIONS */}

        {show === 1 && info === "corporativas" ? (
          <div className="images_per_row">
            {/* {Catalogo[1].mexico.corporativas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Acer} alt=""/>
            </Link>
            <Link to="">
              <img src={ChupaChups} alt=""/>
            </Link>
            <Link to="">
              <img src={Crayola} alt=""/>
            </Link>
            <Link to="">
              <img src={Fifa} alt=""/>
            </Link>
            <Link to="">
              <img src={Hersheys} alt=""/>
            </Link>
            <Link to="">
              <img src={Kellogs} alt=""/>
            </Link>
            <Link to="">
              <img src={MasterChef} alt=""/>
            </Link>
            <Link to="">
              <img src={Pepsico} alt=""/>
            </Link>
            <Link to="">
              <img src={Playmobil} alt=""/>
            </Link>
          </div>
        ) : show === 1 && info === "entretenimiento" ? (
          <div className="images_per_row">
            {/* {Catalogo[1].mexico.entretenimiento.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Among} alt=""/>
            </Link>
            <Link to="">
              <img src={AnaEmilia} alt=""/>
            </Link>
            <Link to="">
              <img src={Bt21} alt=""/>
            </Link>
            <Link to="">
              <img src={CareBears} alt=""/>
            </Link>
            <Link to="">
              <img src={DinoRanch} alt=""/>
            </Link>
            <Link to="">
              <img src={FallGuys} alt=""/>
            </Link>
            <Link to="">
              <img src={FreeFire} alt=""/>
            </Link>
            <Link to="">
              <img src={Gears} alt=""/>
            </Link>
            <Link to="">
              <img src={KingFeatures} alt=""/>
            </Link>
            <Link to="">
              <img src={Kodak} alt=""/>
            </Link>
            <Link to="">
              <img src={Mgm} alt=""/>
            </Link>
            <Link to="">
              <img src={Microsoft} alt=""/>
            </Link>
            <Link to="">
              <img src={Moonbug} alt=""/>
            </Link>
            <Link to="">
              <img src={Samri} alt=""/>
            </Link>
            <Link to="">
              <img src={Sony} alt=""/>
            </Link>
            <Link to="">
              <img src={Viz} alt=""/>
            </Link>
          </div>
        ) : show === 1 && info === "estilo" ? (
          <div className="images_per_row">
            {/* {Catalogo[1].mexico.estilo.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Abg1} alt=""/>
            </Link>
            <Link to="">
              <img src={Abg2} alt=""/>
            </Link>
            <Link to="">
              <img src={Apex} alt=""/>
            </Link>
            <Link to="">
              <img src={Frida} alt=""/>
            </Link>
            <Link to="">
              <img src={Head} alt=""/>
            </Link>
            <Link to="">
              <img src={Panam} alt=""/>
            </Link>
          </div>
        ) : show === 1 && info === "deportivas" ? (
          <div className="images_per_row">
            {/* {Catalogo[1].mexico.deportivas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Fifa} alt=""/>
            </Link>  
            <Link to="">
              <img src={Barcelona} alt=""/>
            </Link>
            <Link to="">
              <img src={Head} alt=""/>
            </Link>
            <Link to="">
              <img src={Paris} alt=""/>
            </Link>
          </div>
        ) : show === 1 && info === "all" ? (
          <div className="images_per_row">
            {/* {Catalogo[1].mexico.all.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Abg1} alt=""/>
            </Link>
            <Link to="">
              <img src={Abg2} alt=""/>
            </Link>
            <Link to="">
              <img src={Acer} alt=""/>
            </Link>
            <Link to="">
              <img src={Among} alt=""/>
            </Link>
            <Link to="">
              <img src={AnaEmilia} alt=""/>
            </Link>
            <Link to="">
              <img src={Apex} alt=""/>
            </Link>
            <Link to="">
              <img src={Bt21} alt=""/>
            </Link>
            <Link to="">
              <img src={CareBears} alt=""/>
            </Link>
            <Link to="">
              <img src={ChupaChups} alt=""/>
            </Link>
            <Link to="">
              <img src={Crayola} alt=""/>
            </Link>
            <Link to="">
              <img src={DinoRanch} alt=""/>
            </Link>
            <Link to="">
              <img src={FallGuys} alt=""/>
            </Link>
            <Link to="">
              <img src={Barcelona} alt=""/>
            </Link>
            <Link to="">
              <img src={Fifa} alt=""/>
            </Link>
            <Link to="">
              <img src={FreeFire} alt=""/>
            </Link>
            <Link to="">
              <img src={Frida} alt=""/>
            </Link>
            <Link to="">
              <img src={Gears} alt=""/>
            </Link>
            <Link to="">
              <img src={Head} alt=""/>
            </Link>
            <Link to="">
              <img src={Hersheys} alt=""/>
            </Link>
            <Link to="">
              <img src={Kellogs} alt=""/>
            </Link>
            <Link to="">
              <img src={KingFeatures} alt=""/>
            </Link>
            <Link to="">
              <img src={Kellogs} alt=""/>
            </Link>
            <Link to="">
              <img src={MasterChef} alt=""/>
            </Link>
            <Link to="">
              <img src={Pepsico} alt=""/>
            </Link>
            <Link to="">
              <img src={Mgm} alt=""/>
            </Link>
            <Link to="">
              <img src={Microsoft} alt=""/>
            </Link>
            <Link to="">
              <img src={Moonbug} alt=""/>
            </Link>
            <Link to="">
              <img src={Panam} alt=""/>
            </Link>
            <Link to="">
              <img src={Playmobil} alt=""/>
            </Link>
            <Link to="">
              <img src={Samri} alt=""/>
            </Link>
            <Link to="">
              <img src={Sony} alt=""/>
            </Link>
            <Link to="">
              <img src={Viz} alt=""/>
            </Link>
          </div>
        ) : null}

        {/* BRASIL SECTIONS */}

        {show === 8 && info === "corporativas" ? (
          <div className="images_per_row">
            {/* {Catalogo[2].brasil.corporativas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Acer} alt=""/>
            </Link>
            <Link to="">
              <img src={Fifa} alt=""/>
            </Link>
            <Link to="">
              <img src={Hersheys} alt=""/>
            </Link>
            <Link to="">
              <img src={Pepsico} alt=""/>
            </Link>
          </div>
        ) : show === 8 && info === "entretenimiento" ? (
          <div className="images_per_row">
            {/* {Catalogo[2].brasil.entretenimiento.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Activision} alt=""/>
            </Link>
            <Link to="">
              <img src={Among} alt=""/>
            </Link>
            <Link to="">
              <img src={AthenticGames} alt=""/>
            </Link>
            <Link to="">
              <img src={DinoRanch} alt=""/>
            </Link>
            <Link to="">
              <img src={FallGuys} alt=""/>
            </Link>
            <Link to="">
              <img src={Hasbro} alt=""/>
            </Link>
            <Link to="">
              <img src={Kodak} alt=""/>
            </Link>
            <Link to="">
              <img src={Mgm} alt=""/>
            </Link>
            <Link to="">
              <img src={Mundobita} alt=""/>
            </Link>
            <Link to="">
              <img src={Pkxd} alt=""/>
            </Link>
            <Link to="">
              <img src={Pubg} alt=""/>
            </Link>
            <Link to="">
              <img src={Pusheen} alt=""/>
            </Link>
          </div>
        ) : show === 8 && info === "estilo" ? (
          <div className="images_per_row">
            {/* {Catalogo[2].brasil.estilo.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Abg1} alt=""/>
            </Link>
            <Link to="">
              <img src={Abg2} alt=""/>
            </Link>
          </div>
        ) : show === 8 && info === "deportivas" ? (
          <div className="images_per_row">
            {/* {Catalogo[2].brasil.deportivas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Fifa} alt=""/>
            </Link>
          </div>
        ) : show === 8 && info === "all" ? (
          <div className="images_per_row">
            {/* {Catalogo[2].brasil.all.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Abg1} alt=""/>
            </Link>
            <Link to="">
              <img src={Abg2} alt=""/>
            </Link>
            <Link to="">
              <img src={Acer} alt=""/>
            </Link>
            <Link to="">
              <img src={Activision} alt=""/>
            </Link>
            <Link to="">
              <img src={Among} alt=""/>
            </Link>
            <Link to="">
              <img src={AthenticGames} alt=""/>
            </Link>
            <Link to="">
              <img src={DinoRanch} alt=""/>
            </Link>
            <Link to="">
              <img src={FallGuys} alt=""/>
            </Link>
            <Link to="">
              <img src={Fifa} alt=""/>
            </Link>
            <Link to="">
              <img src={Hasbro} alt=""/>
            </Link>
            <Link to="">
              <img src={Hersheys} alt=""/>
            </Link>
            <Link to="">
              <img src={Kodak} alt=""/>
            </Link>
            <Link to="">
              <img src={Mgm} alt=""/>
            </Link>
            <Link to="">
              <img src={Mundobita} alt=""/>
            </Link>
            <Link to="">
              <img src={Pepsico} alt=""/>
            </Link>
            <Link to="">
              <img src={Pkxd} alt=""/>
            </Link>
            <Link to="">
              <img src={Pubg} alt=""/>
            </Link>
            <Link to="">
              <img src={Pusheen} alt=""/>
            </Link>
          </div>
        ) : null}

        {/* CHILE SECTIONS */}

        {show === 5 && info === "corporativas" ? (
          <div className="images_per_row">
            {/* {Catalogo[3].chile.corporativas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Acer} alt=""/>
            </Link>
            <Link to="">
              <img src={Fifa} alt=""/>
            </Link>
            <Link to="">
              <img src={Hersheys} alt=""/>
            </Link>
            <Link to="">
              <img src={MasterChef} alt=""/>
            </Link>
            <Link to="">
              <img src={Pepsico} alt=""/>
            </Link>
            <Link to="">
              <img src={Playmobil} alt=""/>
            </Link>
          </div>
        ) : show === 5 && info === "entretenimiento" ? (
          <div className="images_per_row">
            {/* {Catalogo[3].chile.entretenimiento.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Among} alt=""/>
            </Link>
            <Link to="">
              <img src={Bluey} alt=""/>
            </Link>
            <Link to="">
              <img src={Bt21} alt=""/>
            </Link>
            <Link to="">
              <img src={FallGuys} alt=""/>
            </Link>
            <Link to="">
              <img src={Kodak} alt=""/>
            </Link>
            <Link to="">
              <img src={Mgm} alt=""/>
            </Link>
            <Link to="">
              <img src={Microsoft} alt=""/>
            </Link>
            <Link to="">
              <img src={Moonbug} alt=""/>
            </Link>
            <Link to="">
              <img src={Pusheen} alt=""/>
            </Link>
            <Link to="">
              <img src={Samri} alt=""/>
            </Link>
            <Link to="">
              <img src={Sony} alt=""/>
            </Link>
            <Link to="">
              <img src={Universal} alt=""/>
            </Link>
            <Link to="">
              <img src={Viz} alt=""/>
            </Link>
            <Link to="">
              <img src={Wb} alt=""/>
            </Link>
          </div>
        ) : show === 5 && info === "estilo" ? (
          <div className="images_per_row">
            {/* {Catalogo[3].chile.estilo.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Abg1} alt=""/>
            </Link>
            <Link to="">
              <img src={Abg2} alt=""/>
            </Link>
          </div>
        ) : show === 5 && info === "deportivas" ? (
          <div className="images_per_row">
            {/* {Catalogo[3].chile.deportivas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Fifa} alt=""/>
            </Link>
            <Link to="">
              <img src={Barcelona} alt=""/>
            </Link>
            <Link to="">
              <img src={Paris} alt=""/>
            </Link>
          </div>
        ) : show === 5 && info === "all" ? (
          <div className="images_per_row">
            {/* {Catalogo[3].chile.all.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Abg1} alt=""/>
            </Link>
            <Link to="">
              <img src={Abg2} alt=""/>
            </Link>
            <Link to="">
              <img src={Acer} alt=""/>
            </Link>
            <Link to="">
              <img src={Among} alt=""/>
            </Link>
            <Link to="">
              <img src={Bluey} alt=""/>
            </Link>
            <Link to="">
              <img src={Bt21} alt=""/>
            </Link>
            <Link to="">
              <img src={FallGuys} alt=""/>
            </Link>
            <Link to="">
              <img src={Barcelona} alt=""/>
            </Link>
            <Link to="">
              <img src={Fifa} alt=""/>
            </Link>
            <Link to="">
              <img src={Hersheys} alt=""/>
            </Link>
            <Link to="">
              <img src={Kodak} alt=""/>
            </Link>
            <Link to="">
              <img src={MasterChef} alt=""/>
            </Link>
            <Link to="">
              <img src={Mgm} alt=""/>
            </Link>
            <Link to="">
              <img src={Microsoft} alt=""/>
            </Link>
            <Link to="">
              <img src={Moonbug} alt=""/>
            </Link>
            <Link to="">
              <img src={Paris} alt=""/>
            </Link>
            <Link to="">
              <img src={Pepsico} alt=""/>
            </Link>
            <Link to="">
              <img src={Playmobil} alt=""/>
            </Link>
            <Link to="">
              <img src={Pusheen} alt=""/>
            </Link>
            <Link to="">
              <img src={Samri} alt=""/>
            </Link>
            <Link to="">
              <img src={Sony} alt=""/>
            </Link>
            <Link to="">
              <img src={Universal} alt=""/>
            </Link>
            <Link to="">
              <img src={Viz} alt=""/>
            </Link>
            <Link to="">
              <img src={Wb} alt=""/>
            </Link>
            <Link to="">
              <img src={Pusheen} alt=""/>
            </Link>
          </div>
        ) : null}

        {/* PERÚ SECTIONS */}

        {show === 6 && info === "corporativas" ? (
          <div className="images_per_row">
            {/* {Catalogo[4].peru.corporativas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}

            <Link to="">
              <img src={Acer} alt=""/>
            </Link>
            <Link to="">
              <img src={Fifa} alt=""/>
            </Link>
            <Link to="">
              <img src={Hersheys} alt=""/>
            </Link>
            <Link to="">
              <img src={MasterChef} alt=""/>
            </Link>
            <Link to="">
              <img src={Pepsico} alt=""/>
            </Link>
            <Link to="">
              <img src={Playmobil} alt=""/>
            </Link>
          </div>
        ) : show === 6 && info === "entretenimiento" ? (
          <div className="images_per_row">
            {/* {Catalogo[4].peru.entretenimiento.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Among} alt=""/>
            </Link>
            <Link to="">
              <img src={Bluey} alt=""/>
            </Link>
            <Link to="">
              <img src={Bt21} alt=""/>
            </Link>
            <Link to="">
              <img src={CareBears} alt=""/>
            </Link>
            <Link to="">
              <img src={Distroller} alt=""/>
            </Link>
            <Link to="">
              <img src={FallGuys} alt=""/>
            </Link>
            <Link to="">
              <img src={Kodak} alt=""/>
            </Link>
            <Link to="">
              <img src={Mgm} alt=""/>
            </Link>
            <Link to="">
              <img src={Microsoft} alt=""/>
            </Link>
            <Link to="">
              <img src={Moonbug} alt=""/>
            </Link>
            <Link to="">
              <img src={Pusheen} alt=""/>
            </Link>
            <Link to="">
              <img src={Sony} alt=""/>
            </Link>
            <Link to="">
              <img src={Viz} alt=""/>
            </Link>
            <Link to="">
              <img src={Universal} alt=""/>
            </Link>
          </div>
        ) : show === 6 && info === "estilo" ? (
          <div className="images_per_row">
            {/* {Catalogo[4].peru.estilo.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Abg1} alt=""/>
            </Link>
            <Link to="">
              <img src={Abg2} alt=""/>
            </Link>
          </div>
        ) : show === 6 && info === "deportivas" ? (
          <div className="images_per_row">
            {/* {Catalogo[4].peru.deportivas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Fifa} alt=""/>
            </Link>
            <Link to="">
              <img src={Barcelona} alt=""/>
            </Link>
            <Link to="">
              <img src={Paris} alt=""/>
            </Link>
          </div>
        ) : show === 6 && info === "all" ? (
          <div className="images_per_row">
            {/* {Catalogo[4].peru.all.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Abg1} alt=""/>
            </Link>
            <Link to="">
              <img src={Abg2} alt=""/>
            </Link>
            <Link to="">
              <img src={Acer} alt=""/>
            </Link>
            <Link to="">
              <img src={Among} alt=""/>
            </Link>
            <Link to="">
              <img src={Bluey} alt=""/>
            </Link>
            <Link to="">
              <img src={Bt21} alt=""/>
            </Link>
            <Link to="">
              <img src={FallGuys} alt=""/>
            </Link>
            <Link to="">
              <img src={Barcelona} alt=""/>
            </Link>
            <Link to="">
              <img src={Fifa} alt=""/>
            </Link>
            <Link to="">
              <img src={Hersheys} alt=""/>
            </Link>
            <Link to="">
              <img src={Kodak} alt=""/>
            </Link>
            <Link to="">
              <img src={MasterChef} alt=""/>
            </Link>
            <Link to="">
              <img src={Mgm} alt=""/>
            </Link>
            <Link to="">
              <img src={Microsoft} alt=""/>
            </Link>
            <Link to="">
              <img src={Moonbug} alt=""/>
            </Link>
            <Link to="">
              <img src={Paris} alt=""/>
            </Link>
            <Link to="">
              <img src={Pepsico} alt=""/>
            </Link>
            <Link to="">
              <img src={Playmobil} alt=""/>
            </Link>
            <Link to="">
              <img src={Pusheen} alt=""/>
            </Link>
            <Link to="">
              <img src={Sony} alt=""/>
            </Link>
            <Link to="">
              <img src={Universal} alt=""/>
            </Link>
            <Link to="">
              <img src={Viz} alt=""/>
            </Link>
          </div>
        ) : null}

        {/* Centroamerica SECTIONS */}

        {show === 7 && info === "corporativas" ? (
          <div className="images_per_row">
            {/* {Catalogo[5].centroAmerica.corporativas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Acer} alt=""/>
            </Link>
            <Link to="">
              <img src={ChupaChups} alt=""/>
            </Link>
            <Link to="">
              <img src={Crayola} alt=""/>
            </Link>
            <Link to="">
              <img src={Fifa} alt=""/>
            </Link>
            <Link to="">
              <img src={Hersheys} alt=""/>
            </Link>
            <Link to="">
              <img src={MasterChef} alt=""/>
            </Link>
            <Link to="">
              <img src={Pepsico} alt=""/>
            </Link>
            <Link to="">
              <img src={Playmobil} alt=""/>
            </Link>
          </div>
        ) : show === 7 && info === "entretenimiento" ? (
          <div className="images_per_row">
            {/* {Catalogo[5].centroAmerica.entretenimiento.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Among} alt=""/>
            </Link>
            <Link to="">
              <img src={Bluey} alt=""/>
            </Link>
            <Link to="">
              <img src={CareBears} alt=""/>
            </Link>
            <Link to="">
              <img src={Distroller} alt=""/>
            </Link>
            <Link to="">
              <img src={DinoRanch} alt=""/>
            </Link>
            <Link to="">
              <img src={FallGuys} alt=""/>
            </Link>
            <Link to="">
              <img src={KingFeatures} alt=""/>
            </Link>
            <Link to="">
              <img src={Kodak} alt=""/>
            </Link>
            <Link to="">
              <img src={Mgm} alt=""/>
            </Link>
            <Link to="">
              <img src={Microsoft} alt=""/>
            </Link>
            <Link to="">
              <img src={Moonbug} alt=""/>
            </Link>
            <Link to="">
              <img src={Pusheen} alt=""/>
            </Link>
            <Link to="">
              <img src={Samri} alt=""/>
            </Link>
            <Link to="">
              <img src={Sony} alt=""/>
            </Link>
            <Link to="">
              <img src={Universal} alt=""/>
            </Link>
            <Link to="">
              <img src={Viz} alt=""/>
            </Link>
          </div>
        ) : show === 7 && info === "estilo" ? (
          <div className="images_per_row">
            {/* {Catalogo[5].centroAmerica.estilo.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Abg1} alt=""/>
            </Link>
            <Link to="">
              <img src={Abg2} alt=""/>
            </Link>
          </div>
        ) : show === 7 && info === "deportivas" ? (
          <div className="images_per_row">
            {/* {Catalogo[5].centroAmerica.deportivas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Fifa} alt=""/>
            </Link>
            <Link to="">
              <img src={Barcelona} alt=""/>
            </Link>
            <Link to="">
              <img src={Paris} alt=""/>
            </Link>
          </div>
        ) : show === 7 && info === "all" ? (
          <div className="images_per_row">
            {/* {Catalogo[5].centroAmerica.all.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Abg1} alt=""/>
            </Link>
            <Link to="">
              <img src={Abg2} alt=""/>
            </Link>
            <Link to="">
              <img src={Acer} alt=""/>
            </Link>
            <Link to="">
              <img src={Among} alt=""/>
            </Link>
            <Link to="">
              <img src={Bluey} alt=""/>
            </Link>
            <Link to="">
              <img src={CareBears} alt=""/>
            </Link>
            <Link to="">
              <img src={ChupaChups} alt=""/>
            </Link>
            <Link to="">
              <img src={Crayola} alt=""/>
            </Link>
            <Link to="">
              <img src={DinoRanch} alt=""/>
            </Link>
            <Link to="">
              <img src={Distroller} alt=""/>
            </Link>
            <Link to="">
              <img src={FallGuys} alt=""/>
            </Link>
            <Link to="">
              <img src={Barcelona} alt=""/>
            </Link>
            <Link to="">
              <img src={Fifa} alt=""/>
            </Link>
            <Link to="">
              <img src={Hersheys} alt=""/>
            </Link>
            <Link to="">
              <img src={KingFeatures} alt=""/>
            </Link>
            <Link to="">
              <img src={Kodak} alt=""/>
            </Link>
            <Link to="">
              <img src={MasterChef} alt=""/>
            </Link>
            <Link to="">
              <img src={Mgm} alt=""/>
            </Link>
            <Link to="">
              <img src={Microsoft} alt=""/>
            </Link>
            <Link to="">
              <img src={Moonbug} alt=""/>
            </Link>
            <Link to="">
              <img src={Paris} alt=""/>
            </Link>
            <Link to="">
              <img src={Pepsico} alt=""/>
            </Link>
            <Link to="">
              <img src={Playmobil} alt=""/>
            </Link>
            <Link to="">
              <img src={Pusheen} alt=""/>
            </Link>
            <Link to="">
              <img src={Samri} alt=""/>
            </Link>
            <Link to="">
              <img src={Sony} alt=""/>
            </Link>
            <Link to="">
              <img src={Universal} alt=""/>
            </Link>
            <Link to="">
              <img src={Viz} alt=""/>
            </Link>
          </div>
        ) : null}
        {/* COLOMBIA SECTIONS */}

        {show === 2 && info === "corporativas" ? (
          <div className="images_per_row">
            {/* {Catalogo[6].colombia.corporativas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Acer} alt=""/>
            </Link>
            <Link to="">
              <img src={ChupaChups} alt=""/>
            </Link>
            <Link to="">
              <img src={Crayola} alt=""/>
            </Link>
            <Link to="">
              <img src={Fifa} alt=""/>
            </Link>
            <Link to="">
              <img src={Hersheys} alt=""/>
            </Link>
            <Link to="">
              <img src={MasterChef} alt=""/>
            </Link>
            <Link to="">
              <img src={Pepsico} alt=""/>
            </Link>
            <Link to="">
              <img src={Playmobil} alt=""/>
            </Link>
          </div>
        ) : show === 2 && info === "entretenimiento" ? (
          <div className="images_per_row">
            {/* {Catalogo[6].colombia.entretenimiento.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Among} alt=""/>
            </Link>
            <Link to="">
              <img src={Bluey} alt=""/>
            </Link>
            <Link to="">
              <img src={CareBears} alt=""/>
            </Link>
            <Link to="">
              <img src={Distroller} alt=""/>
            </Link>
            <Link to="">
              <img src={FallGuys} alt=""/>
            </Link>
            <Link to="">
              <img src={FreeFire} alt=""/>
            </Link>
            <Link to="">
              <img src={KingFeatures} alt=""/>
            </Link>
            <Link to="">
              <img src={Kodak} alt=""/>
            </Link>
            <Link to="">
              <img src={Mgm} alt=""/>
            </Link>
            <Link to="">
              <img src={Microsoft} alt=""/>
            </Link>
            <Link to="">
              <img src={Moonbug} alt=""/>
            </Link>
            <Link to="">
              <img src={Pusheen} alt=""/>
            </Link>
            <Link to="">
              <img src={Samri} alt=""/>
            </Link>
            <Link to="">
              <img src={Sony} alt=""/>
            </Link>
            <Link to="">
              <img src={Universal} alt=""/>
            </Link>
            <Link to="">
              <img src={Viz} alt=""/>
            </Link>
          </div>
        ) : show === 2 && info === "estilo" ? (
          <div className="images_per_row">
            {/* {Catalogo[6].colombia.estilo.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Abg1} alt=""/>
            </Link>
            <Link to="">
              <img src={Abg2} alt=""/>
            </Link>
          </div>
        ) : show === 2 && info === "deportivas" ? (
          <div className="images_per_row">
            {/* {Catalogo[6].colombia.deportivas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Fifa} alt=""/>
            </Link>
            <Link to="">
              <img src={Barcelona} alt=""/>
            </Link>
            <Link to="">
              <img src={Paris} alt=""/>
            </Link>
          </div>
        ) : show === 2 && info === "all" ? (
          <div className="images_per_row">
            {/* {Catalogo[6].colombia.all.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Abg1} alt=""/>
            </Link>
            <Link to="">
              <img src={Abg2} alt=""/>
            </Link>
            <Link to="">
              <img src={Acer} alt=""/>
            </Link>
            <Link to="">
              <img src={Among} alt=""/>
            </Link>
            <Link to="">
              <img src={Bluey} alt=""/>
            </Link>
            <Link to="">
              <img src={CareBears} alt=""/>
            </Link>
            <Link to="">
              <img src={ChupaChups} alt=""/>
            </Link>
            <Link to="">
              <img src={Crayola} alt=""/>
            </Link>
            <Link to="">
              <img src={Distroller} alt=""/>
            </Link>
            <Link to="">
              <img src={FallGuys} alt=""/>
            </Link>
            <Link to="">
              <img src={Barcelona} alt=""/>
            </Link>
            <Link to="">
              <img src={Fifa} alt=""/>
            </Link>
            <Link to="">
              <img src={FreeFire}/>
            </Link>
            <Link to="">
              <img src={Hersheys} alt=""/>
            </Link>
            <Link to="">
              <img src={KingFeatures} alt=""/>
            </Link>
            <Link to="">
              <img src={Kodak} alt=""/>
            </Link>
            <Link to="">
              <img src={MasterChef} alt=""/>
            </Link>
            <Link to="">
              <img src={Mgm} alt=""/>
            </Link>
            <Link to="">
              <img src={Microsoft} alt=""/>
            </Link>
            <Link to="">
              <img src={Moonbug} alt=""/>
            </Link>
            <Link to="">
              <img src={Paris} alt=""/>
            </Link>
            <Link to="">
              <img src={Pepsico} alt=""/>
            </Link>
            <Link to="">
              <img src={Playmobil} alt=""/>
            </Link>
            <Link to="">
              <img src={Pusheen} alt=""/>
            </Link>
            <Link to="">
              <img src={Samri} alt=""/>
            </Link>
            <Link to="">
              <img src={Sony} alt=""/>
            </Link>
            <Link to="">
              <img src={Universal} alt=""/>
            </Link>
            <Link to="">
              <img src={Viz} alt=""/>
            </Link>
          </div>
        ) : null}

        {/* ECUADOR SECTIONS */}

        {show === 3 && info === "corporativas" ? (
          <div className="images_per_row">
            {/* {Catalogo[7].ecuador.corporativas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Acer} alt=""/>
            </Link>
            <Link to="">
              <img src={Crayola} alt=""/>
            </Link>
            <Link to="">
              <img src={Fifa} alt=""/>
            </Link>
            <Link to="">
              <img src={Hersheys} alt=""/>
            </Link>
            <Link to="">
              <img src={MasterChef} alt=""/>
            </Link>
            <Link to="">
              <img src={Pepsico} alt=""/>
            </Link>
            <Link to="">
              <img src={Playmobil} alt=""/>
            </Link>
          </div>
        ) : show === 3 && info === "entretenimiento" ? (
          <div className="images_per_row">
            {/* {Catalogo[7].ecuador.entretenimiento.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Among} alt=""/>
            </Link>
            <Link to="">
              <img src={Bluey} alt=""/>
            </Link>
            <Link to="">
              <img src={CareBears} alt=""/>
            </Link>
            <Link to="">
              <img src={Distroller} alt=""/>
            </Link>
            <Link to="">
              <img src={FallGuys} alt=""/>
            </Link>
            <Link to="">
              <img src={FreeFire} alt=""/>
            </Link>
            <Link to="">
              <img src={KingFeatures} alt=""/>
            </Link>
            <Link to="">
              <img src={Kodak} alt=""/>
            </Link>
            <Link to="">
              <img src={Mgm} alt=""/>
            </Link>
            <Link to="">
              <img src={Microsoft} alt=""/>
            </Link>
            <Link to="">
              <img src={Moonbug} alt=""/>
            </Link>
            <Link to="">
              <img src={Sony} alt=""/>
            </Link>
            <Link to="">
              <img src={Universal} alt=""/>
            </Link>
            <Link to="">
              <img src={Viz} alt=""/>
            </Link>
          </div>
        ) : show === 3 && info === "estilo" ? (
          <div className="images_per_row">
            {/* {Catalogo[7].ecuador.estilo.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Abg1} alt=""/>
            </Link>
            <Link to="">
              <img src={Abg2} alt=""/>
            </Link>
          </div>
        ) : show === 3 && info === "deportivas" ? (
          <div className="images_per_row">
            {/* {Catalogo[7].ecuador.deportivas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Fifa} alt=""/>
            </Link>
            <Link to="">
              <img src={Barcelona} alt=""/>
            </Link>
            <Link to="">
              <img src={Paris} alt=""/>
            </Link>
          </div>
        ) : show === 3 && info === "all" ? (
          <div className="images_per_row">
            {/* {Catalogo[7].ecuador.all.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })} */}
            <Link to="">
              <img src={Abg1} alt=""/>
            </Link>
            <Link to="">
              <img src={Abg2} alt=""/>
            </Link>
            <Link to="">
              <img src={Acer} alt=""/>
            </Link>
            <Link to="">
              <img src={Among} alt=""/>
            </Link>
            <Link to="">
              <img src={Bluey} alt=""/>
            </Link>
            <Link to="">
              <img src={CareBears} alt=""/>
            </Link>
            <Link to="">
              <img src={Crayola} alt=""/>
            </Link>
            <Link to="">
              <img src={Distroller} alt=""/>
            </Link>
            <Link to="">
              <img src={FallGuys} alt=""/>
            </Link>
            <Link to="">
              <img src={Barcelona} alt=""/>
            </Link>
            <Link to="">
              <img src={Fifa} alt=""/>
            </Link>
            <Link to="">
              <img src={FreeFire}/>
            </Link>
            <Link to="">
              <img src={Hersheys} alt=""/>
            </Link>
            <Link to="">
              <img src={KingFeatures} alt=""/>
            </Link>
            <Link to="">
              <img src={Kodak} alt=""/>
            </Link>
            <Link to="">
              <img src={MasterChef} alt=""/>
            </Link>
            <Link to="">
              <img src={Mgm} alt=""/>
            </Link>
            <Link to="">
              <img src={Microsoft} alt=""/>
            </Link>
            <Link to="">
              <img src={Moonbug} alt=""/>
            </Link>
            <Link to="">
              <img src={Paris} alt=""/>
            </Link>
            <Link to="">
              <img src={Pepsico} alt=""/>
            </Link>
            <Link to="">
              <img src={Playmobil} alt=""/>
            </Link>
            <Link to="">
              <img src={Sony} alt=""/>
            </Link>
            <Link to="">
              <img src={Universal} alt=""/>
            </Link>
            <Link to="">
              <img src={Viz} alt=""/>
            </Link>
          </div>
        ) : null}
      </div>
    </StyledNavMarcas>
  );
}
