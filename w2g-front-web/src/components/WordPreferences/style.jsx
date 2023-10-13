import styled from 'styled-components';

export const Content = styled.h2`
  display: flex;
  flex-direction:column;
  gap:20px;
`;

export const ContentWords = styled.h2`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap:10px;
`;

export const Button = styled.button`
  display: flex;
  flex-wrap: wrap;
  font-size:17px;
  cursor:pointer;
  padding:5px 13px;
  font-weight:700;
  border-radius:25px;
  justify-content: center;
  border: 2px solid ${(props) => (props.isActive ? 'transparent' : 'var(--txt-secondary)')};
  background-color: ${(props) => (props.isActive ? 'var(--primary-color)' : 'var(--bg-secondary)')};
  color: ${(props) => (props.isActive ? 'var(--bg-secondary)' : 'var(--txt-secondary)')};
`;

export const ButtonIsShowMore = styled(Button)`
border: 2px solid var(--primary-color);
color: var(--primary-color);
`;
