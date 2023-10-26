import React from 'react'
import * as Styled from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaseball, faBurger, faChampagneGlasses, faCity, faFlag, faMasksTheater, faMoon, faMountainSun, faMusic, faParachuteBox, faPeopleGroup, faPlane, faPlantWilt, faSnowflake, faSun, faTelevision, faUmbrellaBeach, faUsers, faWater } from '@fortawesome/free-solid-svg-icons'
import ImgGoldTrophy from '../../img/goldTrophy.png';
import ImgSilverTrophy from '../../img/silverTrophy.png';
import ImgBronzeTrophy from '../../img/bronzeTrophy.png';
import ImgStartTrophy from '../../img/startTrophy.png';
import { Text } from '../Text';

// <Styled.Box title={""} size={""}/>


export function GridItems({ list }) {
    // const [getlist, setlist] = useState('Prata');
    return (
      <Styled.All>
          <Styled.Rank>
          {list.listName === 'Ouro' && <Styled.Img src={ImgGoldTrophy} />}
          {list.listName === 'Prata' && <Styled.Img src={ImgSilverTrophy} />}
          {list.listName === 'Bronze' && <Styled.Img src={ImgBronzeTrophy} />}
          {list.listName === 'Iniciante' && <Styled.Img src={ImgStartTrophy} />}
          <div>
            <Text text={`${list.nickname}`} size={'lg'}/>
            <Text text={` ${list.score}/${list.nextScore}`} size={'xlg'} bold/>
            <Text text={` ${list.travelledDistance} km`} size={'xlg'} bold/>
          </div>
          </Styled.Rank>
      <Styled.ContentGrid>
        {list.achievements.map((item, index) => (
          <Styled.Box size={item.size} key={index} color={item.color}>
            {item.title === 'Ouro' && <Styled.Img src={ImgGoldTrophy} />}
            {item.title === 'Prata' && <Styled.Img src={ImgSilverTrophy} />}
            {item.title === 'Bronze' && <Styled.Img src={ImgBronzeTrophy} />}
            {item.title === 'Iniciante' && <Styled.Img src={ImgStartTrophy} />}
            {item.title === 'Natureza' && (
              <FontAwesomeIcon className="icon" icon={faPlantWilt} />
            )}
            {item.title === 'Culiária' && (
              <FontAwesomeIcon className="icon" icon={faBurger} />
            )}
            {item.title === 'Aventura' && (
              <FontAwesomeIcon className="icon" icon={faFlag} />
            )}
            {item.title === 'Esporte' && (
              <FontAwesomeIcon className="icon" icon={faBaseball} />
            )}
            {item.title === 'Classico' && (
              <FontAwesomeIcon className="icon" icon={faChampagneGlasses} />
            )}
            {item.title === 'Dia' && (
              <FontAwesomeIcon className="icon" icon={faSun} />
            )}
            {item.title === 'Noite' && (
              <FontAwesomeIcon className="icon" icon={faMoon} />
            )}
            {item.title === 'Tech' && (
              <FontAwesomeIcon className="icon" icon={faTelevision} />
            )}
            {item.title === 'Amigos' && (
              <FontAwesomeIcon className="icon" icon={faUsers} />
            )}
            {item.title === 'Musica' && (
              <FontAwesomeIcon className="icon" icon={faMusic} />
            )}
            {item.title === 'Água' && (
              <FontAwesomeIcon className="icon" icon={faWater} />
            )}
            {item.title === 'Frio' && (
              <FontAwesomeIcon className="icon" icon={faSnowflake} />
            )}
            {item.title === 'Quente' && (
              <FontAwesomeIcon className="icon" icon={faUmbrellaBeach} />
            )}
            {item.title === 'Evento' && (
              <FontAwesomeIcon className="icon" icon={faPeopleGroup} />
            )}
            {item.title === 'Viagem' && (
              <FontAwesomeIcon className="icon" icon={faPlane} />
            )}
            {item.title === 'Urbano' && (
              <FontAwesomeIcon className="icon" icon={faCity} />
            )}
            {item.title === 'Desertico' && (
              <FontAwesomeIcon className="icon" icon={faMountainSun} />
            )}
            {item.title === 'Air' && (
              <FontAwesomeIcon className="icon" icon={faParachuteBox} />
            )}
            {item.title === 'Show' && (
              <FontAwesomeIcon className="icon" icon={faMasksTheater} />
            )}
            <Styled.Flex>
            <div>{item.title}</div>
            <div>{item.score}</div>
            </Styled.Flex>
            <Styled.Description>
                {item.description}
            </Styled.Description>
          </Styled.Box>
        ))}
      </Styled.ContentGrid>
      </Styled.All>
    );
  }