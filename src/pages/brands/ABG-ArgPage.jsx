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
const AbgCePage = () => {
  return (
    <Layout>
      <MarcaPage backgroundImage={AbgCelebsBanner}>
        <img alt="marca" src={Thalia}/>
        <img alt="marca" src={Muhhamad}/>
        <img alt="marca" src={Elvis}/>
        <img alt="marca" src={Marilyn}/>
        <img alt="marca" src={Shaq}/>
        <img alt="marca" src={Nautica}/>
        <img alt="marca" src={Nine}/>
        <img alt="marca" src={Aereopostal}/>
        <img alt="marca" src={Juicy}/>
        <img alt="marca" src={Jones}/>
      </MarcaPage>
    </Layout>
  )
}

export default AbgCePage