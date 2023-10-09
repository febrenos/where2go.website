import React from "react";
import { useState } from 'react';
import * as Styled from './style.jsx';


export function Input({text, type, size}) {
  const [isFocus, setIsFocus] = useState(false);
  const handleInputBlur = (event) => {
    if (isFocus && event.target.value === '') {
      setIsFocus(false);
    }
    if (type === 'date' && event.target.value === '') {
      setIsFocus(true);
    }
  };

  return (
    <Styled.Content>
      <Styled.Input 
        required="" 
        type={type} 
        size={size}
        id={text}
        name={text}
        autoComplete="off" 
        onFocus={() => setIsFocus(true)}
        onBlur={handleInputBlur}
        isFocus={isFocus}
      />
      <Styled.Label htmlFor={text} isFocus={isFocus}>
          {text}
      </Styled.Label>
    </Styled.Content>
  );
}