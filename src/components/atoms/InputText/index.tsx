import React from 'react';
import { InputStyle, TextStyle } from './styles';

type props = {
  typeInput?: string;
  type?: string;
  placeholder: string;
  title?: string;
  label?: string;
  name: string;
  value: string | number;
  handleChange: any;
};

const InputText: React.FC<props> = ({
  typeInput,
  type,
  placeholder,
  title,
  label,
  name,
  value,
  handleChange,
}) => {
  return (
    <div>
      <TextStyle>{label || title}</TextStyle>
      <InputStyle
        type={typeInput || type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
export default InputText;
