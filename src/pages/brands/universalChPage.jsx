import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import UniversaBanner from "../../images/desktop/marcas/universal/universalBanner.png"
import JurasicW from "../../images/desktop/marcas/universal/jurasica-w.png"
import TrollsLight from "../../images/desktop/marcas/universal/trolls.png"
import TrollsDark from "../../images/desktop/marcas/universal/trollsblack.png"
import BabyDream from "../../images/desktop/marcas/universal/babydream.png"
import Kou from "../../images/desktop/marcas/universal/kou.png"
import Back2 from "../../images/desktop/marcas/universal/back2.png"
import Et from "../../images/desktop/marcas/universal/et.png"
import LaCasa from "../../images/desktop/marcas/universal/lacasade.png"
import Monsters from "../../images/desktop/marcas/universal/monsters.png"
import Waldo from "../../images/desktop/marcas/universal/waldo.png"
import Jurassic from "../../images/desktop/marcas/universal/jurassic.png"
import Jaws from "../../images/desktop/marcas/universal/jaws.png"
import Woody from "../../images/desktop/marcas/universal/woody.png"
import LittleLulu from "../../images/desktop/marcas/universal/littlelulu.png"
import GabbysDoll from "../../images/desktop/marcas/universal/gabbysdollhouse.png"
import Pets from "../../images/desktop/marcas/universal/pets.png"
import Spirit from "../../images/desktop/marcas/universal/spirit.png"
import Madagascar from "../../images/desktop/marcas/universal/madagascar.png"
import Sherk from "../../images/desktop/marcas/universal/shrek.png"
import Dragons from "../../images/desktop/marcas/universal/dragons.png"
import Olivia from "../../images/desktop/marcas/universal/olivia.png"
import Felix from "../../images/desktop/marcas/universal/felix.png"
import Fast from "../../images/desktop/marcas/universal/fastfurious.png"
import Puss from "../../images/desktop/marcas/universal/puss.png"
import Sing from "../../images/desktop/marcas/universal/sing.png"
import Casper from "../../images/desktop/marcas/universal/casper.png"
import Curious from "../../images/desktop/marcas/universal/curiousgorge.png"
import Minions from "../../images/desktop/marcas/universal/minions.png"
import useGeo from '../../hooks/useGeo'

const UniversalPage = () => {
  const geo = useGeo();  

  return (
    <Layout>
      <MarcaPage backgroundImage={UniversaBanner}>
        <img src={BabyDream}/>
        <img src={Back2}/>
        <img src={Casper}/>
        <img src={Curious}/>
        <img src={Dragons}/>
        <img src={Et}/>
        <img src={Fast}/>
        <img src={Felix}/>
        <img src={GabbysDoll}/>
        <img src={Jaws}/>
        <img src={Jurassic}/>
        <img src={JurasicW}/>
        <img src={Kou}/>
        <img src={LaCasa}/>
        <img src={LittleLulu}/>
        <img src={Madagascar}/>
        <img src={Minions}/>
        <img src={Monsters}/>
        <img src={Olivia}/>
        <img src={Pets}/>
        <img src={Puss}/>
        <img src={Sherk}/>
        <img src={Sing}/>
        <img src={Spirit}/>
        <img src={TrollsDark}/>
        <img src={Waldo}/>
        <img src={Woody}/>
      </MarcaPage>
    </Layout>
  )
}

export default UniversalPage