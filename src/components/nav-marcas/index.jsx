import React, { useState } from "react";
import styled from "styled-components";

const StyledNavMarcas = styled.div`
  .wrapper__buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    button {
      border: 0.5px solid black;
      font-family: "B SemiBold";
      font-style: normal;
      font-size: 14px;
      letter-spacing: 0.02em;
      color: #051C2C;
      cursor: pointer;
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
`;
export default function NavMarcas() {
  const [show, setShow] = useState(1);
  const [info, setInfo] = useState("corporativas");
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

      <div style={{marginTop: "10px"}}>
        <button onClick={() => setInfo("corporativas")}>Corporativas</button>
        <button onClick={() => setInfo("entretenimiento")}>Entretenimiento</button>
        <button onClick={() => setInfo("estilo")}>Estilo de vida</button>
        <button onClick={() => setInfo("deportivas")}>Deportivas</button>
      </div>

      <div>{show === 1 && info === "corporativas" ? "corporativas" : null}</div>
      <div>{show === 1 && info === "entretenimiento" ? "entretenimiento" : null}</div>
      <div>{show === 1 && info === "estilo" ? "estilo" : null}</div>
      <div>{show === 1 && info === "deportivas" ? "deportivas" : null}</div>
    </StyledNavMarcas>
  );
}
