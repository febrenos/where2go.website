import React, { useState } from 'react';
import * as Styled from './style.jsx';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import { BackgroundCard, Gap } from '../../../style.jsx';
import { WordPreferences, Button, Input,BackButton, TitleCard } from '../../index.jsx';

export function SearchInput({ searchType, placeholder, activeFilter, onFilterClick }) {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const handleFilterClick = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  const handleBackButtonClick = () => {
    setIsOpenFilter(false);
  };

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
        <BackButton text={'Buscar'} onBackButtonClick={handleBackButtonClick} />
        <Input text={'Preço'}></Input>
        <Input text={'Região'}></Input>
        <Input text={'Data início'}></Input>
        <Input text={'Data fim'}></Input>
        <WordPreferences/>
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
