import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Card = styled.div`
  display: flex;
  width: 100%;
  transition:.5s;
  flex-direction: column;
  padding: ${props => (props.isShowMore ? '12px 20px 40px 20px' : '12px 20px')};
  background-color: var(--bg-secondary);
  border-radius: 32px;
  height: ${props => (props.isShowMore ? 'auto' : '120px')};
  cursor: pointer;
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
`;

export const Date = styled.p`
  font-size: 14px;
`;

export const Text = styled.p`
  font-size: 14px;
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
  color: var(--txt-primary);
  font-size: 20px;
  width:50px;
  height:30px;
  transition:1s;
  &:hover {
    transform: rotate(380deg);
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  cursor: pointer;
  transition: 1s;
  color: var(--txt-primary);
  font-size: 20px;
  position: absolute;
  top: 5px;
  left: 50%;
  z-index: 2;
  transform: rotate(${props => (props.isShowMore ? '180deg' : '0deg')});
`;

export const ContentChevronDown = styled.div`
  background-color: var(--bg-secondary);
  width: 100%;
  height: 35px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

