import React, { FC } from 'react';
import { CSSInputSelect } from './styles';

const InputSelect: FC = () => (
  <CSSInputSelect>
    <select id="category" name="category">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  </CSSInputSelect>
);

export default InputSelect;
