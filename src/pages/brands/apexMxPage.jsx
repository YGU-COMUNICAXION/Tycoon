import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import ApexBanner from "../../images/desktop/marcas/apex/apexBanner.png"
import Hitech from "../../images/desktop/marcas/apex/hitec.png"
import PointCove from "../../images/desktop/marcas/apex/point.png"
import Hawwk from "../../images/desktop/marcas/apex/tonyhawk.png"
import Everyday from "../../images/desktop/marcas/apex/everyday.png"

const ApexPage = () => {
  return (
    <Layout>
      <MarcaPage backgroundImage={ApexBanner}>
        <img alt="marca" src={Everyday}/>
        <img alt="marca" src={Hawwk}/>
        <img alt="marca" src={PointCove}/>
        <img alt="marca" src={Hitech}/>
      </MarcaPage>
    </Layout>
  )
}

export default ApexPage