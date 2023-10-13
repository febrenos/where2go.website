import React, { useEffect, useState } from 'react';
import * as Styled from './style';
import { Text } from '../index';

const words = [
  {
    nome: 'Sol',
    isActive: true,
  },
  {
    nome: 'Clássico',
    isActive: true,
  },
  {
    nome: 'Música',
    isActive: true,
  },
  {
    nome: 'Histórico',
    isActive: false,
  },
  {
    nome: 'Comida',
    isActive: true,
  },
  {
    nome: 'Ar livre',
    isActive: false,
  },
  {
    nome: 'Água',
    isActive: false,
  },
  {
    nome: 'Natureza',
    isActive: false,
  },
  {
    nome: 'Esporte',
    isActive: true,
  },
  {
    nome: 'Aventura',
    isActive: false,
  },
  {
    nome: 'Relaxamento',
    isActive: false,
  },
  {
    nome: 'Cultura',
    isActive: false,
  },
  {
    nome: 'Praia',
    isActive: true,
  },
  {
    nome: 'Montanha',
    isActive: false,
  },
  {
    nome: 'Cidade',
    isActive: false,
  },
  {
    nome: 'Inverno',
    isActive: false,
  },
  {
    nome: 'Verão',
    isActive: true,
  },
  {
    nome: 'Outono',
    isActive: false,
  },
  {
    nome: 'Primavera',
    isActive: false,
  },
];

export function WordPreferences({list}) {
  list=words
  const initialIsActiveState = list.reduce((acc, word) => {
    acc[word.nome] = word.isActive;
    return acc;
  }, {});

  const [isActive, setIsActive] = useState(initialIsActiveState);
  const [isShowMore, setIsShowMore] = useState(false);

  const handleIsShowMore = () => {
    setIsShowMore(!isShowMore);
  };

  const handleClick = (wordName) => {
    setIsActive((prevIsActive) => {
      const updatedActive = { ...prevIsActive, [wordName]: !prevIsActive[wordName] };
      return updatedActive;
    });
  };

  // Determine the items to display based on isShowMore
  const displayList = isShowMore ? list : list.slice(0, 8);

  useEffect(() => {
    setIsActive((prevIsActive) => {
      const updatedActive = { ...prevIsActive };
      list.forEach((word) => {
        updatedActive[word.nome] = word.isActive;
      });
      return updatedActive;
    });
  }, [isShowMore]);

  return (
    <Styled.Content>
      <Text text={'Preferências'} bold />
      <Styled.ContentWords>
        {displayList.map((item, index) => (
          <Styled.Button
            key={index}
            onClick={() => handleClick(item.nome)}
            isActive={isActive[item.nome]}
          >
            {item.nome}
          </Styled.Button>
        ))}
        {list.length > 8 && (
          <Styled.ButtonIsShowMore onClick={handleIsShowMore}>
            {isShowMore ? 'Mostrar menos' : 'Mostrar mais'}
          </Styled.ButtonIsShowMore>
        )}
      </Styled.ContentWords>
    </Styled.Content>
  );
}
