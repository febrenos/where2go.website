import React from 'react'
import * as Styled from './style.jsx';

export function Text({ text, size, bold, width }) {
    return <Styled.StyledText size={size} bold={bold} width={width}>{text}</Styled.StyledText>;
}
  