import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import SonnyBanner from "../../images/desktop/marcas/sony/sonyBanner.webp"
import Cobra from "../../images/desktop/marcas/sony/cobrakai.png"
import Ghost from "../../images/desktop/marcas/sony/ghost.png"
import useGeo from '../../hooks/useGeo'

const SonyPage = () => {
  const geo = useGeo();  

  return (
    <Layout>
      <MarcaPage backgroundImage={SonnyBanner}>
        <img src={Ghost}/>
        <img src={Cobra}/>
      </MarcaPage>
    </Layout>
  )
}

export default SonyPage