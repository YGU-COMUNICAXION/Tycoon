import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import AbgFashionBanner from "../../images/desktop/marcas/abgfashion/abgFBanner.png"
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

const AbgFaPage = () => {
  const geo = useGeo();  

  return (
    <Layout>
      <MarcaPage backgroundImage={AbgFashionBanner}>
        <img src={Nautica}/>
        <img src={Nine}/>
        <img src={Aereopostal}/>
        <img src={Juicy}/>
        <img src={Jones}/>
      </MarcaPage>
    </Layout>
  )
}

export default AbgFaPage