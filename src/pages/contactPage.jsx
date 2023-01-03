import React from 'react'
import { Link } from 'gatsby';
import Layout from '../components/layout'
import "../css/contact.css"
import { useTranslation } from "gatsby-plugin-react-i18next";
import renderStringHMTLtoJSX from "../utils/renderStringHTMLtoJSX";
import Enviar from "../components/button"
import Tycoon360 from "../images/mobile/contacto/tycoon360.png"
import PaisContacto from "../components/pais-contacto"
import Argentina from "../images/mobile/layout/footer/paises/argentina.png"
import Brasil from "../images/mobile/layout/footer/paises/brasil.png"
import Cam from "../images/mobile/layout/footer/paises/cam.png"
import Chile from "../images/mobile/layout/footer/paises/chile.png"
import Colombia from "../images/mobile/layout/footer/paises/colombia.png"
import Ecuador from "../images/mobile/layout/footer/paises/Ecuador.png"
import Mexico from "../images/mobile/layout/footer/paises/mexico.png"
import Peru from "../images/mobile/layout/footer/paises/peru.png"
import useWindowSize from '../hooks/useWindowSize';
import Buscando from "../images/desktop/contacto/teEstamosbuscando.png"
import styled from 'styled-components';

const formLeftDeskDiv = styled.div`

`

