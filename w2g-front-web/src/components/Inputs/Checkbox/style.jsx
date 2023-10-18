import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 16px;

  input[type='checkbox'] {
    display: none;
  }

  .checkbox {
    width: 17px;
    height: 17px;
    border: 2px solid var(--txt-primary);
    margin-right: 10px;
    box-sizing: content-box;
    transition: 0.3s;
    background-color: #fff;
  }

  input[type='checkbox']:checked + .checkbox {
    background-color: var(--primary-color);
    border: 2px solid var(--primary-color);
  }
`;
