import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import SanrioBanner from "../../images/desktop/marcas/sanrio/sanrioBanner.png"
import Hello from "../../images/desktop/marcas/sanrio/hellokitty.png"

const SanrioPage = () => {

  return (
    <Layout>
      <MarcaPage backgroundImage={SanrioBanner}>
        <img alt="marca" src={Hello}/>
      </MarcaPage>
    </Layout>
  )
}

export default SanrioPage