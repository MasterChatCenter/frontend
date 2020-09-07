import React from 'react';
import { InputStyle, TextStyle } from './styles';

type props = {
  typeInput: string;
  placeholder: string;
  title: string;
  name: string;
};

const InputText: React.FC<props> = ({
  typeInput,
  placeholder,
  title,
  name,
}) => {
  return (
    <div>
      <TextStyle>{title}</TextStyle>
      <InputStyle type={typeInput} placeholder={placeholder} name={name} />
    </div>
  );
};
export default InputText;
