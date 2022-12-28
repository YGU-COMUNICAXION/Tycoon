import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import HasbroBanner from "../../images/desktop/marcas/hasbro/hasbroBanner.png"
import Magic from "../../images/desktop/marcas/hasbro/magic.png"
import Monopoly from "../../images/desktop/marcas/hasbro/monopoly.png"
import Dungeons from "../../images/desktop/marcas/hasbro/dungeons.png"
import LittlePonny from "../../images/desktop/marcas/hasbro/littlepony.png"
import Potato from "../../images/desktop/marcas/hasbro/potatohead.png"
import Nerf from "../../images/desktop/marcas/hasbro/nerf.png"
import PowerRangers from "../../images/desktop/marcas/hasbro/powerrangers.png"
import Peppa from "../../images/desktop/marcas/hasbro/peppa.png"
import Transformers from "../../images/desktop/marcas/hasbro/transformers.png"
import Pjmas from "../../images/desktop/marcas/hasbro/pjmas.png"
import BabyAlive from "../../images/desktop/marcas/hasbro/babyalive.png"
import useGeo from '../../hooks/useGeo'

const HasbroPage = () => {
  const geo = useGeo();  

  return (
    <Layout>
    {geo === "AR" && (<></>)}
    {geo === "MX" && (<></>)}
    {geo === "CL" && (<></>)}
    {geo === "CO" && (<></>)}
    {geo === "BR" && (
      <MarcaPage backgroundImage={HasbroBanner}>
        <img src={BabyAlive}/>
        <img src={Dungeons}/>
        <img src={Magic}/>
        <img src={Monopoly}/>
        <img src={LittlePonny}/>
        <img src={Nerf}/>
        <img src={Peppa}/>
        <img src={Pjmas}/>
        <img src={Potato}/>
        <img src={PowerRangers}/>
        <img src={Transformers}/>
      </MarcaPage>
    )}
    {geo === "PE" && (<></>)}
    {geo === "EC" && (<></>)}
    {geo === "CA" && (<></>)}
    </Layout>
  )
}

export default HasbroPage