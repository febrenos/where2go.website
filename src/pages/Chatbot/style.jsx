import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CardChat = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  gap: 15px;
  height: 500px;
  transition:1s;
`;

export const CardMessages = styled.div`
  background-color: var(--bg-secondary);
  border-radius: 32px 32px 10px 10px;
  height: 100%;
`;

export const UserBot = styled.div`
  display: flex;
  padding: 5px;
  align-items:center;
  background-color: var(--secondary-color);
  border-radius: 32px 32px 0 0;
  margin-bottom: 10px;
`;

export const UserBotImg = styled.img`
  width: 30px;
  border-radius: 100%;
  margin-left: 5%;
  filter: grayscale(100%) saturate(100%) contrast(0%) brightness(100%);
  width:40px;
  height:40px;
`;

export const Desc = styled.div`
  flex-direction: column;
  margin-left: 15px;
`;

export const MessageInLine = styled.div`
  display:flex;
  gap:10px;
`

export const DescH3 = styled.h3`
  font-size: 20px;
  color: var(--primary-color);
`;

export const DescP = styled.p`
  color: var(--txt-solid);
  font-size: 15px;
`;


export const ContentMessages = styled.div`
  padding: 10px 20px;
  height: 320px;
  overflow-y: auto;
`;

export const ContentMessage = styled.div`
display:flex;
justify-content: ${(props) => (props.typeMessage === 'send'? 'flex-end' : 'flex-start')};
`

export const Message = styled.div`
  max-width:500px;
  width:fit-content;
  padding: 10px;
  border-radius: ${(props) => (props.typeMessage === 'send'? '20px 20px 0 20px' : '20px 20px 20px 0')};
  background-color: ${(props) => (props.typeMessage === 'send'? 'var(--msg-send)' : 'var(--secondary-color)')};
  margin: ${(props) => (props.typeMessage === 'send'? '0 0 10px 20%' : '0 20% 10px 0')};
  overflow:hidden;
`;

export const MessageP = styled.p`
  font-size: 15px;
  color: var(--txt-solid);
  word-break: break-all;
  white-space: pre-line;
`;

export const MessageKey = styled(MessageP)`
  white-space: nowrap;
  font-weight:bold;
`;

export const MessageTitle = styled(MessageP)`
  font-weight:bold;
`;

export const MessageLink = styled.a`
font-size: 15px;
color: var(--link);
word-break: break-all;
white-space: pre-line;
`;

export const SendMessage = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  background: var(--bg-secondary);
  padding: 10px;
  border-radius: 5px;
  gap: 20px;
  width: 100%;
  height: 60px;
  align-items: center;
`;
export const SendIcon = styled(FontAwesomeIcon)`
  display: table-cell;
  vertical-align: middle;
  font-size: 19px;

`;

export const BgIcon = styled.div`
  display: table-cell;
  vertical-align: middle;
  font-size: 17px;
  transition:.2s;
  cursor: pointer;
  padding:10px;
  height:100%;
  border-radius:5px;
  color: var(--txt-solid);
  &:hover{
    background-color: var(--secondary-color);
    color: var(--primary-color);
  }
`;