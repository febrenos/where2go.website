import React, { useState } from 'react'
import {TitlePage, Menu, SearchInput, TravelCardList} from '../../components/index';
import { StyledContentLogged } from '../../style';

export default function Calendar() {
    const [isOpen, setIsOpen] = useState(false);

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
          createdBy:'luan.s',
          visibility:'todos',//privado / amigos / convidados / todos
          like:200,
          isLike: false,
          isSave: true,
          isCreatedByMe:false,
          isAgended:true,
          isVisited:false,
          visitedByPeople:10,
          visitedByMe:2,
          description: 'Embarked on a thrilling safari adventure in Africa, encountering majestic wildlife and breathtaking landscapes.'
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
          createdBy:'fe.brenos',
          visibility:'todos',
          like:9,
          isLike: true,
          isSave: true,
          isCreatedByMe:true,
          isAgended:true,
          isVisited:false,
          visitedByPeople:10,
          visitedByMe:0,
          description: 'Participate in various extreme sports activities such as skydiving, bungee jumping, and rock climbing for an adrenaline-packed experience.'
        }
      ];


    const agendedDates = travelList.map((travel) => travel.date);
    
    return(
        <>
        <main>
            <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/> 
            <div className={isOpen ? 'contentClose' : 'contentOpen'}>
             <TitlePage text={"Calendário"}/>
             <StyledContentLogged>
                <SearchInput searchType="calendar" placeholder="Buscar" agended={agendedDates} startFilter/>
                <TravelCardList list={travelList} type="agended"/>
             </StyledContentLogged>
            </div>
        </main>
        </>
    )
}