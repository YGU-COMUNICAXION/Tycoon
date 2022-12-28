import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import SanrioBanner from "../../images/desktop/marcas/sanrio/sanrioBanner.png"
import AggRetsuko from "../../images/desktop/marcas/sanrio/aggretsuko.png"
import Gudetama from "../../images/desktop/marcas/sanrio/gudetama.png"
import HelloFriends from "../../images/desktop/marcas/sanrio/hellofriends.png"
import Hello from "../../images/desktop/marcas/sanrio/hellokitty.png"
import useGeo from '../../hooks/useGeo'

const SanrioPage = () => {
  const geo = useGeo();  

  return (
    <Layout>
    {geo === "AR" || "MX" (<>
      <MarcaPage backgroundImage={SanrioBanner}>
        <img src={Hello}/>
        <img src={HelloFriends}/>
        <img src={Gudetama}/>
        <img src={AggRetsuko}/>
      </MarcaPage>
    </>)}
    {geo === "CO" || "EC" || "CL" || "PE" || "CAM" (
      <MarcaPage backgroundImage={SanrioBanner}>
        <img src={Hello}/>
      </MarcaPage>
    )}
    {geo === "BR" && (<></>)}

    </Layout>
  )
}

export default SanrioPage