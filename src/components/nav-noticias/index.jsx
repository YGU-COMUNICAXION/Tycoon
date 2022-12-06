import React, {useState, useEffect} from 'react';
import "./styles.css"
import { useTranslation } from "gatsby-plugin-react-i18next";
import Nav from 'react-bootstrap/Nav';
import NoticiasCard from '../noticias-card';
import Cobra from "../../images/mobile/noticias/noticiasRecientes/cobra.png"
import Nuevo from "../../images/mobile/noticias/noticiasRecientes/nuevo.png"
import useWindowSize from '../../hooks/useWindowSize';
import Button from '../button';
import HelloKitty22 from "../../images/desktop/noticias/2022/HELLO-KITTY.png"
import PinkPantherLanza from "../../images/desktop/noticias/2022/COLECCION-PINK-PANTHER.png"
import PlayerasHoodies from "../../images/desktop/noticias/2022/PLAYERAS-HOODIES.png"
import PonteRosa from "../../images/desktop/noticias/2022/19-OCT.png"
import ColeccionXbox from "../../images/desktop/noticias/2022/COLECCION-XBOX.png"
import AutoExploracion from "../../images/desktop/noticias/2022/AUTOEXPLORACION.png"
import CausaRosa from "../../images/desktop/noticias/2022/CAUSAROSA.png"
import Koaj2022 from "../../images/desktop/noticias/2022/KOAJ.png"
import VianneyXbox from "../../images/desktop/noticias/2022/VIANNEY.png"
import PopeyeKOAJ from "../../images/desktop/noticias/2022/POPEYEKOAJ.png"
import ArgentinaAmong from "../../images/desktop/noticias/2022/ARG-AMONG.png"
import KaratePeru from "../../images/desktop/noticias/2022/KARATE-PERU.png"
import AmongLLega from "../../images/desktop/noticias/noticiasRecientes/among.png"
import Warner from "../../images/desktop/noticias/2021/WARNER.png"
import CaminaKitty from "../../images/desktop/noticias/2021/TENIS-HELLOKITTY.png"
import ColeccionPantera from "../../images/desktop/noticias/2020/COLECCION-EXCLUSIVA.png"
import Crayola from "../../images/desktop/noticias/2020/CRAYOLA.png"
import MasterChef from "../../images/desktop/noticias/2020/VASCONIA.png"
import TycoonDia from "../../images/desktop/noticias/2020/TYCOON-ENTERPRISES.png"
import Endemol from "../../images/desktop/noticias/2020/MASTERCHEF.png"
import ColDistroller from "../../images/desktop/noticias/2020/DISTROLLER.png"
import Balleys from "../../images/desktop/noticias/2020/UPS.png"
import Facebook from "../../images/mobile/noticiasCard/icon-facebook.png"
import Instagram from "../../images/mobile/noticiasCard/icon-instagram.png"
import Mas from "../../images/mobile/noticiasCard/botón-mas.png"
import LinkedIn from "../../images/desktop/layout/header/icon-linkedin.png"
import AnaEmilia from "../../images/desktop/noticias/2022/anaEmilia.png"
import Amarillo from "../../images/desktop/noticias/2022/pintarondeamarillo.png"
import CampañaChile from "../../images/desktop/noticias/2022/campaña360.png"
import DunkinMinions from "../../images/desktop/noticias/2022/dunkinMinion.png"
import Minione from "../../images/desktop/noticias/2022/minionsEcuador.png"
import Narutomx from "../../images/desktop/noticias/2022/coleccionNaruto.png"
import atunMinion from "../../images/desktop/noticias/2022/tunaminion.png"
import LolyColeccion from "../../images/desktop/noticias/2022/lolyintheSky.png"
import SaborHer from "../../images/desktop/noticias/2022/hersheysSabor.png"
import BebidaJurasic from "../../images/desktop/noticias/2022/bebidaRaptos.png"
import HarryWal from "../../images/desktop/noticias/2022/harryWalmart.png"
import Olive from "../../images/desktop/noticias/2022/oliveOyl.png"
import CrayolaMayo from "../../images/desktop/noticias/2022/mccromickCrayola.png"
import Tycum from "../../images/desktop/noticias/2022/tycoon32.png"
import Unwind from "../../images/desktop/noticias/2022/unwind.png"
import HaloChamp from "../../images/desktop/noticias/2022/haloChampionship.png"
import JurasicLatam from "../../images/desktop/noticias/2022/jurasicLATAM.png"
import PumaFrida from "../../images/desktop/noticias/2022/PUMAFRIDA.png"
import Fridacien from "../../images/desktop/noticias/2022/FRIDA115.png"
import AlpinaMinion from "../../images/desktop/noticias/2022/alpinaMinions.png"
import BleachPeru from "../../images/desktop/noticias/2022/BleachPeru.png"
import JurasicLanza from "../../images/desktop/noticias/2022/jurasiclanzamientos.png"
import FelicidadesCo from "../../images/desktop/noticias/2022/felicidadesCocoMelon.png"
import HelloCo from "../../images/desktop/noticias/2022/helloKittiColombia.png"
import FelicidadesGhost from "../../images/desktop/noticias/2022/felicidadesGhost.png"
import CerealHer from "../../images/desktop/noticias/2022/cerealHersheys.png"
import AnaEmiliaHBO from "../../images/desktop/noticias/2022/anaEmiliaHBO.png"
import CarreraHello from "../../images/desktop/noticias/2022/CARRERAHELLOKITTY.png"
import MagiaHarry from "../../images/desktop/noticias/2022/laMagiaHarry.png"
import HalloPara from "../../images/desktop/noticias/2022/halloParamount.png"
import BalleysMont from "../../images/desktop/noticias/2022/belleysMont.png"
import ChupaShampoo from "../../images/desktop/noticias/2022/chupachupsShampoo.png"
import TodosPodemos from "../../images/desktop/noticias/2022/todosChefs.png"
import SerieHalo from "../../images/desktop/noticias/2022/haloSerie.png"
import deathNote from "../../images/desktop/noticias/2022/deathNote.png"
import VansCrayola from "../../images/desktop/noticias/2022/vansCrayola.png"
import Vikings from "../../images/desktop/noticias/2022/vikingsValhalla.png"
import DulzuraHello from "../../images/desktop/noticias/2022/dulzuraHello.png"
import HelloCafe from "../../images/desktop/noticias/2022/helloCafe.png"

