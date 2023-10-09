import React, { useState } from 'react';
import * as Global from '../style';
import * as Styled from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faBookmark as solidBookmark, faChevronDown, faCopy, faLink, faCalendarDays, faFlag } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart, faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons';
import DefaultImg from '../../../img/w2g2.png';

export function TravelCard({ list }) {
  const [isLike, setIsLike] = useState(list.isLike);
  const [isSave, setIsSave] = useState(list.isSave);
  const [isShowMore, setIsShowMore] = useState(false);
  const [isCopy, setIsCopy] = useState(false);
  const [isLink, setIsLink] = useState(false);

  const [isAgended, setIsAgended] = useState(list.isAgended);
  const [isAgendedOpen, setIsAgendedOpen] = useState(false);

  const [isVisited, setIsVisited] = useState(list.isVisited);
  const [isVisitedOpen, setIsVisitedOpen] = useState(false);

  function HandleClickSave() {
    setIsSave(!isSave);
  }

  function HandleClickLike() {
    setIsLike(!isLike);
  }

  function HandleClickShowMore() {
    setIsShowMore(!isShowMore);
  }


  function handleClickInformation() {
    const informationToCopy = `
      *${list.title}*\n
      *Data:* ${list.date}
      *Local:* ${list.place}
      *Preço:* ${list.price}
      *Tipo:* ${list.type}
      *Transporte:* ${list.transport}
      *Deslocamento:* ${list.displacementTime}
      *Documentos:* ${list.documents}
      *Duração:* ${list.duration}
      *Links:* ${list.links}
      *Where2Go:* https://localhost:3000/${list.id}
      *Descrição:* ${list.description}
    `;

    navigator.clipboard.writeText(informationToCopy)
    .then(() => {
      console.log('Informações copiadas.');
      setIsCopy(true);
      setTimeout(() => {
        setIsCopy(false);
      }, 2000);
    })
    .catch(error => {
      console.error('Erro ao copiar.', error);
    });
  }

  function handleClickLink() {
    const informationToCopy = `*Where2Go:* https://localhost:3000/${list.id}`;

    navigator.clipboard.writeText(informationToCopy)
    .then(() => {
      console.log('link copiado.');
      setIsLink(true);
      setTimeout(() => {
        setIsLink(false);
      }, 2000);
    })
    .catch(error => {
      console.error('Erro ao copiar.', error);
    });
  }

  function HandleClickAgended() {
    setIsAgended(!isAgended);
    setIsAgendedOpen(true);
    setTimeout(() => {
      setIsAgendedOpen(false);
    }, 2000);
  }

  function HandleClickVisited() {
    setIsVisited(!isVisited);
    setIsVisitedOpen(true);
    setTimeout(() => {
      setIsVisitedOpen(false);
    }, 2000);
  }


  return (
    <>
      <Global.Card isShowMore={isShowMore}>
        <Global.Content>
          <Styled.FlexTop>
            <Global.Img src={DefaultImg} />
            <Styled.GridTop>
              <div>
                <Styled.Bold>{list.title}</Styled.Bold>
                <Global.Date>{list.date}</Global.Date>
              </div>
              <Styled.Flex>
                <Styled.Bold>Local:</Styled.Bold>
                <Global.Text>{list.place}</Global.Text>
              </Styled.Flex>
            </Styled.GridTop>
          </Styled.FlexTop>
          <Global.Icons>
            <Global.ContentIcon isCheck={isLike} onClick={HandleClickLike}>
             <FontAwesomeIcon icon={isLike ? solidHeart : regularHeart} />
            </Global.ContentIcon>
            <Global.ContentIcon isCheck={isSave} onClick={HandleClickSave}>
              <FontAwesomeIcon icon={isSave ? solidBookmark : regularBookmark} />
            </Global.ContentIcon>
          </Global.Icons>
        </Global.Content>
        <Styled.TextContent isShowMore={isShowMore}>
              <Styled.Flex>
                <Styled.Bold>Preço:</Styled.Bold>
                <Global.Text>{list.price}</Global.Text>
              </Styled.Flex>
              <Styled.Flex>
                <Styled.Bold>Tipo:</Styled.Bold>
                <Global.Text>{list.type}</Global.Text>
              </Styled.Flex>
              <Styled.Flex>
                <Styled.Bold>Transporte:</Styled.Bold>
                <Global.Text>{list.transport}</Global.Text>
              </Styled.Flex>
              <Styled.Flex>
                <Styled.Bold>Deslocamento:</Styled.Bold>
                <Global.Text>{list.displacementTime}</Global.Text>
              </Styled.Flex>
              <Styled.Flex>
                <Styled.Bold>Documentos:</Styled.Bold>
                <Global.Text>{list.documents}</Global.Text>
              </Styled.Flex>
              <Styled.Flex>
                <Styled.Bold>Duração:</Styled.Bold>
                <Global.Text>{list.duration}</Global.Text>
              </Styled.Flex>
              <Styled.Flex>
                <Styled.Bold>Links:</Styled.Bold>
                <Global.Text>{list.links}</Global.Text>
              </Styled.Flex>
              <Global.Text>{list.description}</Global.Text>
              <Styled.IconsInline>
                <Styled.CopyContent isClick={isLink} onClick={handleClickLink}>
                  {isLink && <Styled.CopyText isClick={isLink}>Copiado!</Styled.CopyText>}
                  <Styled.CopyIcon icon={faLink} isClick={isLink} />
                </Styled.CopyContent>
                <Styled.CopyContent isClick={isCopy} onClick={handleClickInformation}>
                  {isCopy && <Styled.CopyText isClick={isCopy}>Copiado!</Styled.CopyText>}
                  <Styled.CopyIcon icon={faCopy} isClick={isCopy} />
                </Styled.CopyContent>
                <Styled.SwitchContent isClick={isAgendedOpen} isActive={isAgended} onClick={HandleClickAgended}>
                  {isAgended && <Styled.CopyText isClick={isAgendedOpen} isActive={isAgended} >Agendado!</Styled.CopyText>}
                  {!isAgended && <Styled.CopyText isClick={isAgendedOpen} isActive={isAgended}>Cancelado!</Styled.CopyText>}
                  <Styled.SwitchIcon icon={faCalendarDays} isClick={isAgendedOpen} />
                </Styled.SwitchContent>
                <Styled.SwitchContent isClick={isVisitedOpen} isActive={isVisited} onClick={HandleClickVisited}>
                  {isVisited && <Styled.CopyText isClick={isVisitedOpen} isActive={isVisited} >Visitado!</Styled.CopyText>}
                  {!isVisited && <Styled.CopyText isClick={isVisitedOpen} isActive={isVisited}>Cancelado!</Styled.CopyText>}
                  <Styled.SwitchIcon icon={faFlag} isClick={isVisitedOpen} />
                </Styled.SwitchContent>
              </Styled.IconsInline>
              </Styled.TextContent>
        <Global.ContentChevronDown onClick={HandleClickShowMore}>
          <Global.Icon icon={faChevronDown} isShowMore={isShowMore} />
        </Global.ContentChevronDown>
      </Global.Card>
      
    </>
  );
}
