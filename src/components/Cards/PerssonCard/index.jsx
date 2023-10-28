import React, { useState } from 'react';
import * as Global from '../style';
import * as Styled from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus as userPlus, faUserClock as userClock, faUserGroup as users, faChevronDown, faLink } from '@fortawesome/free-solid-svg-icons';
// import { faChevronDown } from '@fortawesome/free-regular-svg-icons';
import DefaultImg from '../../../img/w2g2.png';

export function PerssonCard({ list, type}) {
  const [isLink, setIsLink] = useState(false);

  const [requestStatus, setRequestStatus] = useState(list.requestStatus);
  const [isShowMore, setIsShowMore] = useState(false);

  function HandleClickShowMore() {
    setIsShowMore(!isShowMore);
  }

  function handleClickLink() {
    const informationToCopy = `*Where2Go:* https://localhost:3000/${list.id}`;

    navigator.clipboard.writeText(informationToCopy)
    .then(() => {
      setIsLink(true);
      setTimeout(() => {
        setIsLink(false);
      }, 2000);
    })
    .catch(error => {
      console.error('Erro ao copiar.', error);
    });
  }
  
  function HandleClickRequestStatus() {
    setRequestStatus(requestStatus === 'request' ? 'requested' : 'request');
  }
  
  return (
    <>
      <Global.Card isShowMore={isShowMore}>
        <Global.Content>
          <Styled.FlexTop>
            <Global.Img src={DefaultImg} />
            <Styled.GridTop>
              <div>
                <Styled.Bold>{list.nickname}</Styled.Bold>
                <Global.Date>{list.name}</Global.Date>
                <Global.Date>{list.email}</Global.Date>
              </div>
            </Styled.GridTop>
          </Styled.FlexTop>
          <Global.Icons>
          <Styled.ContentIcon requestStatus={requestStatus} onClick={HandleClickRequestStatus}>
            {requestStatus === 'request' && <FontAwesomeIcon icon={userPlus} />}
            {requestStatus === 'requested' && <FontAwesomeIcon icon={userClock} />}
            {requestStatus === 'friends' && <FontAwesomeIcon icon={users} />}
          </Styled.ContentIcon>
        </Global.Icons>
        </Global.Content>
        <Styled.TextContent isShowMore={isShowMore}>
              {/* <Styled.Flex>
                <Styled.Bold>Entrou em:</Styled.Bold>
                <Global.Text>{list.joinedOn}</Global.Text>
              </Styled.Flex>

              <Styled.VisitedByMe>
                <Styled.Bold>Visitado:</Styled.Bold>
                <Global.Text>{`${list.visited}`}</Global.Text>
              </Styled.VisitedByMe>

              <Styled.VisitedByMe>
                <Styled.Bold>Locais visitados:</Styled.Bold>
                <Global.Text>{`${list.visitedPlaces}`}</Global.Text>
              </Styled.VisitedByMe>

              <Styled.VisitedByMe>
                <Styled.Bold>Viagens curtidas:</Styled.Bold>
                <Global.Text>{`${list.likedTrips}`}</Global.Text>
              </Styled.VisitedByMe>

              <Styled.VisitedByMe>
                <Styled.Bold>Viagens salvas:</Styled.Bold>
                <Global.Text>{`${list.savedTrips}`}</Global.Text>
              </Styled.VisitedByMe> */}
              <Styled.VisitedByMe>
                <Global.Text>{list.cellphone}</Global.Text>
              </Styled.VisitedByMe>
              
              <Styled.VisitedByMe>
                <Global.Text>{list.description}</Global.Text>
              </Styled.VisitedByMe>

              <Styled.IconsInline>
                <Styled.CopyContent isClick={isLink} onClick={handleClickLink}>
                  {isLink && <Styled.CopyText isClick={isLink}>Copiado!</Styled.CopyText>}
                  <Styled.CopyIcon icon={faLink} isClick={isLink} />
                </Styled.CopyContent>
              </Styled.IconsInline>

              </Styled.TextContent>
        <Global.ContentChevronDown onClick={HandleClickShowMore}>
          <Global.Icon icon={faChevronDown} isShowMore={isShowMore} />
        </Global.ContentChevronDown>
      </Global.Card>
  </>
  );
}
