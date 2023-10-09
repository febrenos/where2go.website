import React from 'react'
import * as Styled from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaseball, faBurger, faChampagneGlasses, faCity, faFlag, faMasksTheater, faMoon, faMountainSun, faMusic, faParachuteBox, faPeopleGroup, faPlane, faPlantWilt, faSnowflake, faSun, faTelevision, faUmbrellaBeach, faUsers, faWater } from '@fortawesome/free-solid-svg-icons'
import ImgGoldTrophy from '../../img/goldTrophy.png';
import ImgSilverTrophy from '../../img/silverTrophy.png';
import ImgBronzeTrophy from '../../img/bronzeTrophy.png';
import ImgStartTrophy from '../../img/startTrophy.png';

// <Styled.Box title={""} size={""}/>
const achievements = 
[
    {
        title:'Ouro',
        size:'big', 
        score:300, 
        description:'Simplesmente Incrível! Você é Ouro', 
        typeScore:'points',
        color:'#d29f1e'
    },
    {
        title:'Prata',
        size:'big', 
        score:100, 
        description:'Muito bom! Você alcancou o nível é nível Prata', 
        typeScore:'points',
        color:'#939393'
    },
    {
        title:'Bronze',
        size:'big', 
        score:50, 
        description:'bom! Você alcancou o nível é nível Bronze', 
        typeScore:'points',
        color:'#d4660b'
    },
    {
        title:'Iniciante',
        size:'big', 
        score:10, 
        description:'Bem vindo! Conquiste trofeús', 
        typeScore:'points',
        color:'#26252a'
    },
    {
        title:'Natureza', 
        size:'small', 
        score:4, 
        description:'Viagens com natureza', 
        typeScore:'days',
    },
    {
        title:'Culiária', 
        size:'small', 
        score:0, 
        description:'Viagens com culinária', 
        typeScore:'days',
    },
    {
        title:'Aventura', 
        size:'medium', 
        score:10, 
        description:'Viagens com natureza', 
        typeScore:'days',
    },
    {
        title:'Esporte', 
        size:'small', 
        score:0, 
        description:'Viagens com Esporte', 
        typeScore:'days'
    },
    {
        title:'Classico', 
        size:'small', 
        score:2, 
        description:'locais clássicos', 
        typeScore:'days'
    },
    {
        title:'Dia', 
        size:'small', 
        score:1, 
        description:'Locais visitados de dia', 
        typeScore:'days'
    },
    {
        title:'Noite', 
        size:'small', 
        score:0, 
        description:'Locais visitados de noite', 
        typeScore:'days'
    },
    {
        title:'Tech', 
        size:'small', 
        score:2, 
        description:'Locais com tecnologia visitados ', 
        typeScore:'days'
    },
    {
        title:'Amigos', 
        size:'small', 
        score:0, 
        description:'Locais com amigos', 
        typeScore:'days'
    },
    {
        title:'Musica', 
        size:'small', 
        score:0, 
        description:'Locais com musica', 
        typeScore:'days'
    },
    {
        title:'Água', 
        size:'small', 
        score:0, 
        description:'Locais com água', 
        typeScore:'days'
    },
    {
        title:'Frio', 
        size:'small', 
        score:0, 
        description:'Locais frios visitados', 
        typeScore:'days'
    },
    {
        title:'Quente', 
        size:'medium',
        score:11, 
        description:'Locais quentes visitados', 
        typeScore:'days'
    },
    {
        title:'Evento', 
        size:'small', 
        score:0, 
        description:'Eventos visitados', 
        typeScore:'days'
    },
    {
        title:'Viagem', 
        size:'small', 
        score:0, 
        description:'Viagens realizadas', 
        typeScore:'days'
    },
    {
        title:'Urbano', 
        size:'small', 
        score:0, 
        description:'Locais urbanos visitados', 
        typeScore:'days'
    },
    {
        title:'Desertico', 
        size:'small', 
        score:0, 
        description:'Locais Desertico visitados', 
        typeScore:'days'
    },
    {
        title:'Air', 
        size:'small', 
        score:0, 
        description:'Aventura nas alturas', 
        typeScore:'days'
    },
    {
        title:'Show', 
        size:'small', 
        score:0, 
        description:'shows visitados', 
        typeScore:'days'
    }
]


export function GridItems({ size }) {
    // const [getRank, setRank] = useState('Prata');
    return (
      <Styled.ContentGrid>
        {achievements.map((item, index) => (
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
    );
  }