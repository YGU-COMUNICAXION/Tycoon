import React from "react";
import "./styles.css";
import { useTranslation } from "gatsby-plugin-react-i18next";
import useWindowSize from "../../hooks/useWindowSize";

const NoticiasRecientes = ({ children }) => {
  const { t } = useTranslation("news");
  const windowSize = useWindowSize();

  return (
    <div className="noticiasRecientesMainDiv">
      {windowSize < 752 ? (
        <div className="noticiasRecientesDiv">{children}</div>
      ) : (
        <div className="noticiasRecientesDivDesk">{children}</div>
      )}
    </div>
  );
};
export default NoticiasRecientes;
