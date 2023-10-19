import React from 'react';
import { Text } from '../../index';
import * as Styled from './style';

const CheckboxItem = ({ label, value, name, checked, onChange }) => {
  return (
    <Styled.CheckboxWrapper>
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <div className="checkbox"></div>
      {label}
    </Styled.CheckboxWrapper>
  );
};

export function Checkbox({ title = 'Options', options, selectedValues, onValueChange, groupName }) {
  return (
    <Styled.Content>
      <Text text={title} size={'lg'} bold />
      <div>
        {options.map((option) => (
          <CheckboxItem
            key={option.value}
            label={option.label}
            value={option.value}
            name={groupName}
            checked={selectedValues.includes(option.value)}
            onChange={() => onValueChange(option.value)}
          />
        ))}
      </div>
    </Styled.Content>
  );
}