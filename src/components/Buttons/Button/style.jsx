import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const sizeMap = {
  sm: '100px',
  md: '150px',
  lg: '250px',
  auto: 'auto'
};

export const Content = styled.button`
  width: 100%;
  background-color: transparent;

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: 8px;
  font-weight: bold;
  color: #fff;
  border: 3px solid ${(props) => props.borderColor || 'var(--primary-color)'};
  background-color: ${(props) => (props.solid ? 'var(--primary-color)' : 'transparent')};
  padding: ${(props) => (props.solid ? '8px 12px' : '8px 12px')};
  font-size: ${(props) => (props.solid ? '16px' : '16px')};
  width: ${(props) => sizeMap[props.size] || '150px'};

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 769px) {
    max-width: 300px;
  }

  &:hover {
    transition: 0.3s;
    box-shadow: 0px 0px 3px 1px #636363;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  font-size: 16px;
  color: var(--txt-solid);
  animation: ${spinAnimation} 2s linear infinite; // Aplica a animação "spin" ao ícone
`;

export const ContentIcon = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;