import React, { useState } from 'react';
import * as Styled from './style.jsx';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import { BackgroundCard, Gap } from '../../../style.jsx';
import { WordPreferences, Button, Input, TitleCard, TextIcon, DatePicker, Checkbox } from '../../index.jsx';

const options = [
  { label: 'Eventos', value: 'event' },
  { label: 'Viagens', value: 'travel' },
  { label: 'Locais', value: 'place' },
];

const visibility = [
  { label: 'Privado', value: 'private' },
  { label: 'Amigos', value: 'friends' },
  { label: 'Convidados', value: 'guests' },
  { label: 'Todos', value: 'all' },
];

export function SearchInput({ searchType, placeholder='Buscar', onFilterClick, agended, startFilter, disableFilter }) {
  const [isOpenFilter, setIsOpenFilter] = useState(startFilter);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);

  const handleSearchIconClick = (isOpen) => {
    setIsDatePickerOpen(false);
  };

  const handleFilterClick = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  const handleBackButtonClick = () => {
    setIsOpenFilter(false);
  };

  const handleValueChange = (value) => {
    // Toggle the selected values based on the clicked checkbox
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter((val) => val !== value));
    } else {
      setSelectedValues([...selectedValues, value]);
    }
  };

  const filter = {
  price:'',
  place:'',
  dtStart:'',
  dtEnd:'',
  wordPreferences:[
    'viagem',
    'ponto turistico',
    'praia',
    'cidade',
    'frio',
    'classico',
  ]
};

  return (
    <>
    {!isOpenFilter &&
    <div>
    <Styled.All>
      <Styled.Content>
        <Styled.Input placeholder={placeholder} />
        <Styled.BgIcon>
          <Styled.StyledIcon icon={faSearch} />
          {!disableFilter &&
            <Styled.StyledIcon icon={faFilter} onClick={handleFilterClick} />
          }
        </Styled.BgIcon>
      </Styled.Content>
    </Styled.All>
    </div>
    }
    {(searchType === 'travel' && isOpenFilter) &&
    <div>
        <TitleCard text={'Filtrar'}/>
        <BackgroundCard>
          <TextIcon text={'Buscar'} action={handleBackButtonClick} type="back"/>
          <Input text={'Preço'}></Input>
          <Input text={'Local/cep'}></Input>
          <Input text={'Data início'}></Input>
          <Input text={'Data fim'}></Input>
          <Checkbox
            title="Destino"
            options={options}
            selectedValues={selectedValues}
            onValueChange={handleValueChange}
            groupName="exampleCheckboxGroup"
          />
          <Checkbox
            title="Visibilidade"
            options={visibility}
            selectedValues={selectedValues}
            onValueChange={handleValueChange}
            groupName="exampleCheckboxGroup"
          />
          <WordPreferences list={filter.wordPreferences}/>
          <Gap>
            <Button text={'Cancelar'} />
            <Button text={'Salvar'} solid/>
          </Gap>
        </BackgroundCard>
      </div>
    }
    {/* {(searchType === 'user' && isOpenFilter) && } */}
    {(searchType === 'calendar' && isOpenFilter) && 
      <div>
        <TextIcon text={'Buscar'} action={handleBackButtonClick} type="back"/>
        <DatePicker isOpenFilter={isDatePickerOpen} onSearchClick={handleSearchIconClick} list={agended}/>
      </div>
    }
    </>
  );
}
