import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import VizBanner from "../../images/desktop/marcas/viz/vizBanner.png"
import Onepunch from "../../images/desktop/marcas/viz/onepunch.png"
import Bleach from "../../images/desktop/marcas/viz/bleach.png"
import NarutoShi from "../../images/desktop/marcas/viz/narutoship.png"
import Naruto from "../../images/desktop/marcas/viz/naruto.png"
import Death from "../../images/desktop/marcas/viz/death.png"
import useGeo from '../../hooks/useGeo'

const VizPage = () => {
  const geo = useGeo();  

  return (
    <Layout>
    {geo === "AR" || "CL" || "PE" (<>
      <MarcaPage backgroundImage={VizBanner}>
        <img src={Naruto}/>
        <img src={NarutoShi}/>
        <img src={Onepunch}/>
        <img src={Bleach}/>
      </MarcaPage>
    </>)}
    {geo === "MX" || "CO" || "EC" || "CA" (
      <MarcaPage backgroundImage={VizBanner}>
        <img src={Naruto}/>
        <img src={NarutoShi}/>
        <img src={Onepunch}/>
        <img src={Bleach}/>
        <img src={Death}/>
      </MarcaPage>
    )}
    {geo === "BR" && (<></>)}
    </Layout>
  )
}

export default VizPage