import styled from "styled-components";

export const Content = styled.div`
  cursor: pointer;
  & > div, & > *{
    color: ${(props) => (props.type === 'delete' ? 'var(--danger-color)' : 'var(--txt-primary)')};
    font-weight: 700;
  }
  font-size: 17px;
  display: flex;
  align-items: center;
  gap: 15px;
  // padding: 5px;
  width: fit-content;
  width:100%;
  justify-content: ${(props) => {
    switch (props.align) {
      case 'right':
        return 'flex-end';
      case 'center':
        return 'center';
      case 'left':
      default:
        return 'flex-start';
    }
  }};
`;

export const Flex = styled.div`
display:flex;
flex-direction:column;
width:100%;
text-align:center;
& > div, & > *{
  color: ${(props) => (props.type === 'delete' ? 'var(--danger-color)' : 'var(--txt-primary)')};
  font-weight: 700;
}
`;