import React from 'react';
import { storiesOf } from '@storybook/react';

import Login from './index';


storiesOf('organisms / Login', module)
  .add('Normal', () => (
    <Login>Here go the form</Login>
  ));
