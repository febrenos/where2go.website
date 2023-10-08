import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px;
  background-color: var(--bg-secondary);
  border-radius: 32px;
  cursor: pointer;
  @media(width > 768px){
    max-width: 400px;
  }
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

export const CloseIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: var(--txt-primary);
  font-size: 17px;
`;
