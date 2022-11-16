import React, { useState } from "react";
import { Link } from "gatsby";
import useWindowSize from "../../hooks/useWindowSize";
import styled from "styled-components";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import SwitchLeng from "./SwitchLeng";
import Logo from "../../images/mobile/layout/header/logo-header.png"
import Menu from "../../images/mobile/layout/header/menú.png"

const HeaderTag = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 888;

  nav {
    display: flex;
    justify-content: space-between;
    width: 40%;
    padding: 3% 10% 2% 10%;
  }
  nav a {
    font-family: "M Regular";
    color: black;
    text-decoration: none;
    font-size: 20px;
  }
  a:hover {
    color: #77d0d1 !important;
    text-decoration: underline !important;
    font-family: "M SemiBold";
  }
  > div:nth-child(1) img {
    width: 40%;
  }
  > div:nth-child(1) {
    padding: 1% 1% 1% 5%;
  }
  > div:nth-child(3) {
    display: flex;
    justify-content: space-around;
  }
  > div:nth-child(3) img {
    width: 35%;
  }

  @media only screen and (min-width: 1700px) {
    height: 150px;

    > div:nth-child(1) img {
      width: 200%;
    }
    nav {
      width: 65%;
      padding: 3% 0% 2% 0%;
      margin-left: 15%;
    }
    nav a {
      font-size: 25px;
      margin-right: 1%;
    }
    > div:nth-child(3) img {
      width: 45%;
    }
  }

  @media only screen and (min-width: 2900px) {
    nav a {
      font-size: 40px;
    }
    nav {
      width: 65%;
      padding: 3% 0% 2% 0%;
      margin-left: 15%;
    }
    nav {
      width: 65%;
      padding: 3% 0% 2% 0%;
      margin-left: 15%;
    }
    > div:nth-child(1) img {
      width: 450%;
      margin-left: 25%;
    }
  }
  @media only screen and (min-width: 3500px) {
    nav a {
      font-size: 45px;
    }
    nav {
      width: 65%;
      padding: 3% 0% 2% 0%;
      margin-left: 15%;
    }
    nav {
      width: 65%;
      padding: 3% 0% 2% 0%;
      margin-left: 15%;
    }
    > div:nth-child(1) img {
      width: 450%;
      margin-left: 25%;
    }
  }
  @media only screen and (min-width: 4000px) {
    > div:nth-child(1) img {
      width: 520%;
    }
    nav a {
      font-size: 55px;
    }
    > div:nth-child(3) {
      width: 13%;
    }
    > div:nth-child(3) img {
      width: 65%;
    }
  }
  @media only screen and (max-width: 1700px) {
    nav {
      width: 65%;
      padding: 3% 0% 2% 0%;
      margin-left: 15%;
    }
    nav a {
      font-size: 20px;
    }
    > div:nth-child(1) img {
      width: 150%;
      margin-left: 25%;
    }
  }
  @media only screen and (max-width: 1140px) {
    nav {
      width: 65%;
      padding: 3% 0% 2% 0%;
      margin-left: 15%;
    }
    nav a {
      font-size: 15px;
    }
    > div:nth-child(1) img {
      width: 120%;
      margin-left: 25%;
    }
  }
  @media only screen and (max-width: 900px) {
    nav {
      display: flex;
      justify-content: space-between;
      width: 70%;
      padding: 3% 2% 2% 2%;
      margin-left: 9%;
    }
    nav a {
      font-size: 10px;
    }
    > div:nth-child(1) img {
      width: 80%;
    }
  }
  @media only screen and (max-width: 752px) {
    > div:nth-child(1) img {
      width: 2.5rem;
      margin-left: 0%;
    }
    > div:nth-child(2) img {
      width: 80%;
    }
    > div:nth-child(1) {
      padding: 3% 3% 3% 5%;
    }
    > div:nth-child(2) {
      width: 32%;
      padding-left: 5%;
    }
  }
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 5% 0% 3% 8%;
  position: fixed;
  width: 100%;
  z-index: 999;
  margin-top: 18%;

  a {
    text-decoration: none;
    color: Black;
    font-family: "B Medium";
    font-size: 18px;
    margin-bottom: 16px;
  }
`;

const Header = () => {
  const windowSize = useWindowSize();
  const [nav, setNav] = useState(false);
  const { languages, changeLanguage } = useI18next();
  const { t } = useTranslation("header");

  return windowSize > 752 ? (
    <HeaderTag>
      <div>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <nav>
        <Link to="/">{t("home")}</Link>
        <Link to="/aboutUs">{t("us")}</Link>
        <Link to="/brands">{t("brands")}</Link>
        <Link to="/news">{t("news")}</Link>
        <Link to="/contact">{t("contact")}</Link>
      </nav>
      <SwitchLeng />
    </HeaderTag>
  ) : (
    <div>
      <HeaderTag>
        <div>
          <img src={Menu} nav={nav} onClick={() => setNav(!nav)} />
        </div>
        <div>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div>
            <SwitchLeng />
        </div>
      </HeaderTag>
      {nav ? (
        <MobileNav>
            <Link to="/">{t("home")}</Link>
            <Link to="/aboutUs">{t("us")}</Link>
            <Link to="/brands">{t("brands")}</Link>
            <Link to="/news">{t("news")}</Link>
            <Link to="/contact">{t("contact")}</Link>
        </MobileNav>
      ) : null}
    </div>
  );
};

export default Header;
