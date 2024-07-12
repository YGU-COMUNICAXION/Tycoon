import React from "react";
import "./styles.css";

const NoticiasCard = ({ image, title, date, children, loader }) => {
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
        <div className="noticiaIconsRow">{children}</div>
      </div>

      {loader && (
        <div className="loader-card">
          <div className="custom-loader"></div>
        </div>
      )}
    </div>
  );
};
export default NoticiasCard;
