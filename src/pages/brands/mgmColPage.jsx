import React from "react";
import Layout from "../../components/layout";
import MarcaPage from "../../components/marcaPage";
import MgmBanner from "../../images/desktop/marcas/mgm/mgmbanner.webp";
import Rocky from "../../images/desktop/marcas/mgm/rokcy.png";
import Legally from "../../images/desktop/marcas/mgm/legally.png";
import Pink from "../../images/desktop/marcas/mgm/pink.png";
import Vikings from "../../images/desktop/marcas/mgm/vikings.png";
import Addams from "../../images/desktop/marcas/mgm/addams.png";
import Creed from "../../images/desktop/marcas/mgm/creed.png";
import Wednesday from "../../images/desktop/marcas/mgm/wednesday.png";

const MgmPage = () => {
  return (
    <Layout>
      <MarcaPage backgroundImage={MgmBanner}>
        <img alt="marca" src={Creed} />
        <img alt="marca" src={Legally} />
        <img alt="marca" src={Pink} />
        <img alt="marca" src={Rocky} />
        <img alt="marca" src={Vikings} />
        <img alt="marca" src={Addams} />
        <img alt="marca" src={Wednesday} />
      </MarcaPage>
    </Layout>
  );
};

export default MgmPage;
