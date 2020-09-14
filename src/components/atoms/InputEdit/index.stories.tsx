import React from 'react';
import { storiesOf } from '@storybook/react';

import InputEdit from '.';

storiesOf('atoms / Inputs', module).add('Input Edit', () => (
  <InputEdit
    type="text"
    label="Nombre de la empresa"
    placeholder="Nombre de la empresa"
    value="Patito VC"
    name="any"
    onSave={() => alert('Saved')}
  />
));