const ContactPage = () => {
    const { t } = useTranslation("contact");
    const windowSize = useWindowSize();

  return (
    <Layout>
       {windowSize < 752 ? (
        <div className='MainDiv'>
            <div className='contactFirstSection'></div>
            <div className='contactSecondSection'>
                    <img src={Buscando} className="buscandote"/>
                <h2 className='blueTitle'>{t("contactTitle")}</h2>
                <div className='contactInfoDiv'>
                    <h2 className='adquirir'>{t("acquisition")}</h2>
                    <div className='contactRightDiv'>
                        <p className='responde'>{t("answer")}</p>
                        <a href="mailto:contacto@tycoon.mx">
                            <p className='mail'>{t("contactMail")}</p>
                        </a>
                        <p className='teResponderemos'>{t("willAnswer")}</p>
                    </div>
                </div>
                <div className='contactFormDiv'>
                    <form
                        action="https://formspree.io/f/xeqwjolb"
                        method="POST"
                    >
                        <input type="text" name='Nombre' placeholder={t("fullName")} required></input>
                        <input type="text" name='Cargo' placeholder={t("charge")}></input>
                        <input type="text" name='Compañía' placeholder={t("company")}></input>
                        <input type="text" name='Marca de interés' placeholder={t("brandOfInterest")}></input>
                        <input type="text" name='Producto' placeholder={t("product")}></input>
                        <input type="text" name='Giro o industria' placeholder={t("industry")}></input>
                        <input type="text" name='Mail' placeholder={t("email")} required></input>
                        <input type="text" name='Teléfono' placeholder={t("phone")}></input>
                        <select type="text" name='Territorio de interés'>
                            <option value="" className='opcion'>{t("territory")}</option>
                            <option value="item1">{t("argentina")}</option>
                            <option value="item2">{t("brazil")}</option>
                            <option value="item3">{t("centroam")}</option>
                            <option value="item4">{t("chile")}</option>
                            <option value="item5">{t("colombia")}</option>
                            <option value="item6">{t("ecuador")}</option>
                            <option value="item7">{t("mexico")}</option>
                            <option value="item8">{t("peru")}</option>
                        </select>
                        <textarea type="text" name='Mensaje' placeholder={t("message")} required/>
                        <div className='formButtonDiv'>
                            <button type="submit" className='buttonDiv'>
                                {t("send")}
                            </button>
                        </div>
                    </form>
                </div>
                <div className='interestBZDiv'>
                    <p className='smallP'>{t("interestBZ")}</p>
                </div>
                <img src={Tycoon360} className="tycoon360"/>
            </div>
            <div className='contactThirdSection'>
                <h2 className='sectionTitle' id="contArg" >{renderStringHMTLtoJSX(t("whereTitle"))}</h2>
                <div id="contBz">
                    <PaisContacto pais={t("argentina")} image={Argentina}>
                        <p className='contactP'>+(54) 91165341346</p>
                        <p className='contactSubtitle'>{t("contact")}</p>
                        <p className='contactP'>Eleonora Parodi</p>
                        <a href='mailto:eleonora.parodi@tycoon.mx'>
                            <p className='contactP'>eleonora.parodi@tycoon.mx</p>
                        </a>
                    </PaisContacto>
                </div>
                <div id="contCam">
                    <PaisContacto pais={t("brasil")} image={Brasil}>
                        <p className='contactP'>+55 11 3090 4244</p>
                        <p className='contactSubtitle'>{t("contact")}</p>
                        <p className='contactP'>Erica Giacomelli</p>
                        <a href='mailto:contato@tycoon360.com.br'>
                            <p className='contactP'>contato@tycoon360.com.br</p>
                        </a>
                        <p className='contactP'>{t("webSite")}</p>
                        <a href='http://www.tycoon360.com.br/'>
                            <p className='contactP'>http://www.tycoon360.com.br/</p>
                        </a>                
                    </PaisContacto>
                </div>
                <div id="contCh">
                    <PaisContacto pais={t("cam")} image={Cam} >
                        <p className='contactP'>+ (506) 8820 4733</p>
                        <p className='contactP'>+ (506) 4001 7397</p>
                        <p className='contactSubtitle'>{t("contact")}</p>
                        <p className='contactP'>Dinnia Madriz</p>
                        <a href='mailto:dinnia.madriz@tycoon.mx'>
                            <p className='contactP'>dinnia.madriz@tycoon.mx</p>
                        </a>
                    </PaisContacto>
                </div>
                <div id="contCol">
                    <PaisContacto pais={t("chile")} image={Chile}>
                        <p className='contactP'>+56 2 2761-8685</p>
                        <p className='contactSubtitle'>{t("contact")}</p>
                        <p className='contactP'>Alejandra Pinto</p>
                        <a href='mailto:alejandra.pinto@tycoon.mx'>
                            <p className='contactP'>alejandra.pinto@tycoon.mx</p>
                        </a>
                    </PaisContacto>
                </div>
                <div id="contEc">
                    <PaisContacto pais={t("colombia")} image={Colombia}>
                        <p className='contactP'>+571 7431650</p>
                        <p className='contactSubtitle'>{t("contact")}</p>
                        <p className='contactP'>José Fernando Córdoba</p>
                        <a href='mailto:jose.cordoba@tycoon.mx'>
                            <p className='contactP'>jose.cordoba@tycoon.mx</p>
                        </a>
                    </PaisContacto>
                </div>
                <div id="contMex">
                    <PaisContacto pais={t("ecuador")} image={Ecuador} >
                        <p className='contactP'>+571 7431650</p>
                        <p className='contactSubtitle'>{t("contact")}</p>
                        <p className='contactP'>Verónica Sandoval</p>
                        <a href='mailto:veronica.sandoval@tycoon.mx'>
                            <p className='contactP'>veronica.sandoval@tycoon.mx</p>
                        </a>
                    </PaisContacto>
                </div>
                <div id="contPeru">
                    <PaisContacto pais={t("mexico")} image={Mexico}>
                        <p className='contactP'>+5255 5395 4111</p>
                        <p className='contactP'>+5255 5395 7833</p>
                        <p className='contactSubtitle'>{t("contact")}</p>
                        <p className='contactP'>Dalia Benbassat</p>
                        <a href='mailto:dalia@tycoon.mx'>
                            <p className='contactP'>dalia@tycoon.mx</p>
                        </a>
                    </PaisContacto>
                </div>
                <div>
                    <PaisContacto pais={t("peru")} image={Peru}>
                        <p className='contactP'>+51 994 102 984</p>
                        <p className='contactSubtitle'>{t("contact")}</p>
                        <p className='contactP'>Milka Miletich</p>
                        <a href='mailto:milka.miletich@tycoon.mx'>
                            <p className='contactP'>milka.miletich@tycoon.mx</p>
                        </a>
                    </PaisContacto>
                </div>
            </div>
            <div className='contact'></div>
            <div className='contact'></div>
        </div>
       ):(
        <div className='MainDivDesk'>
            <div className='contactFirstSectionDesk'/>
            <div className='contactSecondSection'>
                <img src={Buscando} className="buscandote"/>
                <h2 className='blueTitle'>{t("contactTitle")}</h2>
                <div className='contactInfoDiv'>
                    <h2 className='adquirir'>{t("acquisition")}</h2>
                    <div className='contactRightDiv'>
                        <p className='responde'>{t("answer")}</p>
                        <a href="mailto:contacto@tycoon.mx">
                            <p className='mail'>{t("contactMail")}</p>
                        </a>
                        <p className='teResponderemos'>{t("willAnswer")}</p>
                    </div>
                </div>
                <div className='contactFormDiv'>
                    <form
                        action="https://formspree.io/f/xeqwjolb"
                        method="POST"
                    >
                            <div className='inputsDeskDiv'>
                                <div className='formLeftDeskDiv'>
                                    <input type="text" name='Nombre' placeholder={t("fullName")} required></input>
                                    <input type="text" name='Compañía' placeholder={t("company")}></input>
                                    <input type="text" name='Producto' placeholder={t("product")}></input>
                                    <input type="text" name='Mail' placeholder={t("email")} required></input>
                                    <select type="text" name='Territorio de interés'>
                                        <option value="">{t("territory")}</option>
                                        <option value="item1" className='opcion'>{t("argentina")}</option>
                                        <option value="item2" className='opcion'>{t("brazil")}</option>
                                        <option value="item3" className='opcion'>{t("centroam")}</option>
                                        <option value="item4" className='opcion'>{t("chile")}</option>
                                        <option value="item5" className='opcion'>{t("colombia")}</option>
                                        <option value="item6" className='opcion'>{t("ecuador")}</option>
                                        <option value="item7" className='opcion'>{t("mexico")}</option>
                                        <option value="item8" className='opcion'>{t("peru")}</option>
                                    </select>
                                </div>
                                <div className='formRightDeskDiv'>
                                    <input type="text" name='Cargo' placeholder={t("charge")}></input>
                                    <input type="text" name='Marca de interés' placeholder={t("brandOfInterest")}></input>
                                    <input type="text" name='Giro o industria' placeholder={t("industry")}></input>
                                    <input type="text" name='Teléfono' placeholder={t("phone")}></input>
                                    <textarea type="text" name='Mensaje' placeholder={t("message")} required/>
                                </div>
                            </div>
                            <div className='formButtonDiv'>
                                <button type="submit" className='buttonDiv'>
                                    {t("send")}
                                </button>
                            </div>
                    </form>
                </div>
                <div className='interestBZDiv'>
                    <p className='regularP'>{t("interestBZ")}</p>
                </div>
                <a href='http://www.tycoon360.com.br/' className='tycoon360Link'>
                    <img src={Tycoon360} className="tycoon360"/>
                </a>
            </div> 
            <div className='contactThirdSectiondesk' id="contArg">
                <h2 className='sectionTitle'>{renderStringHMTLtoJSX(t("whereTitle"))}</h2>
                <div className='contacitoPaisCardsWrapper'>
                    <div className='contactoPaisRow'>
                        <PaisContacto pais={t("argentina")} image={Argentina}>
                            <p className='contactP'>+(54) 91165341346</p>
                            <p className='contactSubtitle'>{t("contact")}</p>
                            <p className='contactP'>Eleonora Parodi</p>
                            <a href='mailto:eleonora.parodi@tycoon.mx'>
                                <p className='contactP'>eleonora.parodi@tycoon.mx</p>
                            </a>
                        </PaisContacto>
                        <PaisContacto pais={t("brasil")} image={Brasil}>
                            <p className='contactP'>+55 11 3090 4244</p>
                            <p className='contactSubtitle'>{t("contact")}</p>
                            <p className='contactP'>Erica Giacomelli</p>
                            <a href='mailto:contato@tycoon360.com.br'>
                                <p className='contactP'>contato@tycoon360.com.br</p>
                            </a>
                            <p className='contactP'>{t("webSite")}</p>
                            <a href='http://www.tycoon360.com.br/'>
                                <p className='contactP'>http://www.tycoon360.com.br/</p>
                            </a>
                        </PaisContacto>
                        <PaisContacto pais={t("cam")} image={Cam}>
                            <p className='contactP'>+ 506 8820 4733</p>
                            <p className='contactP'>+ 506 4001 7397</p>
                            <p className='contactSubtitle'>{t("contact")}</p>
                            <p className='contactP'>Dinnia Madriz</p>
                            <a href='mailto:dinnia.madriz@tycoon.m'>
                                <p className='contactP'>dinnia.madriz@tycoon.mx</p>
                            </a>
                        </PaisContacto>
                        <PaisContacto pais={t("chile")} image={Chile}>
                            <p className='contactP'>+56 2 2761-8685</p>
                            <p className='contactSubtitle'>{t("contact")}</p>
                            <p className='contactP'>Alejandra Pinto</p>
                            <a href='mailto:alejandra.pinto@tycoon.mx'>
                                <p className='contactP'>alejandra.pinto@tycoon.mx</p>
                            </a>
                        </PaisContacto>
                    </div>
                    <div className='contactoPaisRow'>
                        <PaisContacto pais={t("colombia")} image={Colombia}>
                            <p className='contactP'>+571 7431650</p>
                            <p className='contactSubtitle'>{t("contact")}</p>
                            <p className='contactP'>José Fernando Córdoba</p>
                            <a href='mailto:jose.cordoba@tycoon.mx'>
                                <p className='contactP'>jose.cordoba@tycoon.mx</p>
                            </a>
                        </PaisContacto>
                        <PaisContacto pais={t("ecuador")} image={Ecuador}>
                            <p className='contactP'>+571 7431650</p>
                            <p className='contactSubtitle'>{t("contact")}</p>
                            <p className='contactP'>Verónica Sandoval</p>
                            <a href='mailto:veronica.sandoval@tycoon.mx'>
                                <p className='contactP'>veronica.sandoval@tycoon.mx</p>
                            </a>
                        </PaisContacto>
                        <PaisContacto pais={t("mexico")} image={Mexico}>
                            <p className='contactP'>+5255 5395 4111</p>
                            <p className='contactP'>+5255 5395 7833</p>
                            <p className='contactSubtitle'>{t("contact")}</p>
                            <p className='contactP'>Dalia Benbassat</p>
                            <a href='mailto:dalia@tycoon.mx'>
                                <p className='contactP'>dalia@tycoon.mx</p>
                            </a>
                        </PaisContacto>
                        <PaisContacto pais={t("peru")} image={Peru}>
                            <p className='contactP'>+51 994 102 984</p>
                            <p className='contactSubtitle'>{t("contact")}</p>
                            <p className='contactP'>Milka Miletich</p>
                            <a href='mailto:milka.miletich@tycoon.mx'>
                                <p className='contactP'>milka.miletich@tycoon.mx</p>
                            </a>
                        </PaisContacto>
                    </div>
                </div>

            </div> 
        </div>
       )}
    </Layout>
  )
}

export default ContactPage

