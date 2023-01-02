import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import ActivisionBanner from "../../images/desktop/marcas/activision/activisionBanner.webp"
import Spyro from "../../images/desktop/marcas/activision/spyro.png"
import Crash from "../../images/desktop/marcas/activision/crash.png"
import Call from "../../images/desktop/marcas/activision/callodduty.png"
import useGeo from '../../hooks/useGeo'

const MgmPage = () => {
  const geo = useGeo();  

  return (
    <Layout>
      <MarcaPage backgroundImage={ActivisionBanner}>
        <img src={Spyro}/>
        <img src={Crash}/>
        <img src={Call}/>
      </MarcaPage>
    </Layout>
  )
}

export default MgmPage