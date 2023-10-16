import React, { useState } from 'react'
import { Menu, TitlePage, NavTab, SearchInput, GridItems } from '../../components/index'
// import * as Styled from './style.jsx'
import { BackgroundCard, StyledContentLogged } from '../../style';

export default function Rank() {
    const [isOpen, setIsOpen] = useState(false);
    const [getNavTab, setNavTab] = useState(1);

    return(
        <>
            <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/> 
            <div className={isOpen ? 'contentClose' : 'contentOpen'}>
            <TitlePage text={"Rank"}/>
            <StyledContentLogged>
                        <NavTab tabs={['Realizadas', 'Salvas', 'Curtidas']} activeTab={getNavTab} onTabClick={setNavTab}/>
                        {getNavTab === 1 &&
                            <>
                                <SearchInput searchType="travel" placeholder="Buscar" />
                                <GridItems />
                            </>
                        }
                        {getNavTab === 2 &&
                            <>
                                <SearchInput searchType="travel" placeholder="Buscar" />
                            </>
                        }
                        {getNavTab === 3 &&
                            <>
                                <SearchInput searchType="travel" placeholder="Buscar" />
                            </>
                        }
                        
            </StyledContentLogged>
            </div>
        </>
    )
}