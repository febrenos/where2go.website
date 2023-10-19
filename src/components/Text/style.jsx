import styled from 'styled-components';

export const StyledText = styled.div`
  font-size: ${(props) => {
    switch (props.size) {
      case 'sm':
        return '12px';
      case 'md':
        return '16px';
      case 'lg':
        return '20px';
      case 'xlg':
          return '24px';
      default:
        return '16px'; // Tamanho padrão: médio
    }
  }};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  width: ${(props) => (props.width ? props.width : 'auto')};
  color: var(--txt-title);
`;