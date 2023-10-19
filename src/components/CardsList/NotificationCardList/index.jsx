import React from 'react';
import * as Styled from './style';
import { NotificationCard } from '../../index';

export function NotificationCardList({ list }) {

  return (
    <Styled.Cards>
      {list.map((item, index) => (
        <NotificationCard key={index} list={item} />
      ))}
    </Styled.Cards>
  );
}
