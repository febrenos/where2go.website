import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Text } from '../../index';
import * as Styled from './style';

export function TextIcon({ text, action, align, type}) {

  const [isConfirm, setIsConfirm] = useState(false);

  let icon;
  const toValue = type === 'delete' ? '/sign-in' : '';

  function handleClickIsConfirm(){
    setIsConfirm(!isConfirm);
  }

  if (type === 'back') {
    icon = <FontAwesomeIcon icon={faChevronLeft} type={type}/>;
  } else if (type === 'delete') {
    icon = <FontAwesomeIcon icon={faPowerOff} type={type}/>;
  }

  return (
    <Styled.Flex>
      <Styled.Content align={align} onClick={type === 'delete'? handleClickIsConfirm : action} type={type}>
        {icon}
        <Text text={text} size={'lg'} type={type}/>
      </Styled.Content>
      <Styled.Flex type={type}>
        {isConfirm && <Link to={toValue} >Confirmar</Link>}
      </Styled.Flex>
    </Styled.Flex>
  );
}