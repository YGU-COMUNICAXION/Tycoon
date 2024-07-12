import React from "react";
import Layout from "../../components/layout";
import MarcaPage from "../../components/marcaPage";
import KellogsBanner from "../../images/desktop/marcas/kelloggs/kellogsBanner.png";
import EspecialK from "../../images/desktop/marcas/kelloggs/especialk.png";
import Froot from "../../images/desktop/marcas/kelloggs/froot.png";
import PopTarts from "../../images/desktop/marcas/kelloggs/poptarts.png";
import Eggo from "../../images/desktop/marcas/kelloggs/eggo.png";
import Pringles from "../../images/desktop/marcas/kelloggs/pringles.png";
import CornFlakes from "../../images/desktop/marcas/kelloggs/cornflakes.png";
import ChocoCrispis from "../../images/desktop/marcas/kelloggs/chocokrispis.png";
import Zucaritas from "../../images/desktop/marcas/kelloggs/zucaritas.png";
import RiceKrispies from "../../images/desktop/marcas/kelloggs/ricekrispies.png";

const KellogsPage = () => {
  return (
    <Layout>
      <MarcaPage backgroundImage={KellogsBanner}>
        <img alt="marca" src={EspecialK} />
        <img alt="marca" src={RiceKrispies} />
        <img alt="marca" src={PopTarts} />
        <img alt="marca" src={Froot} />
        <img alt="marca" src={Eggo} />
        <img alt="marca" src={CornFlakes} />
        <img alt="marca" src={ChocoCrispis} />
        <img alt="marca" src={Zucaritas} />
        <img alt="marca" src={Pringles} />
      </MarcaPage>
    </Layout>
  );
};

export default KellogsPage;
