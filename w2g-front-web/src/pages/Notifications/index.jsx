import React, { useState } from 'react'
import { Menu, TitlePage, AlertCard } from '../../components/index'
// import * as Styled from './style.jsx'
import { StyledContentLogged } from '../../style';

export default function Notifications() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/> 
            <div className={isOpen ? 'contentClose' : 'contentOpen'}>
            <TitlePage text={"Notificaçoes"}/>
            <StyledContentLogged>
                        <AlertCard title={'Title Card'} date={'29/10/2002'} description={'texto exemplo explicando sobre a viagem'}/>
            </StyledContentLogged>
            </div>
        </>
    )
}