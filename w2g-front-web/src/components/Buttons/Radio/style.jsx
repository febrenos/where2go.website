import styled from "styled-components";

export const Content = styled.div`
    display:flex;
    flex-direction:column;
    gap:15px;
`;

export const RadioButtonWrapper = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 16px;

  input[type='radio'] {
    display: none;
  }

  .radio {
    width: 17px;
    height: 17px;
    border-radius: 50%;
    border: 2px solid var(--txt-primary);
    margin-right: 10px;
    box-sizing: content-box;
    transition:.3s;
  }

  input[type='radio']:checked + .radio {
    background-color: var(--primary-color);
    border: 2px solid var(--primary-color);
    box-shadow: inset 0 0 0 4px var(--bg-secondary);
  }
`;