import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import MicrosoftBanner from "../../images/desktop/marcas/microsoft/microsoftBanner.png"
import Halo from "../../images/desktop/marcas/microsoft/halo.png"
import Xbox from "../../images/desktop/marcas/microsoft/xbox.png"
import useGeo from '../../hooks/useGeo'

const MicrosoftPage = () => {
  const geo = useGeo();  

  return (
    <Layout>
    {/* {geo === "AR" || geo === "MX" || geo === "CL" || geo === "PE" || geo === "CO" || geo === "EC" || geo === "CA" (
      <MarcaPage backgroundImage={MicrosoftBanner}>
        <img src={Xbox}/>
        <img src={Halo}/>
      </MarcaPage>
    )}
    {geo === "BR" && (<></>)} */}
    </Layout>
  )
}

export default MicrosoftPage