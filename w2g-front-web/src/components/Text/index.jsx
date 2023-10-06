import React, { useState } from 'react'
import * as Styled from './style.jsx';

export function Text({text, type, size, width}){
    const [fontWeight, setFontWeight] = useState('normal');
    const [fontSize, setFontSize] = useState('16px');
    const [widthValue, setWidthValue] = useState('auto');

    if (type === 'titulo') {
        setFontWeight('bold');
    }

    if (size === 'sm') {
        setFontSize('12px');
    } else if (size === 'md') {
        setFontSize('16px');
    } else if (size === 'lg') {
        setFontSize('24px');
    }

    if (width) {
        setWidthValue(`${width}px`);
    }

    return(
        <Styled.Text style={{ fontWeight, fontSize, width: widthValue }}>
            {text}
        </Styled.Text>
    )
}