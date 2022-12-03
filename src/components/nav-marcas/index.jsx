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
      font-size: 14px;
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
        color: #0093d7;
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

        :nth-child(4) {
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

  @media (min-width: 600px) {
    .wrapper__buttons {
      max-width: 500px;
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
    .wrapper__buttons {
      display: flex;
      flex-direction: row;
      width: 100%;
      .level_one {
        display: flex;
        align-items: center;

        button {
          width: 17%;
          padding: 10px;
          font-size: 24px;
          :nth-child(4) {
            width: 400px;
          }
          :first-child{
            border-radius: 4px 0 0 4px;
          }
          :last-child{
            border-radius: 0px;
          }
        }
      }
      .level_two {
        display: flex;
        align-items: center;
        button {
          padding: 10px;
          width: 30%;
          font-size: 24px;
          :first-child{
            border-radius: 0px 0px 0px 0px;
          }
          :last-child{
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
  let prevButton = null;

  const wrapper = document.getElementById("wrapper");
  if (wrapper) {
    wrapper.addEventListener("click", (e) => {
      const isButton = e.target.nodeName === "BUTTON";

      if (!isButton) {
        return;
      }

      e.target.classList.add("active"); // Add .active CSS Class

      if (prevButton !== null) {
        prevButton.classList.remove("active"); // Remove .active CSS Class
      }

      prevButton = e.target;
    });
  }

  const [show, setShow] = useState(0);
  const [info, setInfo] = useState("corporativas");
  return (
    <StyledNavMarcas>
      <div className="wrapper__buttons" id="wrapper">
        <div className="level_one">
          <button style={{background: show === 0 ? "#0093d7" : "white"}} onClick={() => setShow(0)}>{t("All")}</button>
          <button style={{background: show === 4 ? "#0093d7" : "white"}} onClick={() => setShow(4)}>{t("arg")}</button>
          <button style={{background: show === 8 ? "#0093d7" : "white"}} onClick={() => setShow(8)}>{t("bra")}</button>
          <button  style={{background: show === 7 ? "#0093d7" : "white"}}onClick={() => setShow(7)}>{t("centro")}</button>
          <button style={{background: show === 5 ? "#0093d7" : "white"}} onClick={() => setShow(5)}>{t("chi")}</button>
        </div>
        <div className="level_two">
          <button style={{background: show === 2 ? "#0093d7" : "white"}} onClick={() => setShow(2)}>{t("col")}</button>
          <button style={{background: show === 3 ? "#0093d7" : "white"}} onClick={() => setShow(3)}>{t("ecu")}</button>
          <button style={{background: show === 1 ? "#0093d7" : "white"}} onclick={() => setShow(1)}>{t("mex")}</button>
          <button style={{background: show === 6 ? "#0093d7" : "white"}} onClick={() => setShow(6)}>{t("peru")}</button>
        </div>
      </div>
      <Nav fill variant="tabs" id="wrapper">
        <Nav.Item onClick={() => setInfo("corporativas")}>
          <Nav.Link eventKey="link-1">{t("corp")}</Nav.Link>
        </Nav.Item>
        <div className="navDivisor" />
        <Nav.Item onClick={() => setInfo("entretenimiento")}>
          <Nav.Link eventKey="link-2">{t("entretenimiento")}</Nav.Link>
        </Nav.Item>
        <div className="navDivisor" />
        <Nav.Item onClick={() => setInfo("estilo")}>
          <Nav.Link eventKey="link-3">{t("estilo")}</Nav.Link>
        </Nav.Item>
        <div className="navDivisor" />
        <Nav.Item onClick={() => setInfo("deportivas")}>
          <Nav.Link eventKey="link-4">{t("depor")}</Nav.Link>
        </Nav.Item>
      </Nav>

      <div className="order_image">
      {show === 0 ? 
          <div className="images_per_row">
            {Catalogo[0].all.allImages.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </div> : null}
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
        ) : null}
      </div>
    </StyledNavMarcas>
  );
}
