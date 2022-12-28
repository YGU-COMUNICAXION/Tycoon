import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import KellogsBanner from "../../images/desktop/marcas/kelloggs/kellogsBanner.png"
import EspecialK from "../../images/desktop/marcas/kelloggs/especialk.png"
import Froot from "../../images/desktop/marcas/kelloggs/froot.png"
import PopTarts from "../../images/desktop/marcas/kelloggs/poptarts.png"
import Eggo from "../../images/desktop/marcas/kelloggs/eggo.png"
import Pringles from "../../images/desktop/marcas/kelloggs/pringles.png"
import CornFlakes from "../../images/desktop/marcas/kelloggs/cornflakes.png"
import ChocoCrispis from "../../images/desktop/marcas/kelloggs/chocokrispis.png"
import Zucaritas from "../../images/desktop/marcas/kelloggs/zucaritas.png"
import RiceKrispies from "../../images/desktop/marcas/kelloggs/ricekrispies.png"
import useGeo from '../../hooks/useGeo'

const KellogsPage = () => {
  const geo = useGeo();  

  return (
    <Layout>
    {/* {geo === "AR" && (<></>)}
    {geo === "MX" && (
      <MarcaPage backgroundImage={KellogsBanner}>
        <img src={EspecialK}/>
        <img src={RiceKrispies}/>
        <img src={PopTarts}/>
        <img src={Froot}/>
        <img src={Eggo}/>
        <img src={CornFlakes}/>
        <img src={ChocoCrispis}/>
        <img src={Zucaritas}/>
        <img src={Pringles}/>
      </MarcaPage>
    )}
    {geo === "CL" && (<></>)}
    {geo === "CO" && (<></>)}
    {geo === "BR" && (<></>)}
    {geo === "PE" && (<></>)}
    {geo === "EC" && (<></>)}
    {geo === "CA" && (<></>)} */}
    </Layout>
  )
}

export default KellogsPage