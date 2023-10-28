import React from 'react';
import * as Styled from '../NotificationCardList/style';
import { TravelCardAi } from '../../index';

export function TravelCardAiList({ list, type }) {
  // if (list.length === 0) {
  //   console.log(list);
  //   return <div style={{ textAlign: 'center' }}>Nenhuma Viagem cadastrada</div>;
  // }

  return (
    <Styled.Cards>
      {list.map((item, index) => (
        <TravelCardAi
          key={index}
          list={item}
          type={type}
        />
      ))}
    </Styled.Cards>
  );
}

