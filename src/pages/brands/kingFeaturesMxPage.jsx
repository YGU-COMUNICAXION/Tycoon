import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import KingBanner from "../../images/desktop/marcas/kingfeatures/kingBanner.png"
import Olive from "../../images/desktop/marcas/kingfeatures/olive.png"
import Popeye from "../../images/desktop/marcas/kingfeatures/popeye.png"
import useGeo from '../../hooks/useGeo'

const KingPage = () => {
  const geo = useGeo();  

  return (
    <Layout>
      <MarcaPage backgroundImage={KingBanner}>
        <img src={Olive}/>
        <img src={Popeye}/>
      </MarcaPage>
    </Layout>
  )
}

export default KingPage