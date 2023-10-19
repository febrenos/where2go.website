import React, { useState } from 'react'
import { Menu, TitlePage, GridItems } from '../../components/index'
import { StyledContentLogged } from '../../style';

export default function Rank() {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
            <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/> 
            <div className={isOpen ? 'contentClose' : 'contentOpen'}>
            <TitlePage text={"Rank"}/>
            <StyledContentLogged>
                <GridItems />
            </StyledContentLogged>
            </div>
        </>
    )
}