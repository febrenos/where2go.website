import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  font-size: 30px;
  padding: 10px;
  color: var(--primary-color);
  animation: ${spinAnimation} 2s linear infinite; // Aplica a animação "spin" ao ícone
`;

export const ContentIcon = styled.div`
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
  display: flex;
`;
