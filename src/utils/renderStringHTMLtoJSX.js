import React from "react";

const renderStringHMTLtoJSX = (string) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: string,
      }}
    />
  );
};

export default renderStringHMTLtoJSX;
