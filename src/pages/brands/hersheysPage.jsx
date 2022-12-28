import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import HersheysBanner from "../../images/desktop/marcas/hersheys/hersheysBanner.png"
import Reeses from "../../images/desktop/marcas/hersheys/reeses.png"
import Kisses from "../../images/desktop/marcas/hersheys/kisses.png"
import Joly from "../../images/desktop/marcas/hersheys/joly.png"
import Pelon from "../../images/desktop/marcas/hersheys/pelon.png"
import HersheysW from "../../images/desktop/marcas/hersheys/hersheys.png"

import useGeo from '../../hooks/useGeo'

const HersheysPage = () => {
  const geo = useGeo();  

  return (
    <Layout>
    {geo === "AR" && (<></>)}
    {geo === "MX" && (
      <MarcaPage backgroundImage={HersheysBanner}>
        <img src={HersheysW}/>
        <img src={Joly}/>
        <img src={Kisses}/>
        <img src={Reeses}/>
        <img src={Pelon}/>
      </MarcaPage>
    )}
    {geo === "CL" && (<></>)}
    {geo === "CO" || geo === "EC" || geo === "CA" (
      <MarcaPage backgroundImage={HersheysBanner}>
        <img src={HersheysW}/>
        <img src={Joly}/>
        <img src={Kisses}/>
        <img src={Reeses}/>
      </MarcaPage>
    )}
    {geo === "BR" && (<></>)}
    {geo === "PE" && (<></>)}
    </Layout>
  )
}

export default HersheysPage