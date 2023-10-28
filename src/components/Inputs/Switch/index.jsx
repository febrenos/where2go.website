import React from 'react';
import * as Styled from './style';

export function Switch({ enabled, column = false, size, align = 'left', value, onValueChange = () => {} }) {
  const handleIsActive = () => {
    onValueChange(!value);
  };

  return (
    <Styled.Content column={column} align={align}>
      <Styled.TextContent>
        {enabled.length > 1 ? (
          <Styled.Text size={size}>{value ? enabled[0] : enabled[1]}</Styled.Text>
        ) : (
          <Styled.Text size={size}>{enabled[0]}</Styled.Text>
        )}
      </Styled.TextContent>
      <Styled.SwitchContainer size={size}>
        <Styled.SwitchInput type="checkbox" onClick={handleIsActive} checked={value} />
        <Styled.Slider className="slider" size={size} />
      </Styled.SwitchContainer>
    </Styled.Content>
  );
}