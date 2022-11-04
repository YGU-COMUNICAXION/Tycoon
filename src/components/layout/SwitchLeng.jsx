import React, { useState } from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import "./SwitchLeng.css";

const SwitchLeng = () => {
  const { languages, changeLanguage, language } = useI18next();

  return (
    <div className="switchLeng">
      <select
        onChange={(e) => {
          changeLanguage(e.target.value);
        }}
      >
        {languages.map((lng) => (
          <option key={lng} value={lng} selected={language === lng}>
            {lng}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SwitchLeng;