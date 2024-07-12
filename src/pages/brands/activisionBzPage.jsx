import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import ActivisionBanner from "../../images/desktop/marcas/activision/activisionBanner.webp"
import Spyro from "../../images/desktop/marcas/activision/spyro.png"
import Crash from "../../images/desktop/marcas/activision/crash.png"
import Call from "../../images/desktop/marcas/activision/callodduty.png"

const MgmPage = () => {


  return (
    <Layout>
      <MarcaPage backgroundImage={ActivisionBanner}>
        <img alt="marca" src={Spyro}/>
        <img alt="marca" src={Crash}/>
        <img alt="marca" src={Call}/>
      </MarcaPage>
    </Layout>
  )
}

export default MgmPage