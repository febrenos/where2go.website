import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  gap: ${(props) => (props.column ? '0' : '10px')};
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  align-items: center; /* Align items to center vertically */
`;

export const SwitchContainer = styled.label`
  display: flex;
  position: relative;
  display: inline-block;
  align-items: center;
  width: ${(props) => {
    switch (props.size) {
      case 'sm':
        return '40px';
      default:
        return '60px'; // default to medium (md)
    }
  }};
  height: ${(props) => (props.size === 'sm' ? '24px' : '34px')};
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + .slider {
    background-color: var(--primary-color);
  }

  &:checked + .slider:before {
    transform: translateX(${(props) => (props.size === 'sm' ? '20px' : '17px')});
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--bg-primary);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: ${(props) => (props.size === 'sm' ? '12px' : '17px')};
  height: ${(props) => (props.size === 'sm' ? '24px' : '34px')};
  width: ${(props) => (props.size === 'sm' ? '40px' : '52px')};

  &:before {
    position: absolute;
    content: '';
    height: ${(props) => (props.size === 'sm' ? '16px' : '26px')};
    width: ${(props) => (props.size === 'sm' ? '16px' : '26px')};
    left: ${(props) => (props.size === 'sm' ? '4px' : '4px')};
    bottom: ${(props) => (props.size === 'sm' ? '4px' : '4px')};
    background-color: var(--button-txt);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const TextContent = styled.p`
  display: flex;
  height: ${(props) => (props.size === 'sm' ? '24px' : '34px')};
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  color: var(--txt-secondary);
  font-size: ${(props) => (props.size === 'sm' ? '15px' : '18px')};
  text-align: center;
`;
