
import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import FifaBanner from "../../images/desktop/marcas/fifa/fifaBanner.webp"
import FifaWomen from "../../images/desktop/marcas/fifa/fifawomen.png"
import FifaUnder from "../../images/desktop/marcas/fifa/fifaunder.png"
import Qtar from "../../images/desktop/marcas/fifa/qatar.png"

const FifaPage = () => {

  return (
    <Layout>
      <MarcaPage backgroundImage={FifaBanner}>
        <img alt="marca" src={FifaUnder}/>
        <img alt="marca" src={Qtar}/>
        <img alt="marca" src={FifaWomen}/>
      </MarcaPage>
    </Layout>
  )
}

export default FifaPage