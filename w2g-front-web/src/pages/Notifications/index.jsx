import React, { useState } from 'react'
import { Menu, TitlePage, NotificationCardList } from '../../components/index'
// import * as Styled from './style.jsx'
import { StyledContentLogged } from '../../style';


export default function Notifications() {
    const [isOpen, setIsOpen] = useState(false);

const alertList = [
  {
    cardIndex: 4,
    title: 'Safari Adventure',
    date: '20/11/2023',
    description: 'Embarked on a thrilling safari adventure in Africa, encountering majestic wildlife and breathtaking landscapes wwwww wwwwwww w w w w w w w w w ww w w w w  w  w w w ww w w w.'
  },
  {
    cardIndex: 5,
    title: 'Historical Tour',
    date: '12/03/2024',
    description: 'Explored ancient ruins and historical landmarks, diving into the rich history of civilizations long past.'
  },
  {
    cardIndex: 6,
    title: 'Mountain Expedition',
    date: '08/09/2024',
    description: 'Conquered towering mountains, facing challenges and enjoying the exhilarating beauty from the summit.'
  },
  {
    cardIndex: 7,
    title: 'Culinary Journey',
    date: '17/05/2025',
    description: 'Embarked on a gastronomic adventure, tasting diverse cuisines and experiencing the joy of cooking in local kitchens.'
  },
  {
    cardIndex: 8,
    title: 'Island Hopping',
    date: '22/07/2025',
    description: 'Hopped from one tropical island to another, exploring pristine beaches, coral reefs, and vibrant marine life.'
  },
];


    return(
        <>
            <Menu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}/> 
            <div className={isOpen ? 'contentClose' : 'contentOpen'}>
            <TitlePage text={"Notificações"}/>
            <StyledContentLogged>
                <NotificationCardList list={alertList} />
            </StyledContentLogged>
            </div>
        </>
    )
}