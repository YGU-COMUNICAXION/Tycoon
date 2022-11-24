import React, {useState} from 'react';
import "./styles.css"
import { useTranslation } from "gatsby-plugin-react-i18next";
import Nav from 'react-bootstrap/Nav';
import NoticiasCard from '../noticias-card';
import Cobra from "../../images/mobile/noticias/noticiasRecientes/cobra.png"
import Nuevo from "../../images/mobile/noticias/noticiasRecientes/nuevo.png"
import useWindowSize from '../../hooks/useWindowSize';

function NewsNav() {
    const [active, setActive] = useState(1)
    const { t } = useTranslation("news");
    const windowSize = useWindowSize();

    return (
        <>
        <Nav fill variant="tabs" activeKey={active}>
            <Nav.Item onClick={()=> setActive(1)}>
                <Nav.Link eventKey="link-1">2022</Nav.Link>
            </Nav.Item>
            <div className="navDivisor"/>
            <Nav.Item onClick={()=> setActive(2)}>
                <Nav.Link eventKey="link-2">2021</Nav.Link>
            </Nav.Item>
            <div className="navDivisor"/>
            <Nav.Item onClick={()=> setActive(3)}>
                <Nav.Link eventKey="link-3">2020</Nav.Link>
            </Nav.Item>
            <div className="navDivisor"/>
            <Nav.Item onClick={()=> setActive(4)}>
                <Nav.Link eventKey="link-4">2019</Nav.Link>
            </Nav.Item>
        </Nav>
        <div className='noticiasGrid'>
        {windowSize < 752? (
            <>
                {active === 1 && (
                    <>
                        <div className='noticiasRow'>
                            <NoticiasCard image={Cobra} title={"Cobra Kai tiene su primera Fashion Collab de la mano de Prima Volta."} date={"07 de Mayo  ·  2021"}/>
                            <NoticiasCard image={Cobra} title={"Cobra Kai tiene su primera Fashion Collab de la mano de Prima Volta."} date={"07 de Mayo  ·  2021"}/>
                        </div>
                        <div className='noticiasRow'>
                            <NoticiasCard image={Cobra} title={"Cobra Kai tiene su primera Fashion Collab de la mano de Prima Volta."} date={"07 de Mayo  ·  2021"}/>
                            <NoticiasCard image={Cobra} title={"Cobra Kai tiene su primera Fashion Collab de la mano de Prima Volta."} date={"07 de Mayo  ·  2021"}/>
                        </div>
                        <div className='noticiasRow'></div>
                        <div className='noticiasRow'></div>
                        <div className='noticiasRow'></div>
                    </>
                )}
                {active === 2 && (
                    <>
                        <div className='noticiasRow'>
                            <NoticiasCard image={Nuevo} title={"Cobra Kai tiene su primera Fashion Collab de la mano de Prima Volta."} date={"07 de Mayo  ·  2021"}/>
                            <NoticiasCard image={Nuevo} title={"Cobra Kai tiene su primera Fashion Collab de la mano de Prima Volta."} date={"07 de Mayo  ·  2021"}/>
                        </div>
                        <div className='noticiasRow'>
                            <NoticiasCard image={Nuevo} title={"Cobra Kai tiene su primera Fashion Collab de la mano de Prima Volta."} date={"07 de Mayo  ·  2021"}/>
                            <NoticiasCard image={Nuevo} title={"Cobra Kai tiene su primera Fashion Collab de la mano de Prima Volta."} date={"07 de Mayo  ·  2021"}/>
                        </div>                    
                        <div className='noticiasRow'></div>
                        <div className='noticiasRow'></div>
                        <div className='noticiasRow'></div>
                    </>
                )}
                {active === 3 && (
                    <>
                        <div className='noticiasRow'></div>
                        <div className='noticiasRow'></div>
                        <div className='noticiasRow'></div>
                        <div className='noticiasRow'></div>
                        <div className='noticiasRow'></div>
                    </>
                )}
                {active === 4 && (
                    <>
                        <div className='noticiasRow'></div>
                        <div className='noticiasRow'></div>
                        <div className='noticiasRow'></div>
                        <div className='noticiasRow'></div>
                        <div className='noticiasRow'></div>
                    </>
                )}
            </>

        ):(
            <>
            {active === 1 && (
                <>
                    <div className='noticiasRow'>
                        <NoticiasCard image={Cobra} title={"Cobra Kai tiene su primera Fashion Collab de la mano de Prima Volta."} date={"07 de Mayo  ·  2021"}/>
                        <NoticiasCard image={Cobra} title={"Cobra Kai tiene su primera Fashion Collab de la mano de Prima Volta."} date={"07 de Mayo  ·  2021"}/>
                        <NoticiasCard image={Cobra} title={"Cobra Kai tiene su primera Fashion Collab de la mano de Prima Volta."} date={"07 de Mayo  ·  2021"}/>
                    </div>
                    <div className='noticiasRow'>
                        <NoticiasCard image={Cobra} title={"Cobra Kai tiene su primera Fashion Collab de la mano de Prima Volta."} date={"07 de Mayo  ·  2021"}/>
                        <NoticiasCard image={Cobra} title={"Cobra Kai tiene su primera Fashion Collab de la mano de Prima Volta."} date={"07 de Mayo  ·  2021"}/>
                        <NoticiasCard image={Cobra} title={"Cobra Kai tiene su primera Fashion Collab de la mano de Prima Volta."} date={"07 de Mayo  ·  2021"}/>

                    </div>
                    <div className='noticiasRow'></div>
                    <div className='noticiasRow'></div>
                    <div className='noticiasRow'></div>
                </>
            )}
            {active === 2 && (
                <>
                    <div className='noticiasRow'>
                        <NoticiasCard image={Nuevo} title={"Cobra Kai tiene su primera Fashion Collab de la mano de Prima Volta."} date={"07 de Mayo  ·  2021"}/>
                        <NoticiasCard image={Nuevo} title={"Cobra Kai tiene su primera Fashion Collab de la mano de Prima Volta."} date={"07 de Mayo  ·  2021"}/>
                        <NoticiasCard image={Nuevo} title={"Cobra Kai tiene su primera Fashion Collab de la mano de Prima Volta."} date={"07 de Mayo  ·  2021"}/>
                    </div>
                    <div className='noticiasRow'>
                        <NoticiasCard image={Nuevo} title={"Cobra Kai tiene su primera Fashion Collab de la mano de Prima Volta."} date={"07 de Mayo  ·  2021"}/>
                        <NoticiasCard image={Nuevo} title={"Cobra Kai tiene su primera Fashion Collab de la mano de Prima Volta."} date={"07 de Mayo  ·  2021"}/>
                        <NoticiasCard image={Nuevo} title={"Cobra Kai tiene su primera Fashion Collab de la mano de Prima Volta."} date={"07 de Mayo  ·  2021"}/>
                    </div>                    
                    <div className='noticiasRow'></div>
                    <div className='noticiasRow'></div>
                    <div className='noticiasRow'></div>
                </>
            )}
            {active === 3 && (
                <>
                    <div className='noticiasRow'></div>
                    <div className='noticiasRow'></div>
                    <div className='noticiasRow'></div>
                    <div className='noticiasRow'></div>
                    <div className='noticiasRow'></div>
                </>
            )}
            {active === 4 && (
                <>
                    <div className='noticiasRow'></div>
                    <div className='noticiasRow'></div>
                    <div className='noticiasRow'></div>
                    <div className='noticiasRow'></div>
                    <div className='noticiasRow'></div>
                </>
            )}
            </>
        )}

        </div>
        </>
    )
}

export default NewsNav;