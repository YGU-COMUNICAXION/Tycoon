import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import MicrosoftBanner from "../../images/desktop/marcas/microsoft/microsoftBanner.png"
import Halo from "../../images/desktop/marcas/microsoft/halo.png"
import Xbox from "../../images/desktop/marcas/microsoft/xbox.png"

const MicrosoftPage = () => {

  return (
    <Layout>
      <MarcaPage backgroundImage={MicrosoftBanner}>
        <img alt="marca" src={Xbox}/>
        <img alt="marca" src={Halo}/>
      </MarcaPage>
    </Layout>
  )
}

export default MicrosoftPage