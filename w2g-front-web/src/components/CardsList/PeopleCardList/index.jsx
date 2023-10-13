import React from 'react';
import * as Styled from '../NotificationCardList/style';
import { PerssonCard } from '../../index';

export function PeopleCardList({ list, type }) {

  return (
    <Styled.Cards>
      {list.map((item, index) => (
        <PerssonCard
            key={index}
            list={item}
            type={type}
        />
      ))}
    </Styled.Cards>
  );
}
