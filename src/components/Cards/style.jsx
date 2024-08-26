import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Card = styled.div`
  display: flex;
  width: 100%;
  transition:.5s;
  flex-direction: column;
  padding: ${props => (props.isShowMore ? '12px 20px 40px 20px' : '12px 20px')};
  background-color: ${props => (props.isCreatedByMe ? 'var(--secondary-color)' : 'var(--bg-secondary)')};
  border-radius: 32px;
  height: ${props => (props.isShowMore ? '100%' : '143px')};
  overflow: hidden;
  position: relative;
  @media(min-width: 768px){
    max-width: 400px;
    min-width: 300px;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Img = styled.img`
  max-width: 70px;
  max-height: 70px;
  width: 100%;
  height: auto;
  border-radius: 50%;
`;


export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3px;
  gap: 5px;
`;

export const Title = styled.h4`
  font-weight: 600;
  font-size: 20px;
  color: var(--txt-title);
`;

export const Date = styled.p`
  font-size: 16px;
`;

export const Text = styled.p`
  font-size: 16px;
`;

export const Flex = styled.div`
  display: flex;
  gap: 10px;
`;

export const ContentIcon = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  cursor: pointer;
  color: ${props => (props.isCheck ? 'var(--primary-color)' : 'var(--txt-primary)')};
  font-size: 20px;
  padding:10px 10px 10px 10px;
  height:30px;
`;

export const ContentIconClose = styled(ContentIcon)`
&:hover svg{
  color: var(--danger-color);
  transition:.7s;
  transform:rotate(180deg);
}
`;

export const Icons = styled.div`
  display: flex;
  flex-direction:column;
  gap: 5px;
`;

export const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  transition: transform .8s ease ${props => (props.isShowMore ? '.5s' : '.8s')};
  color: var(--txt-primary);
  font-size: 20px;
  position: absolute;
  top: 5px;
  left: 50%;
  margin-left:-8px;
  z-index: 2;
  transform: rotate(${props => (props.isShowMore ? '180deg' : '0deg')});
`;



export const ContentChevronDown = styled.div`
background-color: ${props => (props.isCreatedByMe ? 'var(--secondary-color)' : 'var(--bg-secondary)')};
  width: 100%;
  cursor:pointer;
  height: 35px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

