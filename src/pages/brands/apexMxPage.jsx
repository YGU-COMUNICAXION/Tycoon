import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import ApexBanner from "../../images/desktop/marcas/apex/apexBanner.png"
import Hitech from "../../images/desktop/marcas/apex/hitec.png"
import PointCove from "../../images/desktop/marcas/apex/point.png"
import Hawwk from "../../images/desktop/marcas/apex/tonyhawk.png"
import Everyday from "../../images/desktop/marcas/apex/everyday.png"
import useGeo from '../../hooks/useGeo'

const ApexPage = () => {
  const geo = useGeo();  

  return (
    <Layout>
      <MarcaPage backgroundImage={ApexBanner}>
        <img src={Everyday}/>
        <img src={Hawwk}/>
        <img src={PointCove}/>
        <img src={Hitech}/>
      </MarcaPage>
    </Layout>
  )
}

export default ApexPage