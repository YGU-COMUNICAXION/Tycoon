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
    {geo === "AR" && (<></>)}
    {geo === "MX" && (<>
      <MarcaPage backgroundImage={KingBanner}>
        <img src={Olive}/>
        <img src={Popeye}/>
      </MarcaPage>
    </>)}
    {geo === "CL" && (<></>)}
    {geo === "CO" || "EC" || "CA" (<>
      <MarcaPage backgroundImage={KingBanner}>
        <img src={Olive}/>
        <img src={Popeye}/>
      </MarcaPage>
    </>)}
    {geo === "BR" && (<></>)}
    {geo === "PE" && (<></>)}
    </Layout>
  )
}

export default KingPage