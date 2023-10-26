import React, { useEffect, useState } from 'react';
import * as Styled from './style';
import { Text } from '../index';

const wordPreferencesModel = [
  {
    key: 'viagem',
    value: 'Viagem'
  },
  {
    key: 'exploracao',
    value: 'Exploração'
  },
  {
    key: 'camping',
    value: 'Camping'
  },
  {
    key: 'aereo',
    value: 'Aéreo'
  },
  {
    key: 'ponto turistico',
    value: 'Ponto turístico'
  },
  {
    key: 'natureza',
    value: 'Natureza'
  },
  {
    key: 'praia',
    value: 'Praia'
  },
  {
    key: 'montanha',
    value: 'Montanha'
  },
  {
    key: 'escalada',
    value: 'Escalada'
  },
  {
    key: 'alturas',
    value: 'Alturas'
  },
  {
    key: 'cidade',
    value: 'Cidade'
  },
  {
    key: 'urbanizado',
    value: 'Urbanizado'
  },
  {
    key: 'desertico',
    value: 'Desertico'
  },
  {
    key: 'dia',
    value: 'Dia'
  },
  {
    key: 'noite',
    value: 'Noite'
  },
  {
    key: 'sol',
    value: 'Sol'
  },
  {
    key: 'frio',
    value: 'Frio'
  },
  {
    key: 'quente',
    value: 'Quente'
  },
  {
    key: 'inverno',
    value: 'Inverno'
  },
  {
    key: 'verao',
    value: 'Verão'
  },
  {
    key: 'show',
    value: 'Show'
  },
  {
    key: 'comedia',
    value: 'Comédia'
  },
  {
    key: 'danca',
    value: 'Dança'
  },
  {
    key: 'evento',
    value: 'Evento'
  },
  {
    key: 'teatro',
    value: 'Teatro'
  },
  {
    key: 'museu',
    value: 'Museu'
  },
  {
    key: 'filmes',
    value: 'Filmes'
  },
  {
    key: 'comida',
    value: 'Comida'
  },
  {
    key: 'culinaria',
    value: 'Culinária'
  },
  {
    key: 'bar',
    value: 'Bar'
  },
  {
    key: 'restaurante',
    value: 'Restaurante'
  },
  {
    key: 'esporte',
    value: 'Esporte'
  },
  {
    key: 'surf',
    value: 'Surf'
  },
  {
    key: 'mergulho',
    value: 'Mergulho'
  },
  {
    key: 'musica',
    value: 'Música'
  },
  {
    key: 'jazz',
    value: 'Jazz'
  },
  {
    key: 'pop',
    value: 'Pop'
  },
  {
    key: 'eletronica',
    value: 'Eletrônica'
  },
  {
    key: 'mpb',
    value: 'MPB'
  },
  {
    key: 'rock',
    value: 'Rock'
  },
  {
    key: 'samba',
    value: 'Samba'
  },
  {
    key: 'pagode',
    value: 'Pagode'
  },
  {
    key: 'funk',
    value: 'Funk'
  },
  {
    key: 'futurista',
    value: 'Futurista'
  },
  {
    key: 'tecnologia',
    value: 'Tecnologia'
  },
  {
    key: 'historico',
    value: 'Histórico'
  },
  {
    key: 'arqueologia',
    value: 'Arqueologia'
  },
  {
    key: 'ciencia',
    value: 'Ciência'
  },
  {
    key: 'literatura',
    value: 'Literatura'
  },
  {
    key: 'astronomia',
    value: 'Astronomia'
  },
  {
    key: 'ficcao cientifica',
    value: 'Ficção científica'
  },
  {
    key: 'amigos',
    value: 'Amigos'
  },
  {
    key: 'familia',
    value: 'Família'
  },
  {
    key: 'somente eu',
    value: 'Somente eu'
  },
  {
    key: 'assustador',
    value: 'Assustador'
  },
  {
    key: 'fantasia',
    value: 'Fantasia'
  },
  {
    key: 'romance',
    value: 'Romance'
  },
  {
    key: 'classico',
    value: 'Clássico'
  }
];

const defaultList = [];
export function WordPreferences({list=defaultList}) {
  const [isActive, setIsActive] = useState({});
  const [isShowMore, setIsShowMore] = useState(false);

  const handleIsShowMore = () => {
    setIsShowMore(!isShowMore);
  };

  const handleClick = (wordName) => {
    setIsActive((prevIsActive) => {
      const updatedActive = { ...prevIsActive, [wordName]: !prevIsActive[wordName] };
  
      if (updatedActive[wordName]) {
        // Add to the list when activated
        list.push(wordName);
      } else {
        // Remove from the list when deactivated
        const index = list.indexOf(wordName);
        if (index !== -1) {
          list.splice(index, 1);
        }
      }
      console.log(list)
      return updatedActive;
    });
  };

  const displayList = isShowMore
    ? wordPreferencesModel
    : wordPreferencesModel.slice(0, 8);

  useEffect(() => {
    const initialIsActiveState = list.reduce((acc, word) => {
      acc[word] = true;
      return acc;
    }, {});
    setIsActive(initialIsActiveState);
  }, [list]);

  return (
    <Styled.Content>
      <Text text={'Preferências'} size={'lg'} bold />
      <Styled.ContentWords>
        {displayList.map((item, index) => (
          <Styled.Button
            key={index}
            onClick={() => handleClick(item.key)}
            isActive={isActive[item.key]}
          >
            {item.value}
          </Styled.Button>
        ))}
        {wordPreferencesModel.length > 8 && (
          <Styled.ButtonIsShowMore onClick={handleIsShowMore}>
            {isShowMore ? 'Mostrar menos' : 'Mostrar mais'}
          </Styled.ButtonIsShowMore>
        )}
      </Styled.ContentWords>
    </Styled.Content>
  );
}