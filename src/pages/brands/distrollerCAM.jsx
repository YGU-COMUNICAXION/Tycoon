import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import DistrollerBanner from "../../images/desktop/marcas/distroller/distrollerBanner.png"
import Neonato from "../../images/desktop/marcas/distroller/neonato.png"
import Virgencita from "../../images/desktop/marcas/distroller/virgencita.png"
import Chamoy from "../../images/desktop/marcas/distroller/chamoy.png"

import useGeo from '../../hooks/useGeo'

const DistrollerPage = () => {
  const geo = useGeo();  

  return (
    <Layout>
      <MarcaPage backgroundImage={DistrollerBanner}>
        <img src={Neonato}/>
        <img src={Virgencita}/>
        <img src={Chamoy}/>
      </MarcaPage>
    </Layout>
  )
}

export default DistrollerPage