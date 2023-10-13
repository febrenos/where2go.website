import React, { useState, useEffect } from 'react';
import * as Styled from './style';

export function Input({ text, type, size, value, onChange }) {
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    setIsFocus(!!value);
    // (value === '' && isFocus) && setIsBackground(false);
    // (value === '' && !isFocus) && setIsBackground(true);
  }, [value]);

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
        value={value}
        name={text}
        autoComplete="off"
        onFocus={() => setIsFocus(true)}
        onBlur={handleInputBlur}
        onChange={onChange}  // Pass the onChange handler
        isFocus={isFocus}
      />
      <Styled.Label htmlFor={text} isFocus={isFocus}>
        {text}
      </Styled.Label>
    </Styled.Content>
  );
}
