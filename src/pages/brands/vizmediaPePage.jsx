import React from "react";
import Layout from "../../components/layout";
import MarcaPage from "../../components/marcaPage";
import VizBanner from "../../images/desktop/marcas/viz/vizBanner.png";
import Bleach from "../../images/desktop/marcas/viz/bleach.png";
import Boruto from "../../images/desktop/marcas/viz/boruto.png";
import capitantsubasa from "../../images/desktop/marcas/viz/capitantsubasa.png";
import hunter from "../../images/desktop/marcas/viz/hunter.png";
import inuyasha from "../../images/desktop/marcas/viz/inuyasha.png";
import jojos from "../../images/desktop/marcas/viz/jojos.png";
import komi from "../../images/desktop/marcas/viz/komi.png";
import uzumaki from "../../images/desktop/marcas/viz/uzumaki.png";
import yashahime from "../../images/desktop/marcas/viz/yashahime.png";
import zom100 from "../../images/desktop/marcas/viz/zom100.png";
import Onepunch from "../../images/desktop/marcas/viz/onepunch.png";
import NarutoShi from "../../images/desktop/marcas/viz/narutoship.png";
import Naruto from "../../images/desktop/marcas/viz/naruto.png";
import Death from "../../images/desktop/marcas/viz/death.png";
import useGeo from "../../hooks/useGeo";

const VizPage = () => {
  const geo = useGeo();

  return (
    <Layout>
      <MarcaPage backgroundImage={VizBanner}>
        <img src={Bleach} />
        <img src={Boruto} />
        <img src={capitantsubasa} />
        <img src={Death} />
        <img src={hunter} />
        <img src={inuyasha} />
        <img src={jojos} />
        <img src={komi} />
        <img src={NarutoShi} />
        <img src={Naruto} />
        <img src={Onepunch} />
        <img src={uzumaki} />
        <img src={yashahime} />
        <img src={zom100} />
      </MarcaPage>
    </Layout>
  );
};

export default VizPage;
