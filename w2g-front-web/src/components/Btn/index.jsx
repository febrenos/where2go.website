import React from 'react';
import * as Styled from './style.jsx';

export function Btn({ background, text, borderColor, size, solid = false }) {
  return (
    <Styled.Content>
      <Styled.Button solid={solid} background={background} borderColor={borderColor} size={size}>
        {text}
      </Styled.Button>
    </Styled.Content>
  );
};