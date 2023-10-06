import React, { useState } from 'react';
import * as Styled from './style';

const words = ['Sol', 'Clássico', 'Música', 'Histórico', 'Comida', 'Ar livre', 'Água', 'Natureza'];

export function WordPreferences() {
  const [isActive, setIsActive] = useState(Array(words.length).fill(false));

  const handleClick = (index) => {
    setIsActive((prevIsActive) => {
      const updatedActive = [...prevIsActive];  // Crie uma nova cópia do array de estado
      updatedActive[index] = !updatedActive[index];  // Alterne o estado do elemento clicado
      return updatedActive;  // Retorne o novo array de estado
    });
  };

  return (
    <Styled.Content>
      {words.map((item, index) => (
        <Styled.Button key={index} onClick={() => handleClick(index)} isActive={isActive[index]}>
          {item}
        </Styled.Button>
      ))}
    </Styled.Content>
  );
}
