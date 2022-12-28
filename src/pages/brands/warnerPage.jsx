import React from 'react'
import Layout from '../../components/layout'
import MarcaPage from '../../components/marcaPage'
import WarnerBanner from "../../images/desktop/marcas/warner/warnerbrosBanner.png"
import Batman from "../../images/desktop/marcas/warner/vatman.png"
import Superman from "../../images/desktop/marcas/warner/superman.png"
import Justice from "../../images/desktop/marcas/warner/justice.png"
import Wonder from "../../images/desktop/marcas/warner/wonderwoman.png"
import Looney from "../../images/desktop/marcas/warner/looney.png"
import Scooby from "../../images/desktop/marcas/warner/scooby.png"
import BareBears from "../../images/desktop/marcas/warner/barebears.png"
import Steven from "../../images/desktop/marcas/warner/steven.png"
import CowChiken from "../../images/desktop/marcas/warner/vacaypollito.png"
import Chowder from "../../images/desktop/marcas/warner/chowder.png"
import Fantastic from "../../images/desktop/marcas/warner/fantasticbeast.png"
import SexandCity from "../../images/desktop/marcas/warner/sexandthecity.png"
import Thunder from "../../images/desktop/marcas/warner/thundercats.png"
import It from "../../images/desktop/marcas/warner/it.png"
import Exorcist from "../../images/desktop/marcas/warner/theexorcist.png"
import Gilmore from "../../images/desktop/marcas/warner/gilmore.png"
import TeenTitans from "../../images/desktop/marcas/warner/teentitans.png"
import FlintStones from "../../images/desktop/marcas/warner/flinbtstones.png"
import TomJerry from "../../images/desktop/marcas/warner/tomjerry.png"
import AdventureTime from "../../images/desktop/marcas/warner/adventuretime.png"
import Dexter from "../../images/desktop/marcas/warner/dexter.png"
import RegularShow from "../../images/desktop/marcas/warner/regularshow.png"
import Edd from "../../images/desktop/marcas/warner/edeededdy.png"
import Got from "../../images/desktop/marcas/warner/got.png"
import Friends from "../../images/desktop/marcas/warner/friends.png"
import Lord from "../../images/desktop/marcas/warner/lord.png"
import Gremlins from "../../images/desktop/marcas/warner/gremlins.png"
import Friday from "../../images/desktop/marcas/warner/friday.png"
import Riverdale from "../../images/desktop/marcas/warner/riverdale.png"
import Nightmare from "../../images/desktop/marcas/warner/Anightmare.png"
import Gossip from "../../images/desktop/marcas/warner/gossip.png"
import Bigbang from "../../images/desktop/marcas/warner/thebigbangtheory.png"
import SuperFriends from "../../images/desktop/marcas/warner/superfriends.png"
import Jetsons from "../../images/desktop/marcas/warner/jetsons.png"
import RickMorty from "../../images/desktop/marcas/warner/rickandmorty.png"
import Ben10 from "../../images/desktop/marcas/warner/ben10.png"
import JhonyBravo from "../../images/desktop/marcas/warner/johnybravo.png"
import Weasel from "../../images/desktop/marcas/warner/iamweasel.png"
import Gumbnail from "../../images/desktop/marcas/warner/gumball.png"
import House from "../../images/desktop/marcas/warner/houseofthedragon.png"
import Beetlejuice from "../../images/desktop/marcas/warner/beetlejuice.png"
import MortalKombat from "../../images/desktop/marcas/warner/mortalkombat.png"
import Annabelle from "../../images/desktop/marcas/warner/annabelle.png"
import SuperHeroG from "../../images/desktop/marcas/warner/superherogirls.png"
import Wacky from "../../images/desktop/marcas/warner/wacky.png"
import Cartoon from "../../images/desktop/marcas/warner/cartoonnetwokr.png"
import Powerpuff from "../../images/desktop/marcas/warner/powerpuff.png"
import Courage from "../../images/desktop/marcas/warner/courage.png"
import Billy from "../../images/desktop/marcas/warner/billyandmandy.png"
import WillyWonka from "../../images/desktop/marcas/warner/wonka.png"
import HarryPotter from "../../images/desktop/marcas/warner/harrypotter.png"
import Matrix from "../../images/desktop/marcas/warner/matrix.png"
import Horror from "../../images/desktop/marcas/warner/horror.png"
import Llorona from "../../images/desktop/marcas/warner/lallorona.png"
import Dc from "../../images/desktop/marcas/warner/dc.png"
import useGeo from '../../hooks/useGeo'

