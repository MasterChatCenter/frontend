import React from 'react';
import { storiesOf } from '@storybook/react';

import InputText from './index';


storiesOf('atoms / Inputs', module)
  .add('InputText', () => (
    <InputText
      title="Usuario"
      typeInput="Text"
      placeholder="Escribe tu Email"
  />));

