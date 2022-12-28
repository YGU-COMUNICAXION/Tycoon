import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import SonnyBanner from "../../images/desktop/marcas/sony/sonyBanner.png"
import Braking from "../../images/desktop/marcas/sony/breakingbad.png"
import Cobra from "../../images/desktop/marcas/sony/cobrakai.png"
import Death from "../../images/desktop/marcas/sony/deathnote.png"
import Ghost from "../../images/desktop/marcas/sony/ghost.png"
import Boys from "../../images/desktop/marcas/sony/theboys.png"
import useGeo from '../../hooks/useGeo'

const SonyPage = () => {
  const geo = useGeo();  

  return (
    <Layout>
    {geo === "AR" || geo === "CL" || geo === "PE" (<>
      <MarcaPage backgroundImage={SonnyBanner}>
        <img src={Ghost}/>
        <img src={Cobra}/>
      </MarcaPage>
    </>)}
    {geo === "MX" && (<>
      <MarcaPage backgroundImage={SonnyBanner}>
        <img src={Ghost}/>
        <img src={Cobra}/>
        <img src={Braking}/>
        <img src={Death}/>
      </MarcaPage>
    </>)}
    {geo === "CO" || geo === "EC" || geo === "CA" (<>
      <MarcaPage backgroundImage={SonnyBanner}>
        <img src={Ghost}/>
        <img src={Cobra}/>
        <img src={Boys}/>
      </MarcaPage>
    </>)}
    {geo === "BR" && (<></>)}

    </Layout>
  )
}

export default SonyPage