const WarnerPage = () => {
  const geo = useGeo();  

  return (
    <Layout>
    {geo === "AR" && (<>
      <MarcaPage backgroundImage={WarnerBanner}>
        <img src={Dc}/>
        <img src={Justice}/>
        <img src={Batman}/>
        <img src={Superman}/>
        <img src={Wonder}/>
        <img src={TeenTitans}/>
        <img src={SuperFriends}/>
        <img src={SuperHeroG}/>
        <img src={Looney}/>
        <img src={FlintStones}/>
        <img src={Jetsons}/>
        <img src={Wacky}/>
        <img src={Scooby}/>
        <img src={TomJerry}/>
        <img src={RickMorty}/>
        <img src={Cartoon}/>
        <img src={BareBears}/>
        <img src={AdventureTime}/>
        <img src={Ben10}/>
        <img src={Powerpuff}/>
        <img src={Steven}/>
        <img src={Dexter}/>
        <img src={JhonyBravo}/>
        <img src={Courage}/>
        <img src={CowChiken}/>
        <img src={RegularShow}/>
        <img src={Weasel}/>
        <img src={Billy}/>
        <img src={Chowder}/>
        <img src={Edd}/>
        <img src={Gumbnail}/>
        <img src={WillyWonka}/>
        <img src={Fantastic}/>
        <img src={Got}/>
        <img src={House}/>
        <img src={HarryPotter}/>
        <img src={SexandCity}/>
        <img src={Friends}/>
        <img src={Beetlejuice}/>
        <img src={Matrix}/>
        <img src={Thunder}/>
        <img src={Lord}/>
        <img src={MortalKombat}/>
        <img src={Horror}/>
        <img src={It}/>
        <img src={Gremlins}/>
        <img src={Annabelle}/>
        <img src={Llorona}/>
        <img src={Exorcist}/>
        <img src={Friday}/>
      </MarcaPage>
    </>)}
    {geo === "MX" && (<></>)}
    {geo === "CL" && (<>
      <MarcaPage backgroundImage={WarnerBanner}>
        <img src={Dc}/>
        <img src={Justice}/>
        <img src={Batman}/>
        <img src={Superman}/>
        <img src={Wonder}/>
        <img src={TeenTitans}/>
        <img src={SuperFriends}/>
        <img src={SuperHeroG}/>
        <img src={Looney}/>
        <img src={FlintStones}/>
        <img src={Jetsons}/>
        <img src={Wacky}/>
        <img src={Scooby}/>
        <img src={TomJerry}/>
        <img src={RickMorty}/>
        <img src={Cartoon}/>
        <img src={BareBears}/>
        <img src={AdventureTime}/>
        <img src={Ben10}/>
        <img src={Powerpuff}/>
        <img src={Steven}/>
        <img src={Dexter}/>
        <img src={JhonyBravo}/>
        <img src={Courage}/>
        <img src={CowChiken}/>
        <img src={RegularShow}/>
        <img src={Weasel}/>
        <img src={Billy}/>
        <img src={Chowder}/>
        <img src={Edd}/>
        <img src={Gumbnail}/>
        <img src={WillyWonka}/>
        <img src={Fantastic}/>
        <img src={Got}/>
        <img src={House}/>
        <img src={HarryPotter}/>
        <img src={SexandCity}/>
        <img src={Friends}/>
        <img src={Beetlejuice}/>
        <img src={Matrix}/>
        <img src={Thunder}/>
        <img src={Lord}/>
        <img src={MortalKombat}/>
        <img src={Horror}/>
        <img src={It}/>
        <img src={Gremlins}/>
        <img src={Annabelle}/>
        <img src={Llorona}/>
        <img src={Exorcist}/>
        <img src={Friday}/>
        <img src={Nightmare}/>
        <img src={Bigbang}/>
        <img src={Gilmore}/>
        <img src={Riverdale}/>
        <img src={Gossip}/>
      </MarcaPage>
    </>)}
    {geo === "CO" && (<></>)}
    {geo === "BR" && (<></>)}
    {geo === "PE" && (<></>)}
    {geo === "EC" && (<></>)}
    {geo === "CA" && (<></>)}
    </Layout>
  )
}

export default WarnerPage