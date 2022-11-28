import React, { useState } from "react";
import Catalogo from "../../../CatalogoBrands";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import "./styles_marcas.css";

const StyledNavMarcas = styled.div`
  .wrapper__buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10px;
    margin-top: 60px;
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
        color: white;
      }
      :first-child {
        border-radius: 4px 0 0 0;
      }
      :last-child {
        border-radius: 0 4px 0 0;
      }
    }
    .level_one {
      display: flex;
      button {
        width: 25%;
      }
    }
    .level_two {
      display: flex;
      button {
        width: 15%;
        :first-child {
          border-radius: 0px 0 0 4px;
        }
        :last-child {
          border-radius: 0 0 4px 0;
        }
        :nth-child(3) {
          width: 55%;
        }
      }
    }
  }
  .order_image {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    img {
      width: 156px;
      padding: 10px;
    }
  }
`;
export default function NavMarcas() {
  const [show, setShow] = useState(1);
  const [info, setInfo] = useState("corporativas");
  console.log(show, "show", info, "info");
  return (
    <StyledNavMarcas>
      <div className="wrapper__buttons">
        <div className="level_one">
          <button onClick={() => setShow(1)}>México</button>
          <button onClick={() => setShow(2)}>Colombia</button>
          <button onClick={() => setShow(3)}>Ecuador</button>
          <button onClick={() => setShow(4)}>Argentina</button>
        </div>
        <div className="level_two">
          <button onClick={() => setShow(5)}>Chile</button>
          <button onClick={() => setShow(6)}>Perú</button>
          <button onClick={() => setShow(7)}>Centroamérica y Caribe</button>
          <button onClick={() => setShow(8)}>Brasil</button>
        </div>
      </div>
      <Nav fill variant="tabs">
        <Nav.Item onClick={() => setInfo("corporativas")}>
          <Nav.Link eventKey="link-1">Corporativas</Nav.Link>
        </Nav.Item>
        <div className="navDivisor" />
        <Nav.Item onClick={() => setInfo("entretenimiento")}>
          <Nav.Link eventKey="link-2">Entretenimiento</Nav.Link>
        </Nav.Item>
        <div className="navDivisor" />
        <Nav.Item onClick={() => setInfo("estilo")}>
          <Nav.Link eventKey="link-3">Estilo de vida</Nav.Link>
        </Nav.Item>
        <div className="navDivisor" />
        <Nav.Item onClick={() => setInfo("deportivas")}>
          <Nav.Link eventKey="link-4">Deportivas</Nav.Link>
        </Nav.Item>
      </Nav>
      {/* ARGENTINA SECTIONS */}
      <div className="order_image">
        {show === 4 && info === "corporativas" ? (
          <>
            {Catalogo[0].argentina.corporativas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </>
        ) : show === 4 && info === "entretenimiento" ? (
          <>
            {Catalogo[0].argentina.entretenimiento.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </>
        ) : show === 4 && info === "estilo" ? (
          <>
            {Catalogo[0].argentina.estilo.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </>
        ) : show === 4 && info === "deportivas" ? (
          <>
            {Catalogo[0].argentina.deportivas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </>
        ) : null}

      {/* MEXICO SECTIONS */}

        {show === 1 && info === "corporativas" ? (
          <>
            {Catalogo[1].mexico.corporativas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </>
        ) : show === 1 && info === "entretenimiento" ? (
          <>
            {Catalogo[1].mexico.entretenimiento.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </>
        ) : show === 1 && info === "estilo" ? (
          <>
            {Catalogo[1].mexico.estilo.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </>
        ) : show === 1 && info === "deportivas" ? (
          <>
            {Catalogo[1].mexico.deportivas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </>
        ) : null}

          {/* BRASIL SECTIONS */}

        {show === 8 && info === "corporativas" ? (
          <>
            {Catalogo[2].brasil.corporativas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </>
        ) : show === 8 && info === "entretenimiento" ? (
          <>
            {Catalogo[2].brasil.entretenimiento.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </>
        ) : show === 8 && info === "estilo" ? (
          <>
            {Catalogo[2].brasil.estilo.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </>
        ) : show === 8 && info === "deportivas" ? (
          <>
            {Catalogo[2].brasil.deportivas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </>
        ) : null}

        {/* CHILE SECTIONS */}

        {show === 5 && info === "corporativas" ? (
          <>
            {Catalogo[3].chile.corporativas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </>
        ) : show === 5 && info === "entretenimiento" ? (
          <>
            {Catalogo[3].chile.entretenimiento.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </>
        ) : show === 5 && info === "estilo" ? (
          <>
            {Catalogo[3].chile.estilo.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </>
        ) : show === 5 && info === "deportivas" ? (
          <>
            {Catalogo[3].chile.deportivas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </>
        ) : null}

          {/* PERÚ SECTIONS */}

          {show === 6 && info === "corporativas" ? (
          <>
            {Catalogo[4].peru.corporativas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </>
        ) : show === 6 && info === "entretenimiento" ? (
          <>
            {Catalogo[4].peru.entretenimiento.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </>
        ) : show === 6 && info === "estilo" ? (
          <>
            {Catalogo[4].peru.estilo.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </>
        ) : show === 6 && info === "deportivas" ? (
          <>
            {Catalogo[4].peru.deportivas.map((e, idx) => {
              return <img key={idx} src={e.image.default} alt="image_icon" />;
            })}
          </>
        ) : null}
      </div>

    
    </StyledNavMarcas>
  );
}
