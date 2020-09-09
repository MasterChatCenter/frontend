import React, { FC, ReactChild } from 'react';
import { CSSInputSelect } from './styles';

type props = {
  label: string;
  icon: ReactChild;
};

const  InputSelect: FC<props> = ({ label, icon }) => (
  <CSSInputSelect>
    <p>{label}</p>
    {icon}
  </CSSInputSelect>
);

export default  InputSelect;

