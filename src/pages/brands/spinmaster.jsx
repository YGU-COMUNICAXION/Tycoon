import React from "react";
import Layout from "../../components/layout";
import MarcaPage from "../../components/marcaPage";
import Banner from "../../images/desktop/marcas/spinmaster/spinmasterBanner.png";
import Rubik from "../../images/desktop/marcas/spinmaster/rubiks.png";
import Unicorn from "../../images/desktop/marcas/spinmaster/unicorn.png";
import useGeo from "../../hooks/useGeo";

const SonyPage = () => {
  const geo = useGeo();

  return (
    <Layout>
      <MarcaPage backgroundImage={Banner}>
        <img src={Rubik} />
        <img src={Unicorn} />
      </MarcaPage>
    </Layout>
  );
};

export default SonyPage;
