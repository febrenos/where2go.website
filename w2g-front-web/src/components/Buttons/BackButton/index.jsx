// BackButton.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Title } from '../../../components/index';
import * as Styled from './style.jsx';

export function BackButton({ text, onBackButtonClick }) {
  return (
    <Styled.Content onClick={onBackButtonClick}>
      <FontAwesomeIcon icon={faChevronLeft}/>
      <Title text={text}></Title>
    </Styled.Content>
  );
}
