import React from 'react';
import * as Styled from '../NotificationCardList/style';
import { TravelCard } from '../../index';

export function TravelCardList({ list }) {

  return (
    <Styled.Cards>
      {list.map((item, index) => (
        <TravelCard
            key={index}
            list={item}
        />
      ))}
    </Styled.Cards>
  );
}
