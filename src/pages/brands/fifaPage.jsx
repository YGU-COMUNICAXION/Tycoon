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
    {geo === "AR" && (
      <MarcaPage backgroundImage={FifaBanner}>
        <img src={FifaUnder}/>
        <img src={Qtar}/>
        <img src={FifaWomen}/>
      </MarcaPage>
    )}
    {geo === "MX" && (
      <MarcaPage backgroundImage={FifaBanner}>
        <img src={FifaUnder}/>
        <img src={Qtar}/>
        <img src={FifaUnder}/>
      </MarcaPage>
    )}
    {/* {geo === "CL" && (<></>)}
    {geo === "CO" || geo === "EC" || geo === "CA" (
      <MarcaPage backgroundImage={FifaBanner}>
        <img src={FifaRight}/>
        <img src={FifaWomen}/>
      </MarcaPage>
    )} */}
    {(geo === "CO" || geo === "EC" || geo === "Ca") && (
      <MarcaPage backgroundImage={FifaBanner}>
        <img src={FifaRight}/>
        <img src={FifaWomen}/>
      </MarcaPage>
    )}
    {geo === "BR" && (
      <MarcaPage backgroundImage={FifaBanner}>
        <img src={Fifasimple}/>
        <img src={Qtar}/>
        <img src={FifaWomen}/>
      </MarcaPage>
    )}
    {geo === "PE" && (<></>)}
    </Layout>
  )
}

export default FifaPage