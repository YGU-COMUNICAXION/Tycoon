import React, {useState, useEffect} from 'react';
import "./styles.css"
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Link } from 'gatsby';
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
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={PinkPantherLanza} title={t("PinkPantherLanza")} date={t("PinkPantherLanzaDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={PlayerasHoodies} title={t("PlayerasHoodies")} date={t("PlayerasHoodiesDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={PonteRosa} title={t("PonteRosa")} date={t("PonteRosaDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={ColeccionXbox} title={t("ColeccionXbox")} date={t("ColeccionXboxDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={AutoExploracion} title={t("AutoExploracion")} date={t("AutoExploracionDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                            </div>
                        </>
                    )}
                    {page2 === "unodos" && (
                        <>
                            <div className='noticiasRow'>
                                <NoticiasCard image={CausaRosa} title={t("CausaRosa")} date={t("CausaRosaDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={Koaj2022} title={t("Koaj2022")} date={t("Koaj2022DATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={VianneyXbox} title={t("VianneyXbox")} date={t("VianneyXboxDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={PopeyeKOAJ} title={t("PopeyeKOAJ")} date={t("PopeyeKOAJDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                            </div> 
                            <div className='noticiasRow'>
                                <NoticiasCard image={ArgentinaAmong} title={t("ArgentinaAmong")} date={t("ArgentinaAmongDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={KaratePeru} title={t("KaratePeru")} date={t("KaratePeruDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                            </div>
                        </>
                    )}
                    {page3 === "unotres" && (
                        <>
                            <div className='noticiasRow'>
                                <NoticiasCard image={AnaEmilia} title={t("AnaEmilia")} date={t("AnaEmiliaDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={Amarillo} title={t("Amarillo")} date={t("AmarilloDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={CampañaChile} title={t("CampañaChile")} date={t("CampañaChileDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={DunkinMinions} title={t("DunkinMinions")} date={t("DunkinMinionsDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                            </div> 
                            <div className='noticiasRow'>
                                <NoticiasCard image={Minione} title={t("Minione")} date={t("MinioneDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={Narutomx} title={t("Narutomx")} date={t("NarutomxDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                            </div>
                        </>
                    )}
                    {page4 === "unocuatro" && (
                        <>
                            <div className='noticiasRow'>
                                <NoticiasCard image={atunMinion} title={t("atunMinion")} date={t("atunMinionDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={LolyColeccion} title={t("LolyColeccion")} date={t("LolyColeccionDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={SaborHer} title={t("SaborHer")} date={t("SaborHerDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={BebidaJurasic} title={t("BebidaJurasic")} date={t("BebidaJurasicDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                            </div> 
                            <div className='noticiasRow'>
                                <NoticiasCard image={HarryWal} title={t("HarryWal")} date={t("HarryWalDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={Olive} title={t("Olive")} date={t("OliveDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                            </div>
                        </>
                    )}
                    {page5 === "unocinco" && (
                        <>
                            <div className='noticiasRow'>
                                <NoticiasCard image={CrayolaMayo} title={t("CrayolaMayo")} date={t("CrayolaMayoDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={Tycum} title={t("Tycum")} date={t("TycumDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={Unwind} title={t("Unwind")} date={t("UnwindDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={HaloChamp} title={t("HaloChamp")} date={t("HaloChampDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                            </div> 
                            <div className='noticiasRow'>
                                <NoticiasCard image={JurasicLatam} title={t("JurasicLatam")} date={t("JurasicLatamDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={PumaFrida} title={t("PumaFrida")} date={t("PumaFridaDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                            </div>
                        </>
                    )}
                    {page6 === "unoseis" && (
                        <>
                            <div className='noticiasRow'>
                                <NoticiasCard image={Fridacien} title={t("Fridacien")} date={t("FridacienDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={AlpinaMinion} title={t("AlpinaMinion")} date={t("AlpinaMinionDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={BleachPeru} title={t("BleachPeru")} date={t("BleachPeruDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={JurasicLanza} title={t("JurasicLanza")} date={t("JurasicLanzaDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                            </div> 
                            <div className='noticiasRow'>
                                <NoticiasCard image={FelicidadesCo} title={t("FelicidadesCo")} date={t("FelicidadesCoDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={HelloCo} title={t("HelloCo")} date={t("HelloCoDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                            </div>
                        </>
                    )}
                    {page7 === "unosiete" && (
                        <>
                            <div className='noticiasRow'>
                                <NoticiasCard image={FelicidadesGhost} title={t("FelicidadesGhost")} date={t("FelicidadesGhostDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={CerealHer} title={t("CerealHer")} date={t("CerealHerDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={AnaEmiliaHBO} title={t("AnaEmiliaHBO")} date={t("AnaEmiliaHBODATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={CarreraHello} title={t("CarreraHello")} date={t("CarreraHelloDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                            </div> 
                            <div className='noticiasRow'>
                                <NoticiasCard image={MagiaHarry} title={t("MagiaHarry")} date={t("MagiaHarryDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={HalloPara} title={t("HalloPara")} date={t("HalloParaDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                            </div>
                        </>
                    )}
                    {page8 === "unoocho" && (
                        <>
                            <div className='noticiasRow'>
                                <NoticiasCard image={BalleysMont} title={t("BalleysMont")} date={t("BalleysMontDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={ChupaShampoo} title={t("ChupaShampoo")} date={t("ChupaShampooDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={TodosPodemos} title={t("TodosPodemos")} date={t("TodosPodemosDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={SerieHalo} title={t("SerieHalo")} date={t("SerieHaloDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                            </div> 
                            <div className='noticiasRow'>
                                <NoticiasCard image={deathNote} title={t("deathNote")} date={t("deathNoteDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={VansCrayola} title={t("VansCrayola")} date={t("VansCrayolaDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                            </div>
                        </>
                    )}
                    {page9 === "unonueve" && (
                        <>
                            <div className='noticiasRow'>
                                <NoticiasCard image={Vikings} title={t("Vikings")} date={t("VikingsDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                                <NoticiasCard image={DulzuraHello} title={t("DulzuraHello")} date={t("DulzuraHelloDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={HelloCafe} title={t("HelloCafe")} date={t("HelloCafeDATE")}>
                                    <a>
                                        <img src={Facebook} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={Instagram} className="mas"/>
                                    </a>
                                    <a>
                                        <img src={LinkedIn} className="mas"/>       
                                    </a>
                                </NoticiasCard>
                            </div> 
                        </>
                    )}
                    {page2 === "nada" && active === 1 ? (
                        <div className='verMasButtonDivMob' onClick={()=> setPage2("unodos")}>
                            <Button buttonText={t("seeMore")} />
                        </div>
                    ):null}
                    {page2 === "unodos" && active === 1 && page3 === "nada" ? (
                        <div className='verMasButtonDivMob' onClick={()=> setPage3("unotres")}>
                            <Button buttonText={t("seeMore")} />
                        </div>
                    ):null}
                    {page3 === "unotres" && active === 1 && page4 === "nada" ? (
                        <div className='verMasButtonDivMob' onClick={()=> setPage4("unocuatro")}>
                            <Button buttonText={t("seeMore")} />
                        </div>
                    ):null}
                    {page4 === "unocuatro" && active === 1 && page5 === "nada" ? (
                        <div className='verMasButtonDivMob' onClick={()=> setPage5("unocinco")}>
                            <Button buttonText={t("seeMore")} />
                        </div>
                    ):null}
                    {page5 === "unocinco" && active === 1 && page6 === "nada" ? (
                        <div className='verMasButtonDivMob' onClick={()=> setPage6("unoseis")}>
                            <Button buttonText={t("seeMore")} />
                        </div>
                    ):null}
                    {page6 === "unoseis" && active === 1 && page7 === "nada" ? (
                        <div className='verMasButtonDivMob' onClick={()=> setPage7("unosiete")}>
                            <Button buttonText={t("seeMore")} />
                        </div>
                    ):null}
                    {page7 === "unosiete" && active === 1 && page8 === "nada" ? (
                        <div className='verMasButtonDivMob' onClick={()=> setPage8("unoocho")}>
                            <Button buttonText={t("seeMore")} />
                        </div>
                    ):null}
                    {page8 === "unoocho" && active === 1 && page9 === "nada" ? (
                        <div className='verMasButtonDivMob' onClick={()=> setPage9("unonueve")}>
                            <Button buttonText={t("seeMore")} />
                        </div>
                    ):null}
                    {active === 2 && (
                        <>
                            <div className='noticiasRow'>
                                <NoticiasCard image={Nuevo} title={t("Nuevo")} date={t("newDate")}>
                                    <Link to="/news/newintycoon">
                                        <img src={Mas} className="mas"/>
                                    </Link>
                                </NoticiasCard>
                                <NoticiasCard image={Cobra} title={t("Cobra")} date={t("cobraDate")}>
                                    <Link to="/news/cobrakai">
                                        <img src={Mas} className="mas"/>
                                    </Link>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={AmongLLega} title={t("AmongLLega")} date={t("amongDate")}>
                                    <Link to="/news/amongus">
                                        <img src={Mas} className="mas"/>
                                    </Link>
                                </NoticiasCard>
                                <NoticiasCard image={Warner} title={t("Warner")} date={t("WarnerDATE")}>
                                    <Link to="/news/warnerbros">
                                        <img src={Mas} className="mas"/>
                                    </Link>
                                </NoticiasCard>
                            </div>                    
                            <div className='noticiasRow'>
                                <NoticiasCard image={CaminaKitty} title={t("CaminaKitty")} date={t("CaminaKittyDATE")}>
                                    <Link to="/news/newintycoon">
                                        <img src={Mas} className="mas"/>
                                    </Link>
                                </NoticiasCard>
                            </div>
                        </>
                    )}
                    {active === 3 && (
                        <>
                            <div className='noticiasRow'>
                                <NoticiasCard image={ColeccionPantera} title={t("ColeccionPantera")} date={t("ColeccionPanteraDATE")}>
                                    <Link to="/news/c&a">
                                        <img src={Mas} className="mas"/>
                                    </Link>
                                </NoticiasCard>
                                <NoticiasCard image={Crayola} title={t("Crayola")} date={t("CrayolaDATE")}>
                                    <Link to="/news/iconicaPromocion">
                                        <img src={Mas} className="mas"/>
                                    </Link>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={MasterChef} title={t("MasterChef")}  date={t("MasterChefDATE")}>
                                    <Link to="/news/vasconia">
                                        <img src={Mas} className="mas"/>
                                    </Link>
                                </NoticiasCard>
                                <NoticiasCard image={TycoonDia} title={t("TycoonDia")}  date={t("TycoonDiaDATE")}>
                                    <Link to="/news/unDiaSinMujeres">
                                        <img src={Mas} className="mas"/>
                                    </Link>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={Endemol} title={t("Endemol")} date={t("EndemolDATE")}>
                                    <Link to="/news/endemol">
                                        <img src={Mas} className="mas"/>
                                    </Link>
                                </NoticiasCard>
                                <NoticiasCard image={ColDistroller} title={t("ColDistroller")}  date={t("ColDistrollerDATE")}>
                                    <Link to="/news/colombia">
                                        <img src={Mas} className="mas"/>
                                    </Link>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={Balleys} title={"Balleys"} date={t("BalleysDATE")}>
                                    <Link to="/news/baileys">
                                        <img src={Mas} className="mas"/>
                                    </Link>
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
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={PinkPantherLanza} title={t("PinkPantherLanza")} date={t("PinkPantherLanzaDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={PlayerasHoodies} title={t("PlayerasHoodies")} date={t("PlayerasHoodiesDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRow'>
                            <NoticiasCard image={PonteRosa} title={t("PonteRosa")} date={t("PonteRosaDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={ColeccionXbox} title={t("ColeccionXbox")} date={t("ColeccionXboxDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={AutoExploracion} title={t("AutoExploracion")} date={t("AutoExploracionDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                        </div>

                    </>
                )}
                {page2 === "unodos" && (
                    <>
                        <div className='noticiasRow'>
                            <NoticiasCard image={CausaRosa} title={t("CausaRosa")} date={t("CausaRosaDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={Koaj2022} title={t("Koaj2022")} date={t("Koaj2022DATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={VianneyXbox} title={t("VianneyXbox")} date={t("VianneyXboxDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRow'>
                            <NoticiasCard image={PopeyeKOAJ} title={t("PopeyeKOAJ")} date={t("PopeyeKOAJDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={ArgentinaAmong} title={t("ArgentinaAmong")} date={t("ArgentinaAmongDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={KaratePeru} title={t("KaratePeru")} date={t("KaratePeruDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                        </div> 
                    </>
                )}
                {page3 === "unotres" && (
                    <>
                        <div className='noticiasRow'>
                            <NoticiasCard image={AnaEmilia} title={t("AnaEmilia")} date={t("AnaEmiliaDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={Amarillo} title={t("Amarillo")} date={t("AmarilloDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={CampañaChile} title={t("CampañaChile")} date={t("CampañaChileDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRow'>
                            <NoticiasCard image={DunkinMinions} title={t("DunkinMinions")} date={t("DunkinMinionsDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={Minione} title={t("Minione")} date={t("MinioneDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={Narutomx} title={t("Narutomx")} date={t("NarutomxDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                        </div> 
                    </>
                )}
                {page4 === "unocuatro" && (
                    <>
                        <div className='noticiasRow'>
                            <NoticiasCard image={atunMinion} title={t("atunMinion")} date={t("atunMinionDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={LolyColeccion} title={t("LolyColeccion")} date={t("LolyColeccionDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={SaborHer} title={t("SaborHer")} date={t("SaborHerDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRow'>
                            <NoticiasCard image={BebidaJurasic} title={t("BebidaJurasic")} date={t("BebidaJurasicDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={HarryWal} title={t("HarryWal")} date={t("HarryWalDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={Olive} title={t("Olive")} date={t("OliveDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                        </div> 
                    </>
                )}
                {page5 === "unocinco" && (
                    <>
                        <div className='noticiasRow'>
                            <NoticiasCard image={CrayolaMayo} title={t("CrayolaMayo")} date={t("CrayolaMayoDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={Tycum} title={t("Tycum")} date={t("TycumDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={Unwind} title={t("Unwind")} date={t("UnwindDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRow'>
                            <NoticiasCard image={HaloChamp} title={t("HaloChamp")} date={t("HaloChampDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={JurasicLatam} title={t("JurasicLatam")} date={t("JurasicLatamDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={PumaFrida} title={t("PumaFrida")} date={t("PumaFridaDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                        </div> 
                    </>
                )}
                {page6 === "unoseis" && (
                    <>
                        <div className='noticiasRow'>
                            <NoticiasCard image={Fridacien} title={t("Fridacien")} date={t("FridacienDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={AlpinaMinion} title={t("AlpinaMinion")} date={t("AlpinaMinionDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={BleachPeru} title={t("BleachPeru")} date={t("BleachPeruDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRow'>
                            <NoticiasCard image={JurasicLanza} title={t("JurasicLanza")} date={t("JurasicLanzaDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={FelicidadesCo} title={t("FelicidadesCo")} date={t("FelicidadesCoDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={HelloCo} title={t("HelloCo")} date={t("HelloCoDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                        </div> 
                    </>
                )}
                {page7 === "unosiete" && (
                    <>
                        <div className='noticiasRow'>
                            <NoticiasCard image={FelicidadesGhost} title={t("FelicidadesGhost")} date={t("FelicidadesGhostDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={CerealHer} title={t("CerealHer")} date={t("CerealHerDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={AnaEmiliaHBO} title={t("AnaEmiliaHBO")} date={t("AnaEmiliaHBODATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRow'>
                            <NoticiasCard image={CarreraHello} title={t("CarreraHello")} date={t("CarreraHelloDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={MagiaHarry} title={t("MagiaHarry")} date={t("MagiaHarryDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={HalloPara} title={t("HalloPara")} date={t("HalloParaDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                        </div> 
                    </>
                )}
                {page8 === "unoocho" && (
                    <>
                        <div className='noticiasRow'>
                            <NoticiasCard image={BalleysMont} title={t("BalleysMont")} date={t("BalleysMontDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={ChupaShampoo} title={t("ChupaShampoo")} date={t("ChupaShampooDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={TodosPodemos} title={t("TodosPodemos")} date={t("TodosPodemosDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRow'>
                            <NoticiasCard image={SerieHalo} title={t("SerieHalo")} date={t("SerieHaloDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={deathNote} title={t("deathNote")} date={t("deathNoteDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                            <NoticiasCard image={VansCrayola} title={t("VansCrayola")} date={t("VansCrayolaDATE")}>
                                <a>
                                    <img src={Facebook} className="mas"/>
                                </a>
                                <a>
                                    <img src={Instagram} className="mas"/>
                                </a>
                                <a>
                                    <img src={LinkedIn} className="mas"/>       
                                </a>
                            </NoticiasCard>
                        </div> 
                    </>
                )}
                {page9 === "unonueve" && (
                    <div className='noticiasRow'>
                        <NoticiasCard image={Vikings} title={t("Vikings")} date={t("VikingsDATE")}>
                            <a>
                                <img src={Facebook} className="mas"/>
                            </a>
                            <a>
                                <img src={Instagram} className="mas"/>
                            </a>
                            <a>
                                <img src={LinkedIn} className="mas"/>       
                            </a>
                        </NoticiasCard>
                        <NoticiasCard image={DulzuraHello} title={t("DulzuraHello")} date={t("DulzuraHelloDATE")}>
                            <a>
                                <img src={Facebook} className="mas"/>
                            </a>
                            <a>
                                <img src={Instagram} className="mas"/>
                            </a>
                            <a>
                                <img src={LinkedIn} className="mas"/>       
                            </a>
                        </NoticiasCard>
                        <NoticiasCard image={HelloCafe} title={t("HelloCafe")} date={t("HelloCafeDATE")}>
                            <a>
                                <img src={Facebook} className="mas"/>
                            </a>
                            <a>
                                <img src={Instagram} className="mas"/>
                            </a>
                            <a>
                                <img src={LinkedIn} className="mas"/>       
                            </a>
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
                                <Link to="/news/newintycoon">
                                    <img src={Mas} className="mas"/>
                                </Link>
                            </NoticiasCard>
                            <NoticiasCard image={Cobra} title={t("cobra")} date={t("cobraDate")}>
                                <Link to="/news/cobrakai">
                                    <img src={Mas} className="mas"/>
                                </Link>
                            </NoticiasCard>
                            <NoticiasCard image={AmongLLega} title={t("among")} date={t("amongDate")}>
                                <Link to="/news/amongus">
                                    <img src={Mas} className="mas"/>
                                </Link>
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRowSingle'>
                            <NoticiasCard image={Warner} title={t("Warner")} date={t("WarnerDATE")}>
                                <Link to="/news/warnerbros">
                                    <img src={Mas} className="mas"/>
                                </Link>
                            </NoticiasCard>
                            <NoticiasCard image={CaminaKitty} title={t("CaminaKitty")} date={t("CaminaKittyDATE")}>
                                <Link to="/news/caminaEntreNubes">
                                    <img src={Mas} className="mas"/>
                                </Link>
                            </NoticiasCard>
                        </div>                    
                    </>
                )}
                {active === 3 && (
                    <>
                        <div className='noticiasRow'>
                            <NoticiasCard image={ColeccionPantera} title={t("ColeccionPantera")} date={t("ColeccionPanteraDATE")}>
                                <Link to="/news/c&a">
                                    <img src={Mas} className="mas"/>
                                </Link>
                            </NoticiasCard>
                            <NoticiasCard image={Crayola} title={t("Crayola")} date={t("CrayolaDATE")}>
                                <Link to="/news/iconicaPromocion">
                                    <img src={Mas} className="mas"/>
                                </Link>
                            </NoticiasCard>
                            <NoticiasCard image={MasterChef} title={t("MasterChef")}  date={t("MasterChefDATE")}>
                                <Link to="/news/vasconia">
                                    <img src={Mas} className="mas"/>
                                </Link>
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRow'>
                            <NoticiasCard image={TycoonDia} title={t("TycoonDia")}  date={t("TycoonDiaDATE")}>
                                <Link to="/news/unDiaSinMujeres">
                                    <img src={Mas} className="mas"/>
                                </Link>
                            </NoticiasCard>
                            <NoticiasCard image={Endemol} title={t("Endemol")}  date={t("EndemolDATE")}>
                                <Link to="/news/endemol">
                                    <img src={Mas} className="mas"/>
                                </Link>
                            </NoticiasCard>
                            <NoticiasCard image={ColDistroller} title={t("ColDistroller")}  date={t("ColDistrollerDATE")}>
                                <Link to="/news/colombia">
                                    <img src={Mas} className="mas"/>
                                </Link>
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRowSingle'>
                            <NoticiasCard image={Balleys} title={t("Balleys")}  date={t("BalleysDATE")}>
                                <Link to="/news/baileys">
                                    <img src={Mas} className="mas"/>
                                </Link>
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