function NewsNav() {
    const [active, setActive] = useState(1)
    const { t } = useTranslation("news");
    const windowSize = useWindowSize();
    const [page2, setPage2] = useState("nada");
    const [page3, setPage3] = useState("nada");
    const [page4, setPage4] = useState("nada");
    const [page5, setPage5] = useState("nada");
    const [page6, setPage6] = useState("nada");
    const [page7, setPage7] = useState("nada");
    const [page8, setPage8] = useState("nada");
    const [page9, setPage9] = useState("nada");


    return (
        <div className='noticiasPageMainDiv'>
            <Nav fill variant="tabs" activeKey={active}>
                <Nav.Item onClick={()=> {setActive(1); setPage2("nada"); setPage3("nada"); setPage4("nada"); setPage5("nada"); setPage6("nada"); setPage7("nada"); setPage8("nada"); setPage9("nada")}}>
                    <Nav.Link eventKey="link-1">2022</Nav.Link>
                </Nav.Item>
                <div className="navDivisor"/>
                <Nav.Item onClick={()=> {setActive(2); setPage2("nada"); setPage3("nada"); setPage4("nada"); setPage5("nada"); setPage6("nada"); setPage7("nada"); setPage8("nada"); setPage9("nada")}}>
                    <Nav.Link eventKey="link-2">2021</Nav.Link>
                </Nav.Item>
                <div className="navDivisor"/>
                <Nav.Item onClick={()=> {setActive(3); ; setPage2("nada"); setPage3("nada"); setPage4("nada"); setPage5("nada"); setPage6("nada"); setPage7("nada"); setPage8("nada"); setPage9("nada")}}>
                    <Nav.Link eventKey="link-3">2020</Nav.Link>
                </Nav.Item>
            </Nav>
            <div className='noticiasGrid'>
            {windowSize < 752? (
                <>
                    {active === 1 && (
                        <>
                            <div className='noticiasRow'>
                                <NoticiasCard image={HelloKitty22} title={t("HelloKitty22")} date={t("HelloKitty22DATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                    <img src={LinkedIn} className="mas"/>
                                </NoticiasCard>
                                <NoticiasCard image={PinkPantherLanza} title={t("PinkPantherLanza")} date={t("PinkPantherLanzaDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                    <img src={LinkedIn} className="mas"/>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={PlayerasHoodies} title={t("PlayerasHoodies")} date={t("PlayerasHoodiesDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                    <img src={LinkedIn} className="mas"/>
                                </NoticiasCard>
                                <NoticiasCard image={PonteRosa} title={t("PonteRosa")} date={t("PonteRosaDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                    <img src={LinkedIn} className="mas"/>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={ColeccionXbox} title={t("ColeccionXbox")} date={t("ColeccionXboxDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                    <img src={LinkedIn} className="mas"/>
                                </NoticiasCard>
                                <NoticiasCard image={AutoExploracion} title={t("AutoExploracion")} date={t("AutoExploracionDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                    <img src={LinkedIn} className="mas"/>
                                </NoticiasCard>
                            </div>
                        </>
                    )}
                    {page2 === "unodos" && (
                        <>
                            <div className='noticiasRow'>
                                <NoticiasCard image={CausaRosa} title={t("CausaRosa")} date={t("CausaRosaDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                    <img src={LinkedIn} className="mas"/>
                                </NoticiasCard>
                                <NoticiasCard image={Koaj2022} title={t("Koaj2022")} date={t("Koaj2022DATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                    <img src={LinkedIn} className="mas"/>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={VianneyXbox} title={t("VianneyXbox")} date={t("VianneyXboxDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                    <img src={LinkedIn} className="mas"/>
                                </NoticiasCard>
                                <NoticiasCard image={PopeyeKOAJ} title={t("PopeyeKOAJ")} date={t("PopeyeKOAJDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                    <img src={LinkedIn} className="mas"/>
                                </NoticiasCard>
                            </div> 
                            <div className='noticiasRow'>
                                <NoticiasCard image={ArgentinaAmong} title={t("ArgentinaAmong")} date={t("ArgentinaAmongDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                    <img src={LinkedIn} className="mas"/>
                                </NoticiasCard>
                                <NoticiasCard image={KaratePeru} title={t("KaratePeru")} date={t("KaratePeruDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                    <img src={LinkedIn} className="mas"/>
                                </NoticiasCard>
                            </div>
                        </>
                    )}
                    {page2 === "nada" && active === 1 ? (
                        <div className='verMasButtonDivMob' onClick={()=> setPage2("unodos")}>
                            <Button buttonText={t("seeMore")} />
                        </div>
                    ):null}
                    {active === 2 && (
                        <>
                            <div className='noticiasRow'>
                                <NoticiasCard image={Nuevo} title={t("Nuevo")} date={t("newDate")}>
                                    <img src={Mas} className="mas"/>
                                </NoticiasCard>
                                <NoticiasCard image={Cobra} title={t("Cobra")} date={t("cobraDate")}>
                                    <img src={Mas} className="mas"/>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={AmongLLega} title={t("AmongLLega")} date={t("amongDate")}>
                                    <img src={Mas} className="mas"/>
                                </NoticiasCard>
                                <NoticiasCard image={Warner} title={t("Warner")} date={t("WarnerDATE")}>
                                    <img src={Mas} className="mas"/>
                                </NoticiasCard>
                            </div>                    
                            <div className='noticiasRow'>
                                <NoticiasCard image={CaminaKitty} title={t("CaminaKitty")} date={t("CaminaKittyDATE")}>
                                    <img src={Mas} className="mas"/>
                                </NoticiasCard>
                            </div>
                        </>
                    )}
                    {active === 3 && (
                        <>
                            <div className='noticiasRow'>
                                <NoticiasCard image={ColeccionPantera} title={t("ColeccionPantera")} date={t("ColeccionPanteraDATE")}>
                                    <img src={Mas} className="mas"/>   
                                </NoticiasCard>
                                <NoticiasCard image={Crayola} title={t("Crayola")} date={t("CrayolaDATE")}>
                                    <img src={Mas} className="mas"/>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={MasterChef} title={t("MasterChef")}  date={t("MasterChefDATE")}>
                                    <img src={Mas} className="mas"/>
                                </NoticiasCard>
                                <NoticiasCard image={TycoonDia} title={t("TycoonDia")}  date={t("TycoonDiaDATE")}>
                                    <img src={Mas} className="mas"/>       
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={Endemol} title={t("Endemol")} date={t("EndemolDATE")}>
                                    <img src={Mas} className="mas"/>
                                </NoticiasCard>
                                <NoticiasCard image={ColDistroller} title={t("ColDistroller")}  date={t("ColDistrollerDATE")}>
                                    <img src={Mas} className="mas"/>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={Balleys} title={"Balleys"} date={t("BalleysDATE")}>
                                    <img src={Mas} className="mas"/>
                                </NoticiasCard>
                            </div>
                        </>
                    )}
                </>

            ):(
                <>
                {active === 1 && (
                    <>
                        <div className='noticiasRow'>
                            <NoticiasCard image={HelloKitty22} title={t("HelloKitty22")} date={t("HelloKitty22DATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={PinkPantherLanza} title={t("PinkPantherLanza")} date={t("PinkPantherLanzaDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={PlayerasHoodies} title={t("PlayerasHoodies")} date={t("PlayerasHoodiesDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRow'>
                            <NoticiasCard image={PonteRosa} title={t("PonteRosa")} date={t("PonteRosaDATE")}>
                                <img src={Facebook} className="mas"/>       
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={ColeccionXbox} title={t("ColeccionXbox")} date={t("ColeccionXboxDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={AutoExploracion} title={t("AutoExploracion")} date={t("AutoExploracionDATE")}>
                                <img src={Facebook} className="mas"/>   
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                        </div>

                    </>
                )}
                {page2 === "unodos" && (
                    <>
                        <div className='noticiasRow'>
                            <NoticiasCard image={CausaRosa} title={t("CausaRosa")} date={t("CausaRosaDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={Koaj2022} title={t("Koaj2022")} date={t("Koaj2022DATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={VianneyXbox} title={t("VianneyXbox")} date={t("VianneyXboxDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRow'>
                            <NoticiasCard image={PopeyeKOAJ} title={t("PopeyeKOAJ")} date={t("PopeyeKOAJDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={ArgentinaAmong} title={t("ArgentinaAmong")} date={t("ArgentinaAmongDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={KaratePeru} title={t("KaratePeru")} date={t("KaratePeruDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                        </div> 
                    </>
                )}
                {page3 === "unotres" && (
                    <>
                        <div className='noticiasRow'>
                            <NoticiasCard image={AnaEmilia} title={t("CausaRosa")} date={t("CausaRosaDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={Amarillo} title={t("Koaj2022")} date={t("Koaj2022DATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={CampañaChile} title={t("VianneyXbox")} date={t("VianneyXboxDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRow'>
                            <NoticiasCard image={DunkinMinions} title={t("PopeyeKOAJ")} date={t("PopeyeKOAJDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={Minione} title={t("ArgentinaAmong")} date={t("ArgentinaAmongDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={Narutomx} title={t("KaratePeru")} date={t("KaratePeruDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                        </div> 
                    </>
                )}
                {page4 === "unocuatro" && (
                    <>
                        <div className='noticiasRow'>
                            <NoticiasCard image={atunMinion} title={t("CausaRosa")} date={t("CausaRosaDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={LolyColeccion} title={t("Koaj2022")} date={t("Koaj2022DATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={SaborHer} title={t("VianneyXbox")} date={t("VianneyXboxDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRow'>
                            <NoticiasCard image={BebidaJurasic} title={t("PopeyeKOAJ")} date={t("PopeyeKOAJDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={HarryWal} title={t("ArgentinaAmong")} date={t("ArgentinaAmongDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={Olive} title={t("KaratePeru")} date={t("KaratePeruDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                        </div> 
                    </>
                )}
                {page5 === "unocinco" && (
                    <>
                        <div className='noticiasRow'>
                            <NoticiasCard image={CrayolaMayo} title={t("CausaRosa")} date={t("CausaRosaDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={Tycum} title={t("Koaj2022")} date={t("Koaj2022DATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={Unwind} title={t("VianneyXbox")} date={t("VianneyXboxDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRow'>
                            <NoticiasCard image={HaloChamp} title={t("PopeyeKOAJ")} date={t("PopeyeKOAJDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={JurasicLatam} title={t("ArgentinaAmong")} date={t("ArgentinaAmongDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={PumaFrida} title={t("KaratePeru")} date={t("KaratePeruDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                        </div> 
                    </>
                )}
                {page6 === "unoseis" && (
                    <>
                        <div className='noticiasRow'>
                            <NoticiasCard image={Fridacien} title={t("CausaRosa")} date={t("CausaRosaDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={AlpinaMinion} title={t("Koaj2022")} date={t("Koaj2022DATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={BleachPeru} title={t("VianneyXbox")} date={t("VianneyXboxDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRow'>
                            <NoticiasCard image={JurasicLanza} title={t("PopeyeKOAJ")} date={t("PopeyeKOAJDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={FelicidadesCo} title={t("ArgentinaAmong")} date={t("ArgentinaAmongDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={HelloCo} title={t("KaratePeru")} date={t("KaratePeruDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                        </div> 
                    </>
                )}
                {page7 === "unosiete" && (
                    <>
                        <div className='noticiasRow'>
                            <NoticiasCard image={FelicidadesGhost} title={t("CausaRosa")} date={t("CausaRosaDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={CerealHer} title={t("Koaj2022")} date={t("Koaj2022DATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={AnaEmiliaHBO} title={t("VianneyXbox")} date={t("VianneyXboxDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRow'>
                            <NoticiasCard image={CarreraHello} title={t("PopeyeKOAJ")} date={t("PopeyeKOAJDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={MagiaHarry} title={t("ArgentinaAmong")} date={t("ArgentinaAmongDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={HalloPara} title={t("KaratePeru")} date={t("KaratePeruDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                        </div> 
                    </>
                )}
                {page8 === "unoocho" && (
                    <>
                        <div className='noticiasRow'>
                            <NoticiasCard image={BalleysMont} title={t("CausaRosa")} date={t("CausaRosaDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={ChupaShampoo} title={t("Koaj2022")} date={t("Koaj2022DATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={TodosPodemos} title={t("VianneyXbox")} date={t("VianneyXboxDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRow'>
                            <NoticiasCard image={SerieHalo} title={t("PopeyeKOAJ")} date={t("PopeyeKOAJDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={deathNote} title={t("ArgentinaAmong")} date={t("ArgentinaAmongDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={VansCrayola} title={t("KaratePeru")} date={t("KaratePeruDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                                <img src={LinkedIn} className="mas"/>
                            </NoticiasCard>
                        </div> 
                    </>
                )}
                {page9 === "unonueve" && (
                    <div className='noticiasRow'>
                        <NoticiasCard image={Vikings} title={t("CausaRosa")} date={t("CausaRosaDATE")}>
                            <img src={Facebook} className="mas"/>
                            <img src={Instagram} className="mas"/>
                            <img src={LinkedIn} className="mas"/>
                        </NoticiasCard>
                        <NoticiasCard image={DulzuraHello} title={t("Koaj2022")} date={t("Koaj2022DATE")}>
                            <img src={Facebook} className="mas"/>
                            <img src={Instagram} className="mas"/>
                            <img src={LinkedIn} className="mas"/>
                        </NoticiasCard>
                        <NoticiasCard image={HelloCafe} title={t("VianneyXbox")} date={t("VianneyXboxDATE")}>
                            <img src={Facebook} className="mas"/>
                            <img src={Instagram} className="mas"/>
                            <img src={LinkedIn} className="mas"/>
                        </NoticiasCard>
                    </div>
                )}

                {page2 === "nada" && active === 1 ? (
                    <div className='verMasButtonDiv' onClick={()=> setPage2("unodos")}>
                        <Button buttonText={t("seeMore")} />
                    </div>
                ):null}
                {page2 === "unodos" && active === 1 && page3 === "nada" ? (
                    <div className='verMasButtonDiv' onClick={()=> setPage3("unotres")}>
                        <Button buttonText={t("seeMore")} />
                    </div>
                ):null}
                {page3 === "unotres" && active === 1 && page4 === "nada" ? (
                    <div className='verMasButtonDiv' onClick={()=> setPage4("unocuatro")}>
                        <Button buttonText={t("seeMore")} />
                    </div>
                ):null}
                {page4 === "unocuatro" && active === 1 && page5 === "nada" ? (
                    <div className='verMasButtonDiv' onClick={()=> setPage5("unocinco")}>
                        <Button buttonText={t("seeMore")} />
                    </div>
                ):null}
                {page5 === "unocinco" && active === 1 && page6 === "nada" ? (
                    <div className='verMasButtonDiv' onClick={()=> setPage6("unoseis")}>
                        <Button buttonText={t("seeMore")} />
                    </div>
                ):null}
                {page6 === "unoseis" && active === 1 && page7 === "nada" ? (
                    <div className='verMasButtonDiv' onClick={()=> setPage7("unosiete")}>
                        <Button buttonText={t("seeMore")} />
                    </div>
                ):null}
                {page7 === "unosiete" && active === 1 && page8 === "nada" ? (
                    <div className='verMasButtonDiv' onClick={()=> setPage8("unoocho")}>
                        <Button buttonText={t("seeMore")} />
                    </div>
                ):null}
                {page8 === "unoocho" && active === 1 && page9 === "nada" ? (
                    <div className='verMasButtonDiv' onClick={()=> setPage9("unonueve")}>
                        <Button buttonText={t("seeMore")} />
                    </div>
                ):null}
                {active === 2 && (
                    <>
                        <div className='noticiasRow'>
                            <NoticiasCard image={Nuevo} title={t("new")} date={t("newDate")}>
                                <img src={Mas} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={Cobra} title={t("cobra")} date={t("cobraDate")}>
                                <img src={Mas} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={AmongLLega} title={t("among")} date={t("amongDate")}>
                                <img src={Mas} className="mas"/>   
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRowSingle'>
                            <NoticiasCard image={Warner} title={t("Warner")} date={t("WarnerDATE")}>
                                <img src={Mas} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={CaminaKitty} title={t("CaminaKitty")} date={t("CaminaKittyDATE")}>
                                <img src={Mas} className="mas"/>
                            </NoticiasCard>
                        </div>                    
                    </>
                )}
                {active === 3 && (
                    <>
                        <div className='noticiasRow'>
                            <NoticiasCard image={ColeccionPantera} title={t("ColeccionPantera")} date={t("ColeccionPanteraDATE")}>
                                <img src={Mas} className="mas"/>   
                            </NoticiasCard>
                            <NoticiasCard image={Crayola} title={t("Crayola")} date={t("CrayolaDATE")}>
                                <img src={Mas} className="mas"/>   
                            </NoticiasCard>
                            <NoticiasCard image={MasterChef} title={t("MasterChef")}  date={t("MasterChefDATE")}>
                                <img src={Mas} className="mas"/>
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRow'>
                            <NoticiasCard image={TycoonDia} title={t("TycoonDia")}  date={t("TycoonDiaDATE")}>
                                <img src={Mas} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={Endemol} title={t("Endemol")}  date={t("EndemolDATE")}>
                                <img src={Mas} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={ColDistroller} title={t("ColDistroller")}  date={t("ColDistrollerDATE")}>
                                <img src={Mas} className="mas"/>   
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRowSingle'>
                            <NoticiasCard image={Balleys} title={t("Balleys")}  date={t("BalleysDATE")}>
                                <img src={Mas} className="mas"/>
                            </NoticiasCard>
                        </div>
                    </>
                )}
                </>
            )}

            </div>
        </div>
    )
}

export default NewsNav;