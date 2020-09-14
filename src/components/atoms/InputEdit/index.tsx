import React, { FC, useState, useEffect } from 'react';
import { FaPen, FaSave } from 'react-icons/fa';

import { Container, Input } from './styles';

type props = {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onSave: any;
  name: string;
};

const InputEdit: FC<props> = ({
  label,
  type,
  placeholder,
  value,
  onSave,
  name,
}): JSX.Element => {
  const [isEditable, setEditable] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const handleClick = () => {
    if (isEditable) {
      onSave(currentValue, name, setCurrentValue, setEditable);
    } else {
      setEditable(!isEditable);
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
        name={name}
      />
      <button type="button" onClick={handleClick}>
        {!isEditable ? <FaPen /> : <FaSave />}
      </button>
    </Container>
  );
};

export default InputEdit;
