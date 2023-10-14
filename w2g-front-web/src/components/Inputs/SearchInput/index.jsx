import React, { useState } from 'react';
import * as Styled from './style.jsx';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import { BackgroundCard, Gap } from '../../../style.jsx';
import { WordPreferences, Button, Input, TitleCard, TextIcon } from '../../index.jsx';

export function SearchInput({ searchType, placeholder, activeFilter, onFilterClick }) {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const handleFilterClick = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  const handleBackButtonClick = () => {
    setIsOpenFilter(false);
  };

  const wordPreferences = [
    {
      name: 'Sol',
      isActive: true,
    },
    {
      name: 'Clássico',
      isActive: true,
    },
    {
      name: 'Música',
      isActive: true,
    },
    {
      name: 'Histórico',
      isActive: false,
    },
    {
      name: 'Comida',
      isActive: true,
    },
    {
      name: 'Ar livre',
      isActive: false,
    },
    {
      name: 'Água',
      isActive: false,
    },
    {
      name: 'Natureza',
      isActive: false,
    },
    {
      name: 'Esporte',
      isActive: true,
    },
    {
      name: 'Aventura',
      isActive: false,
    },
    {
      name: 'Relaxamento',
      isActive: false,
    },
    {
      name: 'Cultura',
      isActive: false,
    },
    {
      name: 'Praia',
      isActive: true,
    },
    {
      name: 'Montanha',
      isActive: false,
    },
    {
      name: 'Cidade',
      isActive: false,
    },
    {
      name: 'Inverno',
      isActive: false,
    },
    {
      name: 'Verão',
      isActive: true,
    },
    {
      name: 'Outono',
      isActive: false,
    },
    {
      name: 'Primavera',
      isActive: false,
    },
    {
      name: 'Escalada',
      isActive: true,
    },
  ]

  return (
    <>
    {!isOpenFilter &&
    <Styled.All>
      <Styled.Content>
        <Styled.Input placeholder={placeholder} />
        <Styled.BgIcon>
          <Styled.StyledIcon icon={faSearch} />
          <Styled.StyledIcon icon={faFilter} onClick={handleFilterClick} isActive={isOpenFilter}/>
        </Styled.BgIcon>
      </Styled.Content>
    </Styled.All>
    }
    {(searchType === 'travel' && isOpenFilter) &&
    <>
      <TitleCard text={'Filtrar'}/>
      <BackgroundCard>
        <TextIcon text={'Buscar'} action={handleBackButtonClick} type="back"/>
        <Input text={'Preço'}></Input>
        <Input text={'Região'}></Input>
        <Input text={'Data início'}></Input>
        <Input text={'Data fim'}></Input>
        <WordPreferences list={wordPreferences}/>
        <Gap>
          <Button text={'Cancelar'} />
          <Button text={'Salvar'} solid/>
        </Gap>
      </BackgroundCard>
    </>
    }
    {(searchType === 'user' && isOpenFilter) && 'user'}
    </>
  );
}
