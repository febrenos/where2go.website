import styled, {keyframes} from "styled-components"

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const float = keyframes`
  50% {
    margin-top:-40px;
  }
`;

export const Planet = styled.img`
  width: ${({width}) => width || '450px'};
  animation: ${float} 5s cubic-bezier(0.11,-0.23, 1, 1.18) infinite, ${spin} 50s cubic-bezier(0, 0, 1, 1.0) infinite;
  overflow: hidden;
  transform: rotate(-40deg);
`

export const Content = styled.div`
  width: ${({width}) => `calc(${width}px + ${width * 0.1}px)` || '450px'};
  height: ${({width}) => `${width * 1.4}px` || '490px'};
  padding: 60px 0 90px 20px;
  align-items: center;
  overflow: hidden;
`