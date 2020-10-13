import React, { FC } from 'react';
import { CSSInputSelect } from './styles';

type props = {
  name: string;
  options: Array<{ value: string; label: string }>;
  value: string;
  handleChange: any;
};

const InputSelect: FC<props> = ({ name, options, handleChange, value }) => (
  <CSSInputSelect>
    <select id={name} name={name} onChange={handleChange} value={value}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  </CSSInputSelect>
);

export default InputSelect;
