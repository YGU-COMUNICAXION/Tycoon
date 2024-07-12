import React from "react";
import Layout from "../../components/layout";
import MarcaPage from "../../components/marcaPage";
import SonnyBanner from "../../images/desktop/marcas/sony/sonyBanner.webp";
import Braking from "../../images/desktop/marcas/sony/breakingbad.png";
import Cobra from "../../images/desktop/marcas/sony/cobrakai.png";
import Paddington from "../../images/desktop/marcas/sony/paddingto.png";
import Ghost from "../../images/desktop/marcas/sony/ghost.png";
import Boys from "../../images/desktop/marcas/sony/theboys.png";
import Karatekid from "../../images/desktop/marcas/sony/karatekid.png";

const SonyPage = () => {
  

  return (
    <Layout>
      <MarcaPage backgroundImage={SonnyBanner}>
        <img alt="marca" src={Braking} />
        <img alt="marca" src={Cobra} />
        <img alt="marca" src={Ghost} />
        <img alt="marca" src={Paddington} />
        <img alt="marca" src={Boys} />
        <img alt="marca" src={Karatekid} />
      </MarcaPage>
    </Layout>
  );
};

export default SonyPage;
