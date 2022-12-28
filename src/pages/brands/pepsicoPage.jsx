import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import PepsicoBanner from "../../images/desktop/marcas/pepsico/pepsicoBanner.png"
import Sabritas from "../../images/desktop/marcas/pepsico/sabritas.png"
import Cheetos from "../../images/desktop/marcas/pepsico/cheetos.png"
import DoritoslIght from "../../images/desktop/marcas/pepsico/doritoslight.png"
import DoritosDark from "../../images/desktop/marcas/pepsico/doritosdark.png"
import Pepsi from "../../images/desktop/marcas/pepsico/pepsi.png"
import Sevenup from "../../images/desktop/marcas/pepsico/7up.png"
import Lays from "../../images/desktop/marcas/pepsico/lays.png"
import PepsiRound from "../../images/desktop/marcas/pepsico/pepsiround.png"
import useGeo from '../../hooks/useGeo'

const PepsicoPage = () => {
  const geo = useGeo();  

  return (
    <Layout>
    {/* {geo === "AR" || geo === "CL" || geo === "PE" || geo === "CO" || geo === "EC" || geo === "CA"(<>
      <MarcaPage backgroundImage={PepsicoBanner}>
        <img src={PepsiRound}/>
        <img src={Sevenup}/>
        <img src={Cheetos}/>
        <img src={DoritoslIght}/>
        <img src={Lays}/>
      </MarcaPage>
    </>)}
    {geo === "MX" && (<>
      <MarcaPage backgroundImage={PepsicoBanner}>
        <img src={PepsiRound}/>
        <img src={Sevenup}/>
        <img src={Cheetos}/>
        <img src={Sabritas}/>
        <img src={DoritoslIght}/>
      </MarcaPage>
    </>)}
    {geo === "BR" && (<></>)} */}
    </Layout>
  )
}

export default PepsicoPage