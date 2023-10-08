import styled from 'styled-components';


export const Content = styled.button`
width:100%;
background-color:transparent;
@media(width > 768px){
  width:auto;
}
`
export const Button = styled.button`
  cursor: pointer;
  border-radius: 8px;
  font-weight: bold;
  color: #fff;
  border: 3px solid var(--primary-color);
  background-color: ${(props) => (props.solid ? 'var(--primary-color)' : 'transparent')};
  padding: ${(props) => (props.solid ? '8px 12px' : (props.size === 'lg' ? '10px 18px' : '8px 12px'))};
  font-size: ${(props) => (props.solid ? '16px' : (props.size === 'lg' ? '20px' : '16px'))};
  width: 150px;
  @media(width < 768px){
    width: 100%;
  }
  &:hover {
    transition: .3s;
    box-shadow: 0px 0px 3px 1px #636363;
  }

  &:disabled {
    cursor: unset;
    opacity: 0.3;
  }
`;