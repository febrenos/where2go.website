import styled from "styled-components";

export const All = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  // @media (max-width: 768px) {
  //   justify-content: center;
  // }
`;

export const NavTab = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--bg-secondary);
  padding: 6px;
  border-radius: 10px;
  user-select: none;
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const Tab = styled.a`
  text-decoration-thickness: 3px;
  font-weight: 600;
  color: ${(props) => (props.isActive ? 'var(--primary-color)' : 'var(--txt-secondary)')};
  padding: 5px;
  border-radius: 5px;
  background-color: ${(props) => (props.isActive ? 'var(--secondary-color)' : 'transparent')};
  cursor: pointer;
`;

export const Separator = styled.div`
  height: 15px;
  width: 2px;
  opacity:.3;
  background-color: var(--txt-secondary);
  border-radius: 20px;
  align-self: center;
  margin: 0 10px;
  @media(width < 768px){
    display:none;
  }
`;
