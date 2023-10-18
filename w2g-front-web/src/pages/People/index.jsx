import React, { useState } from 'react'
import { Menu, TitlePage, NavTab, SearchInput, PeopleCardList } from '../../components/index'
// import * as Styled from './style.jsx'
import { StyledContentLogged } from '../../style';

export default function People() {
    const [isOpen, setIsOpen] = useState(false);
    const [getNavTab, setNavTab] = useState(1);

    const perssonList = [
        {
          id: 4,//
          name: 'Luan Silva',//
          nickname: 'luan.s',//
          joinedOn: '2022-05-15',//
          requestStatus: 'request', // or 'request' or 'friends'
          visitedPlaces: 'Paris, New York, Tokyo',//
          visited: '2 locais, 1 viagem, 1 evento (4)',//
          likedTrips: 0,
          savedTrips: 1,
          description: '@luan.AlbertS \nGosto viajar e conhecer novas pessoas, ir a eventos de tecnologia e gosto também de tudo que envolva o estilo classico'
        }
      ];

    return(
        <>
            <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/> 
            <div className={isOpen ? 'contentClose' : 'contentOpen'}>
            <TitlePage text={"Pessoas"}/>
            <StyledContentLogged>
                        <NavTab tabs={['Amigos', 'Usuários']} activeTab={getNavTab} onTabClick={setNavTab}/>
                        {getNavTab === 1 &&
                            <>
                                <SearchInput disableFilter/>
                                <PeopleCardList list={perssonList}/>
                            </>
                        }
                        {getNavTab === 2 &&
                            <>
                                <SearchInput disableFilter/>
                                <PeopleCardList list={perssonList}/>
                            </>
                        }
                        
            </StyledContentLogged>
            </div>
        </>
    )
}