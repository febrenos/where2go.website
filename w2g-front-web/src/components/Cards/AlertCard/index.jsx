import React, { useState } from 'react';
import * as Styled from './style';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import DefaultImg from '../../../img/defaultImg.png';


export function AlertCard({ title, date, description }) {
  const [, setIsClose] = useState(false);

  return (
    <Styled.Content>
      <Styled.Flex>
        <Styled.Img src={DefaultImg} />
        <Styled.TextContent>
          <div>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Date>{date}</Styled.Date>
          </div>
          <Styled.Text>{description}</Styled.Text>
        </Styled.TextContent>
      </Styled.Flex>
      <Styled.CloseIcon icon={faClose} onClick={() => setIsClose(false)} />
    </Styled.Content>
  );
}
