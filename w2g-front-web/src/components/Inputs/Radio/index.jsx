import React from 'react';
import { Text } from '../../index';
import * as Styled from './style';

const RadioButton = ({ label, value, name, checked, onChange }) => {
  return (
    <Styled.RadioButtonWrapper>
      <input
        type="radio"
        name={name}  // Use the provided 'name' prop to distinguish the groups
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <div className="radio"></div>
      {label}
    </Styled.RadioButtonWrapper>
  );
};

export function Radio({ title = 'Tipo', options, selectedValue, onValueChange, groupName }) {
  return (
    <Styled.Content>
      <Text text={title} size={'lg'} bold />
      <div>
        {options.map((option) => (
          <RadioButton
            key={option.value}
            label={option.label}
            value={option.value}
            name={groupName}  // Use the provided 'groupName' prop here
            checked={selectedValue === option.value}
            onChange={() => onValueChange(option.value)}
          />
        ))}
      </div>
    </Styled.Content>
  );
}

export default Radio;
