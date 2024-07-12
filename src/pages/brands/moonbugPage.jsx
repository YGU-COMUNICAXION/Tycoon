import React from "react";
import Layout from "../../components/layout";
import MarcaPage from "../../components/marcaPage";
import MoonbugBanner from "../../images/desktop/marcas/moonbug/moonbugBanner.png";
import Coocomelon from "../../images/desktop/marcas/moonbug/cocomelon.png";
import Blippi from "../../images/desktop/marcas/moonbug/blippi.png";

const MoonbugPage = () => {

  return (
    <Layout>
      <MarcaPage backgroundImage={MoonbugBanner}>
        <img alt="marca" src={Blippi} />
        <img alt="marca" src={Coocomelon} />
      </MarcaPage>
    </Layout>
  );
};

export default MoonbugPage;
