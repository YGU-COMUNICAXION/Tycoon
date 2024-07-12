import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import MgmBanner from "../../images/desktop/marcas/mgm/mgmbanner.webp"
import Legally from "../../images/desktop/marcas/mgm/legally.png"
import Vikings from "../../images/desktop/marcas/mgm/vikings.png"
import PinkLight from "../../images/desktop/marcas/mgm/pinklight.png"
import Rocky2 from "../../images/desktop/marcas/mgm/rocky2.png"
import Wednesday from "../../images/desktop/marcas/mgm/wednesday.png"
import Addams2 from "../../images/desktop/marcas/mgm/addams2.png"

const MgmPage = () => {

  return (
    <Layout>
      <MarcaPage backgroundImage={MgmBanner}>
        <img alt="marca" src={Legally}/>
        <img alt="marca" src={PinkLight}/>
        <img alt="marca" src={Rocky2}/>
        <img alt="marca" src={Addams2}/>
        <img alt="marca" src={Vikings}/>
        <img alt="marca" src={Wednesday}/>
      </MarcaPage>
    </Layout>
  )
}

export default MgmPage