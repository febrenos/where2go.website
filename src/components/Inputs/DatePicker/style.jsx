import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const DatePickerContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--bg-secondary);
  border-radius: 32px;
  gap: 20px;
  padding: 30px;
  height:auto;
  max-width: 370px;
  @media(width < 768px){
    width: 100%;
    height:fit-content;
    max-width: none;
    padding: 20px 10px;
  }
`;

export const ContentTop = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap:17px;
  justify-content:center;
  width:100%;
  user-select: none;
`;

export const Flex = styled.div`
    display:flex;
    align-items:center;
`;

export const Select = styled.select`
  background-color: var(--bg-primary);
  color: var(--txt-primary); /* Corrigido o nome da variável */
  border-radius: 4px;
  padding: 10px;
  cursor:pointer;
  option {
    background-color: var(--bg-primary);
    padding: 20px;
    font-size:16px;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  cursor:pointer;
`;

export const GridDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr); /* 7 colunas */
  grid-template-rows: repeat(5, 1fr); /* 5 linhas */
  gap: 10px;
  justify-items: center;
  align-items: center;
  @media (max-width: 768px) {
    display: grid;
    text-align: center;
    gap: 2vw;
    padding: 3px;
    font-size: 13px;
  }
`;

export const ContentIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--txt-primary);
  font-size: 20px;
  padding: 10px;
  height: 30px;
  &:hover{
    color: var(--primary-color);
  }
`;

export const Circle = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  border-radius: 50%;
  width:30px;
  height:30px;

  color: ${(props) => {
    if (props.status === "agended") {
      return "var(--bg-primary)";
    } else if (props.status === "active") {
      return "var(--txt-solid)";
    } else if (props.status === "inactive") {
      return "var(--txt-secondary)";
    }else if (props.status === "today") {
      return "var(--primary-color)";
    } else if (props.status === "agendedToday") {
      return "var(--primary-color)";
    }
  }};

  background-color: ${(props) => {
    if (props.status === "agended") {
      return "var(--primary-color)";
    } else if (props.status === "active") {
      return "var(--bg-primary)";
    } else if (props.status === "inactive") {
      return "transparent";
    } else if (props.status === "today") {
      return "var(--bg-primary)";
    } else if (props.status === "agendedToday") {
      return "var(--secondary-color)";
    }

  }};

  border: 1px solid ${(props) => {
    if (props.status === "agended") {
      return "transparent";
    } else if (props.status === "active") {
      return "var(--bg-primary)";
    } else if (props.status === "inactive") {
      return "var(--txt-secondary)";
    } else if (props.status === "today") {
      return "var(--primary-color)";
    } else if (props.status === "agendedToday") {
      return "transparent";
    }
  }};
  @media(width < 768px){
    font-size:13px;
    width:25px;
    height:25px;
  }
`;

