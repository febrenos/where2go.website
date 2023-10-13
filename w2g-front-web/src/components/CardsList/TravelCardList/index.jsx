import React from 'react';
import * as Styled from '../NotificationCardList/style';
import { TravelCard } from '../../index';

export function TravelCardList({ list, type }) {

  return (
    <Styled.Cards>
      {list.map((item, index) => (
        <TravelCard
            key={index}
            list={item}
            type={type}
        />
      ))}
    </Styled.Cards>
  );
}
