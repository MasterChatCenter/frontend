import React, { FC, useState } from 'react';
import { FaPen, FaSave } from 'react-icons/fa';

import { Container, Input } from './styles';

type props = {
  label: string;
  type: string;
  placeholder: string;
  value: string;
};

const InputEdit: FC<props> = ({
  label,
  type,
  placeholder,
  value,
}): JSX.Element => {
  const [isEditable, setEditable] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);

  const handleClick = () => {
    setEditable(!isEditable);

    if (isEditable) {
      alert('Guardando');
    }
  };

  return (
    <Container>
      <label>{label}</label>
      <Input
        type={type}
        placeholder={placeholder}
        value={currentValue}
        onChange={(e) => setCurrentValue(e.target.value)}
        disabled={!isEditable}
      />
      <button type="button" onClick={handleClick}>
        {!isEditable ? <FaPen /> : <FaSave />}
      </button>
    </Container>
  );
};

export default InputEdit;
