import React, { useState } from 'react'
import { Menu, TitlePage, NavTab, SearchInput, TravelCardList } from '../../components/index'
// import * as Styled from './style.jsx'
import { StyledContentLogged } from '../../style';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [getNavTab, setNavTab] = useState(1);

    const travelList = [
        {
          id: 4,
          title: 'Safari Adventure',
          date: '20/11/2023',
          place: 'African Savanna',
          price: '$2000',
          type: 'viagem',
          transport: 'Jeep Safari',
          displacementTime: '5 hours',
          documents: 'Passport, Visa',
          duration: '7 days',
          links: 'www.example.com/safari-adventure',
          generatedByIa:"neurotrix",
          createdBy:'luan.s',
          description: 'Embarked on a thrilling safari adventure in Africa, encountering majestic wildlife and breathtaking landscapes.',
          like:200,
          isLike: false,
          isSave: true,
          isCreatedByMe:false,
          isAgended:false,
          isVisited:false,
          visitedByPeople:10,
          visitedByMe:2,
        },
        {
          id: 5,
          title: 'Extreme Sports Experience',
          date: '10/12/2023',
          place: 'São Paulo, Brazil',
          price: '$1500',
          type: 'esporte',
          transport: 'Local transportation',
          displacementTime: '3 days',
          documents: 'ID, Waiver',
          duration: '4 days',
          links: 'www.example.com/extreme-sports',
          generatedByIa:"chatgpt",
          createdBy:'fe.brenos',
          description: 'Participate in various extreme sports activities such as skydiving, bungee jumping, and rock climbing for an adrenaline-packed experience.',
          like:9,
          isLike: true,
          isSave: true,
          isCreatedByMe:true,
          isAgended:true,
          isVisited:false,
          visitedByPeople:10,
          visitedByMe:0,
        }
      ];

    return(
        <>
            <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/> 
            <div className={isOpen ? 'contentClose' : 'contentOpen'}>
            <TitlePage text={"Home"}/>
            <StyledContentLogged>
                        {getNavTab === 1 &&
                            <>
                                <SearchInput searchType="travel" placeholder="Buscar" />
                                <TravelCardList list={travelList}/>
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