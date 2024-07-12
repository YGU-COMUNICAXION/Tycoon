import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import PepsicoBanner from "../../images/desktop/marcas/pepsico/pepsicoBanner.webp"
import Cheetos from "../../images/desktop/marcas/pepsico/cheetos.png"
import DoritoslIght from "../../images/desktop/marcas/pepsico/doritoslight.png"
import Sevenup from "../../images/desktop/marcas/pepsico/7up.png"
import Lays from "../../images/desktop/marcas/pepsico/lays.png"
import PepsiRound from "../../images/desktop/marcas/pepsico/pepsiround.png"

const PepsicoPage = () => {

  return (
    <Layout>
      <MarcaPage backgroundImage={PepsicoBanner}>
        <img alt="marca" src={PepsiRound}/>
        <img alt="marca" src={Sevenup}/>
        <img alt="marca" src={Cheetos}/>
        <img alt="marca" src={DoritoslIght}/>
        <img alt="marca" src={Lays}/>
      </MarcaPage>
    </Layout>
  )
}

export default PepsicoPage