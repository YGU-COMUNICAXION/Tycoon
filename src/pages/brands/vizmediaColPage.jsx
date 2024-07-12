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

const VizPage = () => {
  return (
    <Layout>
      <MarcaPage backgroundImage={VizBanner}>
        <img alt="marca" src={Bleach} />
        <img alt="marca" src={Boruto} />
        <img alt="marca" src={capitantsubasa} />
        <img alt="marca" src={Death} />
        <img alt="marca" src={hunter} />
        <img alt="marca" src={inuyasha} />
        <img alt="marca" src={jojos} />
        <img alt="marca" src={komi} />
        <img alt="marca" src={NarutoShi} />
        <img alt="marca" src={Naruto} />
        <img alt="marca" src={Onepunch} />
        <img alt="marca" src={uzumaki} />
        <img alt="marca" src={yashahime} />
        <img alt="marca" src={zom100} />
      </MarcaPage>
    </Layout>
  );
};

export default VizPage;
