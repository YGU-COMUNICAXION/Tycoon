import React from "react";
import Layout from "../../components/layout";
import MarcaPage from "../../components/marcaPage";
import HersheysBanner from "../../images/desktop/marcas/hersheys/hersheysBanner.png";
import Reeses from "../../images/desktop/marcas/hersheys/reeses.png";
import Kisses from "../../images/desktop/marcas/hersheys/kisses.png";
import Joly from "../../images/desktop/marcas/hersheys/joly.png";
import Pelon from "../../images/desktop/marcas/hersheys/pelon.png";
import HersheysW from "../../images/desktop/marcas/hersheys/hersheys.png";

const HersheysPage = () => {

  return (
    <Layout>
      <MarcaPage backgroundImage={HersheysBanner}>
        <img alt="marca" src={HersheysW} />
        <img alt="marca" src={Joly} />
        <img alt="marca" src={Kisses} />
        <img alt="marca" src={Reeses} />
        <img alt="marca" src={Pelon} />
      </MarcaPage>
    </Layout>
  );
};

export default HersheysPage;
