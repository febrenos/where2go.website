import React from 'react';
import { Text } from '../../index';
import * as Styled from './style';

const RadioButton = ({ label, value, name, checked, onChange }) => {
  return (
    <Styled.RadioButtonWrapper>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <div className="radio"></div>
      {label}
    </Styled.RadioButtonWrapper>
  );
};

export function Radio({title='Tipo', options, selectedValue, onValueChange }){
  return (
    <Styled.Content>
      <Text text={title} size={'md'} bold/>
      <div>
        {options.map((option) => (
          <RadioButton
            key={option.value}
            label={option.label}
            value={option.value}
            name={option.name}
            checked={selectedValue === option.value}
            onChange={() => onValueChange(option.value)}
          />
        ))}
      </div>
    </Styled.Content>
  );
};

export default Radio;
