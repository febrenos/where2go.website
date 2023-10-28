import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Input = styled.input`
  width: 100%;
  margin: 0 auto; /* Center the input */
  background-color: var(--bg-secondary);
  padding: 15px 95px 15px 20px; /* Adjust padding as needed */
  color: var(--txt-primary);
  border-radius: 32px;
  font-size: 16px;
  position: relative;

  &::placeholder {
    color: var(--txt-primary);
  }

  &:focus {
    border: 2px solid var(--text-secondary);
  }

  &:focus,
  &:valid {
    outline: none;
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--txt-primary);
  font-size: 25px;
`;

export const All = styled.div`
  width: 100%;
  display: flex;
  margin-bottom:100px;
  justify-content: center;
  // @media(width < 768px){
    
  // }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
`;

export const BgIcon = styled.div`
  display: flex;
  right: 0;
  align-items: center;
  background-color: var(--bg-secondary);
  padding: 9px 15px 9px 10px;
  position: absolute;
  gap: 20px;
  border-radius: 0 32px 32px 0;

  svg {
    cursor: pointer;
  }
`;
