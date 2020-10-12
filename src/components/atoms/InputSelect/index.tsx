import React, { FC } from 'react';
import { CSSInputSelect } from './styles';

type props = {
  name: string;
  options: Array<{ value: string; label: string }>;
  handleChange: any;
};

const InputSelect: FC<props> = ({ name, options, handleChange }) => (
  <CSSInputSelect>
    <select id={name} name={name} onChange={handleChange}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  </CSSInputSelect>
);

export default InputSelect;
