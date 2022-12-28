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
import Wednesday from "../../images/desktop/marcas/mgm/addams.png"
import Addams2 from "../../images/desktop/marcas/mgm/addams.png"
import MgmDark from "../../images/desktop/marcas/mgm/addams.png"
import useGeo from '../../hooks/useGeo'

const MgmPage = () => {
  const geo = useGeo();  

  return (
    <Layout>
    {/* {geo === "AR" && (
      <MarcaPage backgroundImage={MgmBanner}>
        <img src={Rocky}/>
        <img src={Legally}/>
        <img src={Pink}/>
        <img src={Vikings}/>
        <img src={Addams}/>
      </MarcaPage>
    )}
    {geo === "MX" && (
      <MarcaPage backgroundImage={MgmBanner}>
        <img src={Vikings}/>
        <img src={PinkLight}/>
        <img src={Rocky}/>
        <img src={Creed}/>
        <img src={Addams}/>
        <img src={MgmDark}/>
        <img src={Wednesday}/>
      </MarcaPage>
    )}
    {geo === "CL" && (
      <MarcaPage backgroundImage={MgmBanner}>
        <img src={Rocky2}/>
        <img src={Legally}/>
        <img src={PinkBlack}/>
        <img src={Vikings}/>
      </MarcaPage>
    )}
    {geo === "CO" || geo === "EC" || geo === "CA" (
      <MarcaPage backgroundImage={MgmBanner}>
        <img src={PinkLight}/>
        <img src={Rocky2}/>
        <img src={Creed}/>
        <img src={Addams}/>
        <img src={Vikings}/>
      </MarcaPage>
    )}
    {geo === "BR" && (
      <MarcaPage backgroundImage={MgmBanner}>
        <img src={Legally}/>
        <img src={PinkLight}/>
        <img src={Rocky}/>
        <img src={Addams2}/>
        <img src={Vikings}/>
        <img src={Wednesday}/>
      </MarcaPage>
    )}
    {geo === "PE" && (
      <MarcaPage backgroundImage={MgmBanner}>
        <img src={Rocky2}/>
        <img src={Legally}/>
        <img src={PinkLight}/>
        <img src={Vikings}/>
      </MarcaPage>
    )} */}
    </Layout>
  )
}

export default MgmPage