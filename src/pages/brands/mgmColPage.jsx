import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import MgmBanner from "../../images/desktop/marcas/mgm/mgmbanner.png"
import Rocky from "../../images/desktop/marcas/mgm/rokcy.png"
import Legally from "../../images/desktop/marcas/mgm/legally.png"
import Pink from "../../images/desktop/marcas/mgm/pink.png"
import Vikings from "../../images/desktop/marcas/mgm/vikings.png"
import Addams from "../../images/desktop/marcas/mgm/addams.png"
import Creed from "../../images/desktop/marcas/mgm/creed.png"
import PinkBlack from "../../images/desktop/marcas/mgm/pinkblack.png"
import PinkLight from "../../images/desktop/marcas/mgm/pinklight.png"
import PinkDark from "../../images/desktop/marcas/mgm/addams.png"
import Rocky2 from "../../images/desktop/marcas/mgm/addams.png"
import Wednesday from "../../images/desktop/marcas/mgm/wednesday.png"
import Addams2 from "../../images/desktop/marcas/mgm/addams.png"
import MgmDark from "../../images/desktop/marcas/mgm/mgm.png"
import useGeo from '../../hooks/useGeo'

const MgmPage = () => {
  const geo = useGeo();  

  return (
    <Layout>
      <MarcaPage backgroundImage={MgmBanner}>
        <img src={PinkLight}/>
        <img src={Rocky2}/>
        <img src={Creed}/>
        <img src={Addams}/>
        <img src={Vikings}/>
      </MarcaPage>
    </Layout>
  )
}

export default MgmPage