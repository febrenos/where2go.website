import React, { useState } from 'react';
import * as Styled from './style';

export function Switch({ enabled, column = false, size }) {
  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => {
      setIsActive(!isActive);
  };

return (
  <Styled.Content column={column}>
      <Styled.SwitchContainer size={size}>
        <Styled.SwitchInput type="checkbox" onClick={handleIsActive}/>
        <Styled.Slider className="slider" size={size} />
      </Styled.SwitchContainer>
      <Styled.TextContent>
      <Styled.Text size={size}>{isActive? enabled[0] : enabled[1] }</Styled.Text>
      </Styled.TextContent>
  </Styled.Content>
);
};

export default Switch;

