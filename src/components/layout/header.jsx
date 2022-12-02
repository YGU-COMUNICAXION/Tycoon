import React, { useState } from "react";
import { Link } from "gatsby";
import useWindowSize from "../../hooks/useWindowSize";
// import styled from "styled-components";
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import SwitchLeng from "./SwitchLeng";
import Logo from "../../images/mobile/layout/header/logo-header.png"
import Menu from "../../images/mobile/layout/header/menú.png"
import Facebook from "../../images/desktop/layout/header/icon-facebook.png"
import Instagram from "../../images/desktop/layout/header/icon-instagram.png"
import LinkedIn from "../../images/desktop/layout/header/icon-linkedin.png"
import "./header.css"

const Header = () => {
  const windowSize = useWindowSize();
  const [nav, setNav] = useState(false);
  const { languages, changeLanguage } = useI18next();
  const { t } = useTranslation("header");

  return windowSize > 752 ? (
    <div className="HeaderTag">
      <div className="deskLeftDiv">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="deskNav">
          <Link to="/">{t("home")}</Link>
          <Link to="/aboutUs">{t("us")}</Link>
          <Link to="/brands">{t("brands")}</Link>
          <Link to="/news">{t("news")}</Link>
          <Link to="/contact">{t("contact")}</Link>
        </div>
      </div>
      <div className="deskRightDiv">
        <a href="https://www.facebook.com/TycoonEnterprises/" target={"_blank"}>
          <img src={Facebook}/>
        </a>
        <a href="https://www.instagram.com/tycoon.enterprises/" target={"_blank"}>
          <img src={Instagram}/>
        </a>
        <a href="https://www.linkedin.com/company/tycoon-enterprises/" target={"_blank"}>
          <img src={LinkedIn}/>
        </a>
        <SwitchLeng />
      </div>
    </div>
  ) : (
    <div>
      <div className="HeaderTag">
        <div className="headerMenu">
          <img src={Menu} nav={nav} onClick={() => setNav(!nav)} />
        </div>
        <div className="headerLogo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="headerSwitch">
            <SwitchLeng />
        </div>
      </div>
      {nav ? (
        <div className="MobileNav">
            <Link to="/">{t("home")}</Link>
            <Link to="/aboutUs">{t("us")}</Link>
            <Link to="/brands">{t("brands")}</Link>
            <Link to="/news">{t("news")}</Link>
            <Link to="/contact">{t("contact")}</Link>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
