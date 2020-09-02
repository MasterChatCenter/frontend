import React from 'react';
import { storiesOf } from '@storybook/react';

import LoginForm from '.';

storiesOf('molecules / Forms', module)
  .add('LoginForm', () => (
    <LoginForm handleSubmit={()=>{}}/>
  ));