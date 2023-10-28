import React from 'react';
import * as Styled from '../NotificationCardList/style';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { TravelCardAi } from '../../index';
import * as Style from './style' 

export function TravelCardAiList({ list, type }) {
  if (list.length === 0) {
    console.log(list);
    return <>
      <Style.ContentIcon>
        <Style.LoadingIcon icon={faSpinner} />
      </Style.ContentIcon>
    </>
  }

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

