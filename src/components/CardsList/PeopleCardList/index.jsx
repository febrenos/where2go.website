import React from 'react';
import * as Styled from '../NotificationCardList/style';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { PerssonCard } from '../../index';
import * as Style from '../TraelCardAiList/style'

export function PeopleCardList({ list, type }) {
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
        <PerssonCard
            key={index}
            list={item}
            type={type}
        />
      ))}
    </Styled.Cards>
  );
}
