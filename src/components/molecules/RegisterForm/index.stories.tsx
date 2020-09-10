import React from 'react';
import { storiesOf } from '@storybook/react';

import RegisterForm from '.';

storiesOf('molecules / Forms', module).add('RegisterForm', () => (
  <RegisterForm>
    <h1>Children</h1>
  </RegisterForm>
));
