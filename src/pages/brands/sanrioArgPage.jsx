import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import SanrioBanner from "../../images/desktop/marcas/sanrio/sanrioBanner.png"
import AggRetsuko from "../../images/desktop/marcas/sanrio/aggretsuko.png"
import Gudetama from "../../images/desktop/marcas/sanrio/gudetama.png"
import HelloFriends from "../../images/desktop/marcas/sanrio/hellofriends.png"
import Hello from "../../images/desktop/marcas/sanrio/hellokitty.png"

const SanrioPage = () => {

  return (
    <Layout>
      <MarcaPage backgroundImage={SanrioBanner}>
        <img alt="marca" src={Hello}/>
        <img alt="marca" src={HelloFriends}/>
        <img alt="marca" src={Gudetama}/>
        <img alt="marca" src={AggRetsuko}/>
      </MarcaPage>
    </Layout>
  )
}

export default SanrioPage