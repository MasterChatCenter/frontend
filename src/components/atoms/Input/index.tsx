import React from 'react';
import { InputStyle, TextStyle } from './styles';

const Input: React.FC<{ typeInput: string, placeholder: string, title: string }> = ({
  typeInput,
  placeholder,
  title
}) => {
  return (
    <div>
      <TextStyle >
        {title}
      </TextStyle>
      <InputStyle type={typeInput} placeholder={placeholder} />
    </div>
  )
}
export default Input