
import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import FifaBanner from "../../images/desktop/marcas/fifa/fifaBanner.png"
import FifaWomen from "../../images/desktop/marcas/fifa/fifawomen.png"
import FifaUnder from "../../images/desktop/marcas/fifa/fifaunder.png"
import Qtar from "../../images/desktop/marcas/fifa/qatar.png"
import Fifasimple from "../../images/desktop/marcas/fifa/fifasimple.png"
import FifaRight from "../../images/desktop/marcas/fifa/fifaRight.png"
import useGeo from '../../hooks/useGeo'

const FifaPage = () => {
  const geo = useGeo();  

  return (
    <Layout>
      <MarcaPage backgroundImage={FifaBanner}>
        <img src={FifaUnder}/>
        <img src={Qtar}/>
        <img src={FifaWomen}/>
      </MarcaPage>
    </Layout>
  )
}

export default FifaPage