import React from 'react';
import { storiesOf } from '@storybook/react';

import InputText from './index';

storiesOf('atoms / Inputs', module).add('InputText', () => (
  <InputText
    name="user"
    title="Usuario"
    typeInput="Text"
    value="texto"
    placeholder="Escribe tu Email"
    handleChange={() => alert('Changing')}
  />
));
