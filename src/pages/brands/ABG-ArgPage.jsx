import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import AbgCelebsBanner from "../../images/desktop/marcas/abgBanner.png"
import Thalia from "../../images/desktop/marcas/abgceleb/thalia.png"
import Muhhamad from "../../images/desktop/marcas/abgceleb/muhhamad.png"
import Elvis from "../../images/desktop/marcas/abgceleb/elvis.png"
import Marilyn from "../../images/desktop/marcas/abgceleb/marilyn.png"
import Shaq from "../../images/desktop/marcas/abgceleb/shaq.png"
import Aereopostal from "../../images/desktop/marcas/abgfashion/aereopostale.png"
import Juicy from "../../images/desktop/marcas/abgfashion/juicy.png"
import Nine from "../../images/desktop/marcas/abgfashion/nine.png"
import Jones from "../../images/desktop/marcas/abgfashion/jones.png"
import Nautica from "../../images/desktop/marcas/abgfashion/nautica.png"
import useGeo from '../../hooks/useGeo'

const AbgCePage = () => {
  const geo = useGeo();  

  return (
    <Layout>
      <MarcaPage backgroundImage={AbgCelebsBanner}>
        <img src={Thalia}/>
        <img src={Muhhamad}/>
        <img src={Elvis}/>
        <img src={Marilyn}/>
        <img src={Shaq}/>
        <img src={Nautica}/>
        <img src={Nine}/>
        <img src={Aereopostal}/>
        <img src={Juicy}/>
        <img src={Jones}/>
      </MarcaPage>
    </Layout>
  )
}

export default AbgCePage