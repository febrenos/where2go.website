import React, { useState, useEffect } from 'react';
import * as Global from '../style';
import * as Styled from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart, faBookmark as solidBookmark, faChevronDown, faCopy, faLink, faCalendarDays, faFlag } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart, faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons';
import DefaultImg from '../../../img/w2g2.png';


export function TravelCardAi({ list, type}) {
  const [isOcult, setIsOcult] = useState(false);
  const [getIsLike,] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [likeCounter, setLikeCounter] = useState(false);
  const [isSave, setIsSave] = useState(false);
  const [isShowMore, setIsShowMore] = useState(false);
  const [isCopy, setIsCopy] = useState(false);
  const [isLink, setIsLink] = useState(false);

  const [isAgended, setIsAgended] = useState(false);
  const [isAgendedOpen, setIsAgendedOpen] = useState(false);

  const [isVisited, setIsVisited] = useState(false);
  const [isVisitedOpen, setIsVisitedOpen] = useState(false);
  const [visitedCounter, setVisitedCounter] = useState(false);

  const [isCreatedByMe,] = useState(list.isCreatedByMe);

  const HandleClickVisited =  () => {
    setIsVisited((prev) => !prev)
    setTimeout(() => {
      HandleClickShowMore();
    }, 2500);

    setTimeout(() => {
      setIsOcult(true);
    }, 4500);
  }

  useEffect(() => {
    isVisited && setIsAgended(false);
    isVisited ? setVisitedCounter(list.visitedByMe+1) : setVisitedCounter(list.visitedByMe);
    setIsVisitedOpen(true);
    setTimeout(() => {
      setIsVisitedOpen(false);
    }, 2000);
  },[isVisited, list])//toda vez que for alterado roda a funcao 

  // useEffect(() => {
  //   (!getIsLike && !isLike) && setLikeCounter(list.like);
  //   (!getIsLike && isLike) && setLikeCounter(list.like+1);

  //   (getIsLike && isLike) && setLikeCounter(list.like);
  //   (getIsLike && !isLike) && setLikeCounter(list.like-1);
  // },[isLike,getIsLike, list])

  function HandleClickSave() {
    setIsSave(!isSave);
  }

  function HandleClickLike() {
    setIsLike(!isLike);
  }

  function HandleClickShowMore() {
    setIsShowMore(!isShowMore);
  }

  function handleClickInformationChatGpt() {
    const activitiesInfo = list.atividadesPorDia.map((dia) => {
      const activities = dia.atividades.map((atividade) => {
        return `- ${atividade.nome} (${atividade.duracao})`;
      }).join('\n');
      return `${activities}`;
    }).join('\n');
  
    const informationToCopy = `
      *${list.destino}*\n
      *País:* ${list.pais}
      *Local:* ${list.destino}
      *Preço:* R$${list.custo}
      *Duração Viagem:* ${list.duracaoViagem}
      *Hospedagem:* ${list.hospedagem}
      *Duração:* ${list.duracaoViagem}\n
      *Atividades:*\n
      ${activitiesInfo}
    `;
    // *Data Inicio:* ${list.dataInicio}
    // *Data Fim:* ${list.dataFim}
  
    navigator.clipboard.writeText(informationToCopy)
      .then(() => {
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
    const informationToCopy = `
    *${list.destino}*\n
    *País:* ${list.pais}
    *Local:* ${list.destino}
    *Preço:* R$${list.custo}
    *Duração Viagem:* ${list.duracaoViagem}
    *Hospedagem:* ${list.hospedagem}
    *Duração:* ${list.duracaoViagem}\n`;

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

  function HandleClickAgended() {
    if (isAgended && type === 'agended') {
      setTimeout(() => {
        HandleClickShowMore();
      }, 2500);
  
      setTimeout(() => {
        setIsOcult(true);
      }, 4500);
    }
    setIsAgended(!isAgended);
    setIsAgendedOpen(true);
    setTimeout(() => {
      setIsAgendedOpen(false);
    }, 2000);
  }
  
  console.log(list)
  return (
    <>
    {(!isOcult && list.lenght !== 0)&& (
      <Styled.Card isShowMore={isShowMore} isCreatedByMe={isCreatedByMe}>
        <Global.Content>
          <Styled.FlexTop>
            <Global.Img src={DefaultImg} />
            <Styled.GridTop>
              <div>
                <Styled.Bold>{list.destino}</Styled.Bold>
                <Global.Text>{list.pais}</Global.Text>
                <Global.Text>R$ {list.custo}</Global.Text>
                <Global.Text>Duraçao: {list.duracaoViagem}</Global.Text>
              </div>
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
            <Styled.Bold>Data inicio:</Styled.Bold>
            <Global.Text>{list.dataInicio}</Global.Text>
          </Styled.Flex>

          <Styled.Flex>
            <Styled.Bold>Data fim:</Styled.Bold>
            <Global.Text>{list.dataFim}</Global.Text>
          </Styled.Flex>

          <Styled.Bold>Atividades</Styled.Bold>
          <Styled.Flex>
            <div>
              {list.atividadesPorDia.map((dia, diaIndex) => (
                <div key={diaIndex}>
                  <Styled.Bold>{`Dia ${dia.dia}:`}</Styled.Bold>
                  {dia.atividades.map((atividade, atividadeIndex) => (
                    <Global.Text key={atividadeIndex}>{`- ${atividade.nome} (${atividade.duracao})`}</Global.Text>
                  ))}
                </div>
              ))}
            </div>
          </Styled.Flex>

          <Styled.IconsInline>
            <Styled.CopyContent isClick={isLink} onClick={handleClickLink}>
              {isLink && <Styled.CopyText isClick={isLink}>Copiado!</Styled.CopyText>}
              <Styled.CopyIcon icon={faLink} isClick={isLink} />
            </Styled.CopyContent>
            <Styled.CopyContent isClick={isCopy} onClick={handleClickInformationChatGpt}>
              {isCopy && <Styled.CopyText isClick={isCopy}>Copiado!</Styled.CopyText>}
              <Styled.CopyIcon icon={faCopy} isClick={isCopy} />
            </Styled.CopyContent>
            <Styled.SwitchContent isClick={isAgendedOpen} isActive={isAgended} onClick={HandleClickAgended}>
              {isAgended && <Styled.CopyText isClick={isAgendedOpen} isActive={isAgended} >Agendado</Styled.CopyText>}
              {!isAgended && <Styled.CopyText isClick={isAgendedOpen} isActive={isAgended}>Cancelado</Styled.CopyText>}
              <Styled.SwitchIcon icon={faCalendarDays} isClick={isAgendedOpen} />
            </Styled.SwitchContent>
            {type === 'agended'  &&
              <Styled.SwitchContent isClick={isVisitedOpen} isActive={isVisited} onClick={HandleClickVisited}>
                {isVisited && <Styled.CopyText isClick={isVisitedOpen} isActive={isVisited} >Visitado</Styled.CopyText>}
                {!isVisited && <Styled.CopyText isClick={isVisitedOpen} isActive={isVisited}>Cancelado</Styled.CopyText>}
                <Styled.SwitchIcon icon={faFlag} isClick={isVisitedOpen} />
              </Styled.SwitchContent>
            }
          </Styled.IconsInline>
              </Styled.TextContent>
        <Global.ContentChevronDown onClick={HandleClickShowMore} isCreatedByMe={isCreatedByMe}>
          <Global.Icon icon={faChevronDown} isShowMore={isShowMore} />
        </Global.ContentChevronDown>
      </Styled.Card>
    )}
  </>
  );
}
