import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import MoonbugBanner from "../../images/desktop/marcas/moonbug/moonbugBanner.png"
import Coocomelon from "../../images/desktop/marcas/moonbug/cocomelon.png"
import Blippi from "../../images/desktop/marcas/moonbug/blippi.png"
import useGeo from '../../hooks/useGeo'

const MoonbugPage = () => {
  const geo = useGeo();  

  return (
    <Layout>
    {geo === "AR" || geo === "MX" || geo === "CL" || geo === "CO" || geo === "PE" || geo === "EC" || geo === "CA"(<>
      <MarcaPage backgroundImage={MoonbugBanner}>
        <img src={Coocomelon}/>
        <img src={Blippi}/>
      </MarcaPage>
    </>)}
    {geo === "BR" && (<></>)}
    </Layout>
  )
}

export default MoonbugPage