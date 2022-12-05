import React from "react";
import Layout from "../components/layout";
import NavMarcas from "../components/nav-marcas";
import "../css/brands.css";
import useWindowSize from "../hooks/useWindowSize";

const BrandsPage = () => {
  const windowSize = useWindowSize();

  return (
    <Layout>
      <div className="MainDiv nomargin">
      {windowSize < 752 ? (
        <div className='brandsFirstSection'></div>
      ):(
        <div className='brandsFirstSectionDesk'></div>
      )}
        <div className="brandsSecondSection">
          <NavMarcas />
        </div>
      </div>
    </Layout>
  );
};

export default BrandsPage;
