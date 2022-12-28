import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import ActivisionBanner from "../../images/desktop/marcas/activision/activisionBanner.png"
import Spyro from "../../images/desktop/marcas/activision/spyro.png"
import Crash from "../../images/desktop/marcas/activision/crash.png"
import Call from "../../images/desktop/marcas/activision/callodduty.png"
import useGeo from '../../hooks/useGeo'

const MgmPage = () => {
  const geo = useGeo();  

  return (
    <Layout>
    {geo === "AR" && (<></>)}
    {geo === "MX" && (<></>)}
    {geo === "CL" && (<></>)}
    {geo === "CO" && (<></>)}
    {geo === "BR" && (
      <MarcaPage backgroundImage={ActivisionBanner}>
        <img src={Spyro}/>
        <img src={Crash}/>
        <img src={Call}/>
      </MarcaPage>
    )}
    {geo === "PE" && (<></>)}
    {geo === "EC" && (<></>)}
    {geo === "CA" && (<></>)}
    </Layout>
  )
}

export default MgmPage