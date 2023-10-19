import React, { useState } from 'react';
import * as Styled from './style';

export function Switch({ enabled, column = false, size, align='left' }) {
  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => {
    setIsActive(!isActive);
  };

  return (
    <Styled.Content column={column} align={align}>
      <Styled.TextContent>
        {enabled.length > 1 ? (
          <Styled.Text size={size}>{isActive ? enabled[0] : enabled[1]}</Styled.Text>
        ) : (
          <Styled.Text size={size}>{enabled[0]}</Styled.Text>
        )}
      </Styled.TextContent>
      <Styled.SwitchContainer size={size}>
        <Styled.SwitchInput type="checkbox" onClick={handleIsActive} />
        <Styled.Slider className="slider" size={size} />
      </Styled.SwitchContainer>
    </Styled.Content>
  );
}
