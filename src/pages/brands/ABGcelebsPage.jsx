import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import AbgCelebsBanner from "../../images/desktop/marcas/abgceleb/abgCBanner.png"
import Thalia from "../../images/desktop/marcas/abgceleb/thalia.png"
import Muhhamad from "../../images/desktop/marcas/abgceleb/muhhamad.png"
import Elvis from "../../images/desktop/marcas/abgceleb/elvis.png"
import Marilyn from "../../images/desktop/marcas/abgceleb/marilyn.png"
import Shaq from "../../images/desktop/marcas/abgceleb/shaq.png"
import useGeo from '../../hooks/useGeo'

const AbgCePage = () => {
  const geo = useGeo();  

  return (
    <Layout>
    {/* {geo === "AR" || geo === "CL" || geo === "PE" (<>
      <MarcaPage backgroundImage={AbgCelebsBanner}>
        <img src={Thalia}/>
        <img src={Muhhamad}/>
        <img src={Elvis}/>
        <img src={Marilyn}/>
        <img src={Shaq}/>
      </MarcaPage>
    </>)}
    {geo === "MX" && (<></>)}
    {geo === "CO" && (<></>)}
    {geo === "BR" && (<></>)}
    {geo === "EC" && (<></>)}
    {geo === "CA" && (<></>)} */}
    </Layout>
  )
}

export default AbgCePage