import React from 'react'
// import styled from 'styled-components';

import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserAlt, faChevronRight, faPaperPlane, faBell, faGear, faRightFromBracket, faHome, faMapLocationDot, faUserGroup, faCalendarDays, faMedal } from '@fortawesome/free-solid-svg-icons';//faChevronCircleRight
import './style.css'

export function Menu(props){
    return(
        <div>
            <div className="menuMobileButton" id={props.isOpen ? 'iMenuOpen' : 'iMenuClose'} onClick={props.onClick}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <ul className={props.isOpen ? 'menuOpen' : 'menuClose'}>
                <li onClick={props.onClick}><FontAwesomeIcon className=" menuButton icon" icon={faChevronRight} id={props.isOpen ? 'iMenuOpen' : 'iMenuClose'}/></li>
                <NavLink to={"/Profile"}>
                    <li>
                        <FontAwesomeIcon className="icon" icon={faUserAlt}/>
                        <a>Perfil</a>
                    </li>
                </NavLink>

                <NavLink to={"/"}>
                    <li><FontAwesomeIcon className="icon" icon={faHome}/><a>Home</a></li>
                </NavLink>

                <NavLink to={"/to-plan"}>
                    <li><FontAwesomeIcon className="icon" icon={faMapLocationDot}/><a>Planejar</a></li>
                </NavLink>

                <NavLink to={"/rank"}>
                    <li><FontAwesomeIcon className="icon" icon={faMedal}/><a>Rank</a></li>
                </NavLink>

                <NavLink to={"/people"}>
                    <li><FontAwesomeIcon className="icon" icon={faUserGroup}/><a>Pessoas</a></li>
                </NavLink>

                <NavLink to={"/notifications"}>
                    <li><FontAwesomeIcon className="icon" icon={faBell}/><a>Notificações</a></li>
                </NavLink>

                <NavLink to={"/calendar"}>
                    <li><FontAwesomeIcon className="icon" icon={faCalendarDays}/><a>Calendário</a></li>
                </NavLink>

                <NavLink to={"/chatbot"}>
                    <li><FontAwesomeIcon className="icon" icon={faPaperPlane}/><a>Chatbot</a></li>
                </NavLink>

                <NavLink to={"/settings"}>
                    <li><FontAwesomeIcon className="icon" icon={faGear}/><a>Configurações</a></li>
                </NavLink>
                
                <NavLink to={"/sign-in"}>
                    <li id="logout"><FontAwesomeIcon className="icon" icon={faRightFromBracket}/><a>Sair</a></li>
                </NavLink>
            </ul>
        </div>   
    )
}
