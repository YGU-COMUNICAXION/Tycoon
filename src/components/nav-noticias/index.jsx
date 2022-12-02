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


function NewsNav() {
    const [active, setActive] = useState(1)
    const { t } = useTranslation("news");
    const windowSize = useWindowSize();
    const [page, setPage] = useState("nada");


    return (
        <div className='noticiasPageMainDiv'>
            <Nav fill variant="tabs" activeKey={active}>
                <Nav.Item onClick={()=> {setActive(1); setPage("nada")}}>
                    <Nav.Link eventKey="link-1">2022</Nav.Link>
                </Nav.Item>
                <div className="navDivisor"/>
                <Nav.Item onClick={()=> {setActive(2); setPage("nada")}}>
                    <Nav.Link eventKey="link-2">2021</Nav.Link>
                </Nav.Item>
                <div className="navDivisor"/>
                <Nav.Item onClick={()=> {setActive(3); ; setPage("nada")}}>
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
                                </NoticiasCard>
                                <NoticiasCard image={PinkPantherLanza} title={t("PinkPantherLanza")} date={t("PinkPantherLanzaDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={PlayerasHoodies} title={t("PlayerasHoodies")} date={t("PlayerasHoodiesDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                </NoticiasCard>
                                <NoticiasCard image={PonteRosa} title={t("PonteRosa")} date={t("PonteRosaDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={ColeccionXbox} title={t("ColeccionXbox")} date={t("ColeccionXboxDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                </NoticiasCard>
                                <NoticiasCard image={AutoExploracion} title={t("AutoExploracion")} date={t("AutoExploracionDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                </NoticiasCard>
                            </div>
                        </>
                    )}
                    {page === "unodos" && (
                        <>
                            <div className='noticiasRow'>
                                <NoticiasCard image={CausaRosa} title={t("CausaRosa")} date={t("CausaRosaDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                </NoticiasCard>
                                <NoticiasCard image={Koaj2022} title={t("Koaj2022")} date={t("Koaj2022DATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={VianneyXbox} title={t("VianneyXbox")} date={t("VianneyXboxDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                </NoticiasCard>
                                <NoticiasCard image={PopeyeKOAJ} title={t("PopeyeKOAJ")} date={t("PopeyeKOAJDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                </NoticiasCard>
                            </div> 
                            <div className='noticiasRow'>
                                <NoticiasCard image={ArgentinaAmong} title={t("ArgentinaAmong")} date={t("ArgentinaAmongDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                </NoticiasCard>
                                <NoticiasCard image={KaratePeru} title={t("KaratePeru")} date={t("KaratePeruDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                </NoticiasCard>
                            </div>
                        </>
                    )}
                    {page === "nada" && active === 1 ? (
                        <div className='verMasButtonDivMob' onClick={()=> setPage("unodos")}>
                            <Button buttonText={t("seeMore")} />
                        </div>
                    ):null}
                    {active === 2 && (
                        <>
                            <div className='noticiasRow'>
                                <NoticiasCard image={Nuevo} title={t("Nuevo")} date={t("newDate")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                </NoticiasCard>
                                <NoticiasCard image={Cobra} title={t("Cobra")} date={t("cobraDate")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={AmongLLega} title={t("AmongLLega")} date={t("amongDate")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                </NoticiasCard>
                                <NoticiasCard image={Warner} title={t("Warner")} date={t("WarnerDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                </NoticiasCard>
                            </div>                    
                            <div className='noticiasRow'>
                                <NoticiasCard image={CaminaKitty} title={t("CaminaKitty")} date={t("CaminaKittyDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                </NoticiasCard>
                            </div>
                        </>
                    )}
                    {active === 3 && (
                        <>
                            <div className='noticiasRow'>
                                <NoticiasCard image={ColeccionPantera} title={t("ColeccionPantera")} date={t("ColeccionPanteraDATE")}>
                                    <img src={Facebook} className="mas"/>   
                                    <img src={Instagram} className="mas"/>
                                </NoticiasCard>
                                <NoticiasCard image={Crayola} title={t("Crayola")} date={t("CrayolaDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={MasterChef} title={t("MasterChef")}  date={t("MasterChefDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                </NoticiasCard>
                                <NoticiasCard image={TycoonDia} title={t("TycoonDia")}  date={t("TycoonDiaDATE")}>
                                    <img src={Facebook} className="mas"/>       
                                    <img src={Instagram} className="mas"/>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={Endemol} title={t("Endemol")} date={t("EndemolDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                </NoticiasCard>
                                <NoticiasCard image={ColDistroller} title={t("ColDistroller")}  date={t("ColDistrollerDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
                                </NoticiasCard>
                            </div>
                            <div className='noticiasRow'>
                                <NoticiasCard image={Balleys} title={"Balleys"} date={t("BalleysDATE")}>
                                    <img src={Facebook} className="mas"/>
                                    <img src={Instagram} className="mas"/>
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
                            </NoticiasCard>
                            <NoticiasCard image={PinkPantherLanza} title={t("PinkPantherLanza")} date={t("PinkPantherLanzaDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={PlayerasHoodies} title={t("PlayerasHoodies")} date={t("PlayerasHoodiesDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRow'>
                            <NoticiasCard image={PonteRosa} title={t("PonteRosa")} date={t("PonteRosaDATE")}>
                                <img src={Facebook} className="mas"/>       
                                <img src={Instagram} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={ColeccionXbox} title={t("ColeccionXbox")} date={t("ColeccionXboxDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={AutoExploracion} title={t("AutoExploracion")} date={t("AutoExploracionDATE")}>
                                <img src={Facebook} className="mas"/>   
                                <img src={Instagram} className="mas"/>
                            </NoticiasCard>
                        </div>

                    </>
                )}
                {page === "unodos" && (
                    <>
                        <div className='noticiasRow'>
                            <NoticiasCard image={CausaRosa} title={t("CausaRosa")} date={t("CausaRosaDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={Koaj2022} title={t("Koaj2022")} date={t("Koaj2022DATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={VianneyXbox} title={t("VianneyXbox")} date={t("VianneyXboxDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRow'>
                            <NoticiasCard image={PopeyeKOAJ} title={t("PopeyeKOAJ")} date={t("PopeyeKOAJDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={ArgentinaAmong} title={t("ArgentinaAmong")} date={t("ArgentinaAmongDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={KaratePeru} title={t("KaratePeru")} date={t("KaratePeruDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                            </NoticiasCard>
                        </div> 
                    </>
                )}
                {page === "nada" && active === 1 ? (
                    <div className='verMasButtonDiv' onClick={()=> setPage("unodos")}>
                        <Button buttonText={t("seeMore")} />
                    </div>
                ):null}
                {active === 2 && (
                    <>
                        <div className='noticiasRow'>
                            <NoticiasCard image={Nuevo} title={t("new")} date={t("newDate")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={Cobra} title={t("cobra")} date={t("cobraDate")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={AmongLLega} title={t("among")} date={t("amongDate")}>
                                <img src={Facebook} className="mas"/>   
                                <img src={Instagram} className="mas"/>
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRowSingle'>
                            <NoticiasCard image={Warner} title={t("Warner")} date={t("WarnerDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={CaminaKitty} title={t("CaminaKitty")} date={t("CaminaKittyDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                            </NoticiasCard>
                        </div>                    
                    </>
                )}
                {active === 3 && (
                    <>
                        <div className='noticiasRow'>
                            <NoticiasCard image={ColeccionPantera} title={t("ColeccionPantera")} date={t("ColeccionPanteraDATE")}>
                                <img src={Facebook} className="mas"/>   
                                <img src={Instagram} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={Crayola} title={t("Crayola")} date={t("CrayolaDATE")}>
                                <img src={Facebook} className="mas"/>   
                                <img src={Instagram} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={MasterChef} title={t("MasterChef")}  date={t("MasterChefDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRow'>
                            <NoticiasCard image={TycoonDia} title={t("TycoonDia")}  date={t("TycoonDiaDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={Endemol} title={t("Endemol")}  date={t("EndemolDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
                            </NoticiasCard>
                            <NoticiasCard image={ColDistroller} title={t("ColDistroller")}  date={t("ColDistrollerDATE")}>
                                <img src={Facebook} className="mas"/>   
                                <img src={Instagram} className="mas"/>
                            </NoticiasCard>
                        </div>
                        <div className='noticiasRowSingle'>
                            <NoticiasCard image={Balleys} title={t("Balleys")}  date={t("BalleysDATE")}>
                                <img src={Facebook} className="mas"/>
                                <img src={Instagram} className="mas"/>
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