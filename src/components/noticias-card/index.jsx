import React from "react";
import "./styles.css";

const NoticiasCard = ({ image, title, date, children }) => {
  return (
    <div className="noticiaMainDiv">
      <div className="noticiaUpperDiv">
        {image.includes("video") ? (
          <img
            style={{ objectFit: "cover" }}
            src="https://interfacetourism.es/web/app/plugins/instagram-feed/img/thumb-placeholder.png"
            alt="placeholder"
          />
        ) : (
          <img alt="" src={image} />
        )}
        <p className="noticiaTitle">{title}</p>
      </div>
      <div className="noticiaUnderDiv">
        <p className="noticiaDate">{date}</p>
        <div className="noticiaIconsRow">
          {/* <img src={Mas} className="mas"/> */}
          {children}
        </div>
      </div>
    </div>
  );
};
export default NoticiasCard;
