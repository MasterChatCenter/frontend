import React from 'react';
import { storiesOf } from '@storybook/react';

import RegisterForm from '.';

storiesOf('molecules / Forms', module).add('RegisterForm', () => (
  <RegisterForm onSave={() => alert('Save')} />
));
