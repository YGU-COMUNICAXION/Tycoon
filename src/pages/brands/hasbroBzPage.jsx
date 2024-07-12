import React from "react";
import Layout from "../../components/layout";
import MarcaPage from "../../components/marcaPage";
import HasbroBanner from "../../images/desktop/marcas/hasbro/hasbroBanner.png";
import Magic from "../../images/desktop/marcas/hasbro/magic.png";
import Monopoly from "../../images/desktop/marcas/hasbro/monopoly.png";
import Dungeons from "../../images/desktop/marcas/hasbro/dungeons.png";
import LittlePonny from "../../images/desktop/marcas/hasbro/littlepony.png";
import Potato from "../../images/desktop/marcas/hasbro/potatohead.png";
import Nerf from "../../images/desktop/marcas/hasbro/nerf.png";
import PowerRangers from "../../images/desktop/marcas/hasbro/powerrangers.png";
import Peppa from "../../images/desktop/marcas/hasbro/peppa.png";
import Transformers from "../../images/desktop/marcas/hasbro/transformers.png";
import Pjmas from "../../images/desktop/marcas/hasbro/pjmas.png";
import BabyAlive from "../../images/desktop/marcas/hasbro/babyalive.png";

const HasbroPage = () => {
  return (
    <Layout>
      <MarcaPage backgroundImage={HasbroBanner}>
        <img alt="marca" src={BabyAlive} />
        <img alt="marca" src={Dungeons} />
        <img alt="marca" src={Magic} />
        <img alt="marca" src={Monopoly} />
        <img alt="marca" src={LittlePonny} />
        <img alt="marca" src={Nerf} />
        <img alt="marca" src={Peppa} />
        <img alt="marca" src={Pjmas} />
        <img alt="marca" src={Potato} />
        <img alt="marca" src={PowerRangers} />
        <img alt="marca" src={Transformers} />
      </MarcaPage>
    </Layout>
  );
};

export default HasbroPage;
