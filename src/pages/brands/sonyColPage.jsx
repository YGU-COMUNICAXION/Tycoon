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
import useGeo from "../../hooks/useGeo";

const SonyPage = () => {
  const geo = useGeo();

  return (
    <Layout>
      <MarcaPage backgroundImage={SonnyBanner}>
        <img src={Braking} />
        <img src={Cobra} />
        <img src={Ghost} />
        <img src={Paddington} />
        <img src={Boys} />
        <img src={Karatekid} />
      </MarcaPage>
    </Layout>
  );
};

export default SonyPage;
