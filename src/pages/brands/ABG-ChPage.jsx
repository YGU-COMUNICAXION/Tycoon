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
import Prince from "../../images/desktop/marcas/abgfashion/prince.png"
import Izod from "../../images/desktop/marcas/abgfashion/izod.png"
import Airwalk from "../../images/desktop/marcas/abgfashion/airwalk.png"
import Eddie from "../../images/desktop/marcas/abgfashion/eddiebauer.png"
import Rebook from "../../images/desktop/marcas/abgfashion/rebook.png"
import Spyder from "../../images/desktop/marcas/abgfashion/spyder.png"
import Lucky from "../../images/desktop/marcas/abgfashion/luckyb.png"
import Sports from "../../images/desktop/marcas/abgfashion/sports.png"
import Tapout from "../../images/desktop/marcas/abgfashion/tapout.png"
import Vision from "../../images/desktop/marcas/abgfashion/visionstreet.png"
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
        <img src={Airwalk}/>
        <img src={Spyder}/>
        <img src={Tapout}/>
        <img src={Prince}/>
        <img src={Eddie}/>
        <img src={Lucky}/>
        <img src={Vision}/>
        <img src={Izod}/>
        <img src={Rebook}/>
        <img src={Sports}/>
      </MarcaPage>
    </Layout>
  )
}

export default AbgCePage