import React from "react";
import "./styles.css";
import useWindowSize from "../../hooks/useWindowSize";

const InstitucionCard = ({ image, institucionName, info }) => {
  const windowSize = useWindowSize();
  return (
    <div className="institucionMainDiv">
      {windowSize < 752 ? (
        <>
          <img alt="" src={image} />
          <p className="instName">{institucionName}</p>
          <p className="instInfo">{info}</p>
        </>
      ) : (
        <>
          <img alt="" src={image} />
          <div className="deskTextDiv">
            <p className="instName">{institucionName}</p>
            <p className="instInfo">{info}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default InstitucionCard;
