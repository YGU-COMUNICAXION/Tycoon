import React from "react";
import Layout from "../components/layout";
import NavMarcas from "../components/nav-marcas";
import BackMobile from "../images/mobile/marcas/brands_back_mobile.png";
import "../css/brands.css";
const brandsPage = () => {
  return (
    <Layout>
      <div className="MainDiv nomargin">
        <div className='brandsFirstSection'></div>
        <img className="image_top" src={BackMobile} alt="back_image" />
        <div className="brandsSecondSection">
          <NavMarcas />
        </div>
      </div>
    </Layout>
  );
};

export default brandsPage;
