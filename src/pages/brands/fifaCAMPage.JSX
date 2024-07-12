import React from "react";
import Layout from "../../components/layout";
import MarcaPage from "../../components/marcaPage";
import FifaBanner from "../../images/desktop/marcas/fifa/fifaBanner.webp";
import FifaWomen from "../../images/desktop/marcas/fifa/fifawomen.png";
import FifaRight from "../../images/desktop/marcas/fifa/fifaRight.png";

const FifaPage = () => {

  return (
    <Layout>
      <MarcaPage backgroundImage={FifaBanner}>
        <img alt="marca" src={FifaRight} />
        <img alt="marca" src={FifaWomen} />
      </MarcaPage>
    </Layout>
  );
};

export default FifaPage;
