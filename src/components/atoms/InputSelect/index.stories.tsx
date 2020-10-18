import React from 'react';

import { storiesOf } from '@storybook/react';

import InputSelect from '.';

storiesOf('atoms / Inputs', module).add('InputSelect', () => (
  <InputSelect
    name="stori"
    value="1"
    options={[{ value: '1', label: 'Opcion 1' }]}
    handleChange={() => alert('Change')}
  />
));
