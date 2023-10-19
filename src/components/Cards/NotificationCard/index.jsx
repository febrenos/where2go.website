import React, { useState } from 'react';
import * as Styled from '../style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import DefaultImg from '../../../img/w2g2.png';


export function NotificationCard({ list }) {
  const [isOcult, setIsisOcult] = useState(false);
  const [isShowMore, setIsShowMore] = useState(false);

  function HandleClickShowMore() {
    setIsShowMore(!isShowMore);
  }

  return (
    <>
      {!isOcult && (
        <Styled.Card isShowMore={isShowMore}>
          <Styled.Content>
            <Styled.Flex>
              <Styled.Img src={DefaultImg} />
              <Styled.TextContent>
                <div>
                  <Styled.Title>{list.title}</Styled.Title>
                  <Styled.Date>{list.date}</Styled.Date>
                </div>
                <Styled.Text>{list.description}</Styled.Text>
              </Styled.TextContent>
            </Styled.Flex>
            <Styled.ContentIconClose onClick={() => setIsisOcult(true)}>
              <FontAwesomeIcon icon={faClose} />
            </Styled.ContentIconClose>
          </Styled.Content>
          <Styled.ContentChevronDown onClick={HandleClickShowMore}>
            <Styled.Icon icon={faChevronDown} isShowMore={isShowMore} />
          </Styled.ContentChevronDown>
        </Styled.Card>
      )}
    </>
  );
}
