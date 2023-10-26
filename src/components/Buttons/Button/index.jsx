import React from 'react';
import * as Styled from './style.jsx';

export function Button({ background, text, borderColor, size, solid = false, onClick }) {
  return (
    <Styled.Content>
      <Styled.Button solid={solid} background={background} borderColor={borderColor} size={size} onClick={onClick}>
        {text}
      </Styled.Button>
    </Styled.Content>
  );
};