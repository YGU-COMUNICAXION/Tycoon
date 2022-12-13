import React, { useState } from "react";
import Catalogo from "../../../CatalogoBrandsDesktop";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import "./styles_marcas.css";
import { useTranslation } from "gatsby-plugin-react-i18next";
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
    margin: 42px auto 66px;
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
    .order_image {
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
    .select_category {
      font-size: 22px;
      max-width: 800px;
    }
    .order_image {
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
      margin: 0 auto 200px;
      max-width: 1400px;
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
            {Catalogo[0].argentina.corporativas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 4 && info === "entretenimiento" ? (
          <div className="images_per_row">
            {Catalogo[0].argentina.entretenimiento.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 4 && info === "estilo" ? (
          <div className="images_per_row">
            {Catalogo[0].argentina.estilo.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 4 && info === "deportivas" ? (
          <div className="images_per_row">
            {Catalogo[0].argentina.deportivas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 4 && info === "all" ? (
          <div className="images_per_row">
            {Catalogo[0].argentina.all.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : null}

        {/* MEXICO SECTIONS */}

        {show === 1 && info === "corporativas" ? (
          <div className="images_per_row">
            {Catalogo[1].mexico.corporativas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 1 && info === "entretenimiento" ? (
          <div className="images_per_row">
            {Catalogo[1].mexico.entretenimiento.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 1 && info === "estilo" ? (
          <div className="images_per_row">
            {Catalogo[1].mexico.estilo.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 1 && info === "deportivas" ? (
          <div className="images_per_row">
            {Catalogo[1].mexico.deportivas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 1 && info === "all" ? (
          <div className="images_per_row">
            {Catalogo[1].mexico.all.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : null}

        {/* BRASIL SECTIONS */}

        {show === 8 && info === "corporativas" ? (
          <div className="images_per_row">
            {Catalogo[2].brasil.corporativas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 8 && info === "entretenimiento" ? (
          <div className="images_per_row">
            {Catalogo[2].brasil.entretenimiento.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 8 && info === "estilo" ? (
          <div className="images_per_row">
            {Catalogo[2].brasil.estilo.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 8 && info === "deportivas" ? (
          <div className="images_per_row">
            {Catalogo[2].brasil.deportivas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 8 && info === "all" ? (
          <div className="images_per_row">
            {Catalogo[2].brasil.all.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : null}

        {/* CHILE SECTIONS */}

        {show === 5 && info === "corporativas" ? (
          <div className="images_per_row">
            {Catalogo[3].chile.corporativas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 5 && info === "entretenimiento" ? (
          <div className="images_per_row">
            {Catalogo[3].chile.entretenimiento.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 5 && info === "estilo" ? (
          <div className="images_per_row">
            {Catalogo[3].chile.estilo.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 5 && info === "deportivas" ? (
          <div className="images_per_row">
            {Catalogo[3].chile.deportivas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 5 && info === "all" ? (
          <div className="images_per_row">
            {Catalogo[3].chile.all.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : null}

        {/* PERÚ SECTIONS */}

        {show === 6 && info === "corporativas" ? (
          <div className="images_per_row">
            {Catalogo[4].peru.corporativas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 6 && info === "entretenimiento" ? (
          <div className="images_per_row">
            {Catalogo[4].peru.entretenimiento.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 6 && info === "estilo" ? (
          <div className="images_per_row">
            {Catalogo[4].peru.estilo.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 6 && info === "deportivas" ? (
          <div className="images_per_row">
            {Catalogo[4].peru.deportivas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 6 && info === "all" ? (
          <div className="images_per_row">
            {Catalogo[4].peru.all.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : null}

        {/* Centroamerica SECTIONS */}

        {show === 7 && info === "corporativas" ? (
          <div className="images_per_row">
            {Catalogo[5].centroAmerica.corporativas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 7 && info === "entretenimiento" ? (
          <div className="images_per_row">
            {Catalogo[5].centroAmerica.entretenimiento.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 7 && info === "estilo" ? (
          <div className="images_per_row">
            {Catalogo[5].centroAmerica.estilo.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 7 && info === "deportivas" ? (
          <div className="images_per_row">
            {Catalogo[5].centroAmerica.deportivas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 7 && info === "all" ? (
          <div className="images_per_row">
            {Catalogo[5].centroAmerica.all.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : null}
        {/* COLOMBIA SECTIONS */}

        {show === 2 && info === "corporativas" ? (
          <div className="images_per_row">
            {Catalogo[6].colombia.corporativas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 2 && info === "entretenimiento" ? (
          <div className="images_per_row">
            {Catalogo[6].colombia.entretenimiento.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 2 && info === "estilo" ? (
          <div className="images_per_row">
            {Catalogo[6].colombia.estilo.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 2 && info === "deportivas" ? (
          <div className="images_per_row">
            {Catalogo[6].colombia.deportivas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 2 && info === "all" ? (
          <div className="images_per_row">
            {Catalogo[6].colombia.all.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : null}

        {/* ECUADOR SECTIONS */}

        {show === 3 && info === "corporativas" ? (
          <div className="images_per_row">
            {Catalogo[7].ecuador.corporativas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 3 && info === "entretenimiento" ? (
          <div className="images_per_row">
            {Catalogo[7].ecuador.entretenimiento.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 3 && info === "estilo" ? (
          <div className="images_per_row">
            {Catalogo[7].ecuador.estilo.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 3 && info === "deportivas" ? (
          <div className="images_per_row">
            {Catalogo[7].ecuador.deportivas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : show === 3 && info === "all" ? (
          <div className="images_per_row">
            {Catalogo[7].ecuador.all.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div>
        ) : null}
      </div>
    </StyledNavMarcas>
  );
}
