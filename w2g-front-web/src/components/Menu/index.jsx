import React from 'react'
// import styled from 'styled-components';

import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserAlt, faChevronRight, faPaperPlane, faBell, faGear, faRightFromBracket, faHome, faMapLocationDot, faPlane, faUserGroup, faCalendarDays } from '@fortawesome/free-solid-svg-icons';//faChevronCircleRight
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
                    <li><FontAwesomeIcon className="icon" icon={faUserAlt}/><a>Home</a>Perfil</li>
                </NavLink>
                <NavLink to={"/"}>
                    <li><FontAwesomeIcon className="icon" icon={faHome}/><a>Home</a></li>
                </NavLink>
                <NavLink to={"/ToPlan"}>
                    <li><FontAwesomeIcon className="icon" icon={faMapLocationDot}/><a>Planejar</a></li>
                </NavLink>
                <NavLink to={"/Travels"}>
                    <li><FontAwesomeIcon className="icon" icon={faPlane}/><a>Viagens</a></li>
                </NavLink>
                <NavLink to={"/People"}>
                    <li><FontAwesomeIcon className="icon" icon={faUserGroup}/><a>Pessoas</a></li>
                </NavLink>
                <NavLink to={"/Notifications"}>
                    <li><FontAwesomeIcon className="icon" icon={faBell}/><a>Notificações</a></li>
                </NavLink>
                <NavLink to={"/Calendar"}>
                    <li><FontAwesomeIcon className="icon" icon={faCalendarDays}/><a>Calendário</a></li>
                </NavLink>
                <NavLink to={"/ChatBot"}>
                    <li><FontAwesomeIcon className="icon" icon={faPaperPlane}/><a>Chatbot</a></li>
                </NavLink>
                <NavLink to={"/Settings"}>
                    <li><FontAwesomeIcon className="icon" icon={faGear}/><a>Configurações</a></li>
                </NavLink>
                <NavLink to={"/SignIn"}>
                    <li id="logout"><FontAwesomeIcon className="icon" icon={faRightFromBracket}/><a>Sair</a></li>
                </NavLink>
            </ul>
        </div>   
    )
}
